import request from '@/utils/request'
interface ResponseData<T = any> {
  status: number
  msg: string
  data: T
}

class CommonService {
  getLoginInfo() {
    return request.get<
      ResponseData<{
        logo_square: string
        logo_rectangle: string
        login_logo: string
        slide: string[]
      }>
    >('/login/info')
  }
}
export default new CommonService()
