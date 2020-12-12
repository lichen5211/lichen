import axios from 'axios'
var instance = axios.create({
    url:"/",
    timeout: 5000,
    headers: {'X-Requested-With': 'XMLHttpRequest'}
  });
 
instance.interceptors.request.use(function (config) {//添加 请求响应器
  return config;
},function(error){
return Promise.reject(error)
});

instance.interceptors.request.use(function (response) {  //添加响应拦截器
 
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }); 
  export default instance