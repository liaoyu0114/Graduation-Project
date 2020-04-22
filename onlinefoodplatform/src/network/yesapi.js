import axios from 'axios'
import qs from 'qs'

function yesapi(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'https://hn216.api.yesapi.cn/',
    timeout: 5000,
    // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
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

export function sendEmail(mail) {
  return yesapi({
    url: "/",
    method: "get",
    params: {
      "s":"App.Email.SendCaptcha",
      "app_key": "EBF28D9EA62E61A34201DC74A3E8991E",
      "address": mail
    }
  })
}
export function verifyEmail(data) {
  return yesapi({
    url: "/",
    method: "get",
    params: {
      "s":"App.Email.VerifyCaptcha",
      "app_key": "EBF28D9EA62E61A34201DC74A3E8991E",
      "address": data.mail,
      "captcha": data.captcha
    }
  })
}