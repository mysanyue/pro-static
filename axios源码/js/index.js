import Axios from './axios/index.js';
import fetchAdapter from './axios/fetchAdapter.js';
import xhrAdapter from './axios/xhrAdapter.js';




Axios.interceptors.request.use(function (config) {
  console.log('request1');
  return config;
});

Axios.interceptors.request.use(function (config) {
  console.log('request2');
  return config;
});

Axios.interceptors.response.use(function (response) {
  console.log('response1');
  return response
}, function (err) {
  console.log('err1', err);
  return Promise.reject(err);
});

Axios.interceptors.response.use(function (response) {
  console.log('response2');
  return response;
}, function (err) {
  console.log('err2', err);
  return Promise.reject(err);
});

Axios.request({
  method: 'get',
  url: 'http://192.168.1.2:2323/api/Tes/GetData',
  data: { x: 1 }
}).then(function (res) {
  console.log(res);
}).catch(err => {
  console.log()
});
