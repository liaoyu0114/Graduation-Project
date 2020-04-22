import {request} from "./request";
import qs from 'qs'

export function sign(data) {
  /**
   * 登录
   * user_phone y
   * user_password y
   */
  return request({
    method: 'post',
    url: '/login',
    data: qs.stringify(data)
  })
}
export function regist(data) {
  /** 
   * 注册
   * user_phone y
   * user_password y
   * user_mail y
   */
  return request({
    method: "post",
    url: "/regist",
    data: qs.stringify(data)
  })
}
export function updateuser(data) {
  /**
   * 更新用户信息
   * user_id y
   * user_nickname n
   * user_sex n
   * user_pic n
   * user_mail n
   * collection n 收藏菜品
   */
  return request({
    method: "post",
    url: "/updateUser",
    data: qs.stringify(data)
  })
}
export function updatepassword(data) {
  /**
   * 修改密码
   * user_id y
   * user_password y
   */
  return request({
    method: "post",
    url: "/updatepassword",
    data: qs.stringify(data)
  })
}
export function delectuser(data) {
  /**
   * 删除用户
   * user_id y
   */
  return request({
    method: "post",
    url: "/delectuser",
    data: qs.stringify(data)
  })
} 
export function addOrder(data) {
  /**
   * 添加订单
   * user_id y
   * dishes_id y
   * number n
   * remark n
   * tableware_number n
   * consignee_phone y
   * consignee_address y
   */
  return request({
    method: "post",
    url: "/addOrder",
    data: qs.stringify(data)
  })
}
export function updatestate(data) {
  /**
   * 修改订单状态
   * order_id y
   * state n
   */
  return request({
    method: "post",
    url: "/updatestate",
    data: qs.stringify(data)
  })
}
export function selectOrderByState(data) {
  /**
   * 根据状态查询订单列表
   * user_id y
   * state n
   */
  return request({
    method: "post",
    url: "/selectOrderByState",
    data: qs.stringify(data)
  })
}
export function selectshoprandom(data) {
  /**
   * 模糊随机返回店铺15条
   * shop_name n
   * */ 

  return request({
    method: "post",
    url: "/selectshoprandom",
    data: qs.stringify(data)
  })
}
export function addReceiving(data) {
    /**
   * 添加收货人
   * user_id y
   * receiving_name y
   * receiving_phone y
   * receiving_address y
   * */ 
  return request({
    method: "post",
    url: "/addReceiving",
    data: qs.stringify(data)
  })
}
export function selectReceivingByUserId(data) {
  /**
   *  根据用户id收货人列表
   * user_id y
   * */ 
  return request({
    method: "post",
    url: "/selectReceivingByUserId",
    data: qs.stringify(data)
  })
}
export function selectreceivingbyid(data) {
  /**
   * 根据收货人id查询收货人
   * receiving_id y
   * */
  return request({
    method: "post",
    url: "/selectreceivingbyid",
    data: qs.stringify(data)
  })
}
export function updatereceivinginfo(data) {
  /**
   * 修改收货人信息
   * receiving_name y
   * receiving_phone
   * receiving_address
   */
  return request({
    method: "post",
    url: "/updatereceivinginfo",
    data: qs.stringify(data)
  })
}
export function delectreceiving(data) {
  /**
   *  删除收货人
   * receiving_id
   */
  return request({
    method: "post",
    url: "/delectreceiving",
    data: qs.stringify(data)
  })
}