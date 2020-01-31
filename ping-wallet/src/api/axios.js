import axios from 'axios'

// const CancelToken = axios.CancelToken;
axios.interceptors.request.use((config) => {
  // const source = CancelToken.source();
  // config.cancelToken = source.token
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default axios
