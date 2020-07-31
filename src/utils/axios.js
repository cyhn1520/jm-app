import axios from 'axios';

const instance = axios.create({
  // baseURL: constants.baseServiceUrl,
  timeout: 10000,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.defaults.headers = {
  "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
	"x-rapidapi-key": "ce383f1c40mshf25de6dd399a9edp1397ccjsn89491a1c6223",
	"useQueryString": true
}

/* ********** REQUEST INTERCEPTOR  ********** */
function onRequest(config) {
  return config;
}

function onRequestFailed(error) {
  return Promise.reject(error);
}

/* ********** RESPONSE INTERCEPTOR  ********** */
function onResponse(response) {
  return response;
}

function onResponseFailed(error) {
  return Promise.reject(error);
}

instance.interceptors.request.use(onRequest, onRequestFailed);
instance.interceptors.response.use(onResponse, onResponseFailed);


export default instance;