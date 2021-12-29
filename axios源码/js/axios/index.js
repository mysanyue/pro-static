import Axios from './axios.js';
import defaultConfig from './defaultConfig.js';
import utils from './utils.js';


function createInstance(config) {
  var context = new Axios(config);
  var request = utils.bind(Axios.prototype.request, context);

  utils.extend(request, Axios.prototype, context);
  utils.extend(request, context);

  return request;
}

var axios = createInstance(defaultConfig);

axios.create = function (config) {
  return createInstance(config);
}

export default axios;
