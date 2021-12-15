import axios from 'axios'
import router from '@/router/index'
import localService from '@/common/service/localService'
import sessionService from '@/common/service/sessionService'
import store from '@/store'
import { MessageBox } from 'element-ui'

class Http {
  service = null
  config = {
    baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_URL : '/',
    timeout: 5000,
    responseType: 'json',
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
  }

  constructor(customeConfig = {}) {
    this.service = axios.create(Object.assign(this.config, customeConfig))
    // 拦截器：请求前 查看入参
    this.service.interceptors.request.use(
      config => {
        return this.requestInterceptors(config)
      },
      error => {
        return Promise.reject(error)
      }
    )
    // 拦截器：响应后 查看数据源是否存在问题
    this.service.interceptors.response.use(
      response => {
        return this.responseInterceptors(response)
      },
      error => {
        return this.errorHandle(error)
      }
    )
  }

  /**
   * 拦截器-请求前的逻辑方法
   * @param {Object} config 请求前http配置
   * @returns config拦截器处理之前的配置
   */
  requestInterceptors(config) {
    config.headers.token = store.getters.token
    return config
  }

  /**
   * 拦截器-请求后的逻辑方法
   * @param {Object} config 请求后http配置
   * @returns config拦截器处理之后的配置
   */
  responseInterceptors(response) {
    const { success, error } = response.data
    if (success) {
      return response.data.data
    } else {
      MessageBox.alert(error, '请求失败', {
        confirmButtonText: '确定',
        type: 'error',
      })
      return Promise.reject(response)
    }
  }

  /**
   * @description 错误处理方法
   * @param { Object } error
   */
  errorHandle(error) {
    switch (error.response.status) {
      case 401:
        MessageBox.alert('您的用户名或密码错误，请重新登录！', '请登录', {
          confirmButtonText: '确定',
          type: 'error',
          callback: action => {
            sessionService.removeAll()
            localService.removeAll()
            router.replace({ path: '/login', query: { redirect: router.currentRoute.fullPath } })
          },
        })
        break
      case 403:
        MessageBox.alert('您的登录状态已过期，请重新登录！', '请登录', {
          confirmButtonText: '确定',
          type: 'error',
          callback: action => {
            sessionService.removeAll()
            localService.removeAll()
            router.replace({ path: '/login', query: { redirect: router.currentRoute.fullPath } })
          },
        })
        break
      case 404:
        MessageBox.alert('404错误 找不到请求地址！', '请求不存在', {
          confirmButtonText: '确定',
          type: 'error',
        })
        break
      case 500:
        MessageBox.alert('500错误 服务器出错了！', '服务器错误', {
          confirmButtonText: '确定',
          type: 'error',
        })
        break
      default:
        MessageBox.alert('未知错误，请检查！', '未知错误', {
          confirmButtonText: '确定',
          type: 'error',
        })
    }
    return Promise.reject(error)
  }
}

const http = new Http().service
export { http }
export default Http
