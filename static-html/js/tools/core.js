/* eslint-disable no-cond-assign */
let sysObj = {};
let browserInfo = navigator.userAgent.toLowerCase();
let vsMsg = '';

(vsMsg = browserInfo.match(/msie ([\d.]+)/))
  ? (sysObj.ie = vsMsg[1])
  : (vsMsg = browserInfo.match(/firefox\/([\d.]+)/))
  ? (sysObj.firefox = vsMsg[1])
  : (vsMsg = browserInfo.match(/chrome\/([\d.]+)/))
  ? (sysObj.chrome = vsMsg[1])
  : (vsMsg = browserInfo.match(/opera.([\d.]+)/))
  ? (sysObj.opera = vsMsg[1])
  : (vsMsg = browserInfo.match(/version\/([\d.]+).*safari/))
  ? (sysObj.safari = vsMsg[1])
  : 0;

if (sysObj.ie) {
  console.log('IE: ' + sysObj.ie);
}
if (sysObj.firefox) {
  console.log('Firefox: ' + sysObj.firefox);
}
if (sysObj.chrome) {
  console.log('Chrome: ' + sysObj.chrome);
}
if (sysObj.opera) {
  console.log('Opera: ' + sysObj.opera);
}
if (sysObj.safari) {
  console.log('Safari: ' + sysObj.safari);
}

// function getBrowserInfo() {
//   let sysObj = {};
//   let browserInfo = navigator.userAgent.toLowerCase();
//   let regular = /(msie|firefox|chrome|opera|version).*?([\d.]+)/;
//   let vsMsg = browserInfo.match(regular);
//   sysObj.browserName = vsMsg[1].replace(/version/, 'safari');
//   sysObj.versionInfo = vsMsg[2];
//   return sysObj;
// }
// let browserInfo = getBrowserInfo();
// console.log(browserInfo.browserName + '的版本是：' + browserInfo.versionInfo);
