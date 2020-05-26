import axios from 'axios'
import qs from 'qs'

function qsData(data) {
  return qs.stringify(data, {allowDots: true})
}

function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'https://api.hhh233.xyz/onlineplatform',
    timeout: 5000,
    // headers : {
    //   "Content-Type":'application/json; charset=UTF-8'
    // },
    // transformRequest: [
    //
    //   function (data) { // 解决传递数组变成对象的问题
    //
    //     Object.keys(data).forEach((key) => {
    //
    //       if ((typeof data[key]) === 'object') {
    //
    //         data[key] = JSON.stringify(data[key]) // 这里必须使用内置JSON对象转换
    //
    //       }
    //
    //     })
    //
    //     data = qs.stringify(data); // 这里必须使用qs库进行转换
    //
    //     return data
    //
    //   }
    //
    // ]
  });


  //response拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error);
  });

  //3.发生网络请求
  return instance(config)
}

export default function(url, data) {
  return request({
    url: url,
    method: "post",
    data: qsData(data)
  })
}
