/*
 * @Author: Lvhz
 * @Date: 2020-05-07 09:23:18
 * @Descripttion: 
 */
export default class HttpClient {
  constructor() {
  }
  async request(url, config) {
    const { isWhiteList } = config.data;
    const token = uni.getStorageSync('token');
    const header = {}
    if(token && !isWhiteList) header['Authorization'] = 'Bearer ' + token
    const response = await uni.request({
      url: url,
      header: header,
      dataType: 'json', 
      ...config 
      // data: data,
      // method: type,       
    })
    let [error, res] = response;
    const data = res.data || {}
    if(parseInt(data.code || 0) === 401) {
      uni.navigateTo({
        url: `/pages/login/index`
      });
    }
    return data
  }
  get(url, params = {}) {
    return this.request(url, {
      data: params || {},
      method: 'GET'
    });
  }
  post(url, params = {}) {
    return this.request(url, {
      data: params || {},
      method: 'POST'
    });
  }
  // delete(url, params = {}) {
  //   return this.request(url, {
  //     params: params || {},
  //     method: 'delete'
  //   });
  // }
  // formPost(url, params = {}) {
  //   return this.request(url, {
  //     data: params || {},
  //     method: 'post',
  //     transformRequest: [
  //       function(data) {
  //         let ret = '';
  //         for (const it in data) {
  //           ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
  //         }
  //         ret = ret.substring(0, ret.lastIndexOf('&'));
  //         return ret;
  //       }
  //     ],
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //   });
  // }
  // put(url, params = {}) {
  //   return this.request(url, {
  //     data: params || {},
  //     method: 'put'
  //   });
  // }
}
