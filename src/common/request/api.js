/*
 * @Author: Lvhz
 * @Date: 2021-08-18 14:53:27
 * @Description: Description
 */
import http from './index.js';

// const baseUrl = 'http://139.159.156.184:9001/pre'
const baseUrl = 'https://tjy.yipingtech.com/pre'

const commonApi = {
  captcha: (params = {}) => {
    params.isWhiteList = true
    return http.get(baseUrl + '/auth/captcha.jpg', params)
  },
  login: (params = {}) => {
    params.isWhiteList = true
    return http.post(baseUrl + `/login?username=${params.username}&password=${params.password}&code=${params.code}&key=${params.key}`, params)
  },
  // 获取用户详情
  getUserInfo: params => {
    return http.get(baseUrl + '/info', params);
  },
}

// 维修管理
const repairManageApi = {
  // 分页查询维修单列表--维保单位人员
  getMaintainUnitTicketPage: params => {
    return http.get(baseUrl + '/v1/miniapp/ticket/getMaintainUnitTicketPage', params);
  },
  // 维修人员接单
  receive: params => {
    return http.post(baseUrl + '/v1/ticket/receive', params);
  },
  // 维修人员完成工单
  finish: params => {
    return http.post(baseUrl + '/v1/ticket/finish', params)
  },
  // 查看维修单进度
  getTicketFlow: params => {
    return http.get(baseUrl + '/v1/ticket/getTicketFlow', params)
  },
}

export {
  commonApi,
  repairManageApi
};