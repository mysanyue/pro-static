import Vue from 'vue'
import moment from 'moment'

/**
 * @description 货币处理，位数不够自动填充0
 * @param {*} val 需要转换的数字
 * @param {*} inscriber 保留几位小数，默认两位
 * @returns
 */
function currencyFilter(val, inscriber = 2) {
  val = Number(val)
  if (isNaN(val)) return ''
  const ret = val.toFixed(inscriber)
  return (ret + '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
}

/**
 * @description 数字类型处理，位数不够 不会 填充0
 * @param {*} val 需要格式化的数据
 * @param {*} inscriber 保留几位小数，默认两位
 * @returns
 */
function numberFilter(val, inscriber = 2) {
  val = Number(val)
  if (isNaN(val)) return ''
  const ret = Math.round(val * Math.pow(10, inscriber)) / Math.pow(10, inscriber)
  return (ret + '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
}

/**
 * @description 日期格格式化处理
 * @param {*} date 需要格式化的日期
 * @param {*} isHour 是否需要显示时分秒
 * @param {*} format 格式化格式
 * @returns
 */
function dateFilter(date, isHour, format = 'YYYY-MM-DD') {
  if (!date) return ''
  date = new Date(date)
  if (isHour) format += ' HH:mm:ss'
  return moment(date).format(format)
}

/**
 * @description 精准计算 位数不够 不会 填充0
 * @param {*} val 计算的值
 * @param {*} inscriber 保留几位小数，默认两位
 * @returns
 */
function multiplyFilter(val, inscriber = 2) {
  if (!val) return ''
  val = Number(val) * 100
  if (isNaN(val)) return ''
  return Math.round(val * Math.pow(10, inscriber)) / Math.pow(10, inscriber)
}

Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)
Vue.filter('number', numberFilter)
Vue.filter('multiply', multiplyFilter)

export { currencyFilter as currency, dateFilter as date, numberFilter as number, multiplyFilter as multiply }
