import {request} from "./request";
import qs from 'qs'

export function sign(data) {
  return request({
    method: 'post',
    url: '/login',
    data: qs.stringify(data)
  })
}

export function regist(data) {
  return request({
    method: "post",
    url: "/regist",
    data: qs.stringify(data)
  })
}
