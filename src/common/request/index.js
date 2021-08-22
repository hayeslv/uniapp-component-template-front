/*
 * @Author: Lvhz
 * @Date: 2021-08-15 18:00:30
 * @Description: Description
 */
   

import HttpClient from './HttpClient.js';
const httpClient = new HttpClient();

export default httpClient;




// const request = (url = '', data = {}, type = 'GET') => {
//   const token = store.state.token
//   const header = {}
//   if(token) {
//     header['Authorization'] = 'Bearer ' + token
//   } else {
//     // 测试用token
//     header['Authorization'] = 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJ0ZW5hbnRUeXBlIjoiMSIsInN1YiI6ImFkbWluIiwidGVuYW50TmFtZSI6IuW5s-WPsCIsInBob25lIjoiMTc1MjEyOTY4NjkiLCJjcmVhdGVkIjoxNjI5MjY3OTA4NzcyLCJ0ZW5hbnRJZCI6MSwiZXhwIjoxNjI5MzU0MzA4LCJ1c2VyaWQiOjQsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJzeXM6ZGVwdDp1cGRhdGUifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5IjoiYml6Om1haW50YWluOnRpY2tldDp2aWV3In0seyJhdXRob3JpdHkiOiJiaXo6bWFpbnRhaW46cnVsZTpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZzpkZWxldGUifSx7ImF1dGhvcml0eSI6ImJpejp0aWNrZXQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDp2aWV3In0seyJhdXRob3JpdHkiOiJiaXo6bWFpbnRhaW46cnVsZTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGlwdDp2aWV3In0seyJhdXRob3JpdHkiOiJiaXo6bWFpbnRhaW46cnVsZTphZGQifSx7ImF1dGhvcml0eSI6InN5czpkaWN0SXRlbTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdEl0ZW06ZGVsIn0seyJhdXRob3JpdHkiOiJzeXM6c29jaWFsOnVudGllZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6dXBkYXRlIn0seyJhdXRob3JpdHkiOiJzeXM6c29jaWFsOnZpZXcifSx7ImF1dGhvcml0eSI6ImJpejptYWludGFpbjp0aWNrZXQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDphZGQifSx7ImF1dGhvcml0eSI6ImJpejpkZXZpY2U6dXBkYXRlIn0seyJhdXRob3JpdHkiOiJiaXo6bWFpbnRhaW46cnVsZTp0ZW1wbGF0ZTp1cGRhdGUifSx7ImF1dGhvcml0eSI6InN5czpkaWN0SXRlbTphZGQifSx7ImF1dGhvcml0eSI6InN5czp0ZW5hbnQ6YWRkIn0seyJhdXRob3JpdHkiOiJiaXo6bWFpbnRhaW46cnVsZTp1cGRhdGUifSx7ImF1dGhvcml0eSI6ImJpejp0aWNrZXQ6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOm1lbnU6dXBkYXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkaWN0OmVkaXQifSx7ImF1dGhvcml0eSI6ImJpejptYWludGFpbjppdGVtOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOnVwZGF0ZUVtYWlsIn0seyJhdXRob3JpdHkiOiJiaXo6ZGV2aWNlOnZpZXcifSx7ImF1dGhvcml0eSI6IlJPTEVfNSJ9LHsiYXV0aG9yaXR5Ijoic3lzOm1lbnU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6ImJpejptYWludGFpbjppdGVtOnVwZGF0ZSJ9LHsiYXV0aG9yaXR5IjoiYml6Om1haW50YWluOnRpY2tldDp1cGRhdGUifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOnRlbmFudDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp1cGRhdGUifSx7ImF1dGhvcml0eSI6InN5czptZW51OnZpZXcifSx7ImF1dGhvcml0eSI6ImJpejptYWludGFpbjpydWxlOnRlbXBsYXRlOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRpY3Q6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOnZpZXcifSx7ImF1dGhvcml0eSI6ImJpejptYWludGFpbjppdGVtOmFkZCJ9LHsiYXV0aG9yaXR5IjoiYml6OnRpY2tldDphZGQifSx7ImF1dGhvcml0eSI6ImJpejptYWludGFpbjpydWxlOnRlbXBsYXRlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOnVwZGF0ZVBhc3MifSx7ImF1dGhvcml0eSI6ImJpejpkZXZpY2U6YWRkIn0seyJhdXRob3JpdHkiOiJiaXo6bWFpbnRhaW46aXRlbTpkZWxldGUifSx7ImF1dGhvcml0eSI6ImJpejp0aWNrZXQ6dXBkYXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29kZWdlbjpjb2RlZ2VuIn0seyJhdXRob3JpdHkiOiJiaXo6bWFpbnRhaW46dGlja2V0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJiaXo6bWFpbnRhaW46cnVsZTp0ZW1wbGF0ZTpkZWxldGUifSx7ImF1dGhvcml0eSI6ImJpejpkZXZpY2U6ZGVsZXRlIn1dfQ.tFSMGDdvbqyQlg22xidTO6yPsOgdWCp1kwQSPgDF9j4DUSIjiaaE6NU8ik4QQFPifPGbBLcxdLCNAT9DU710_g'
//   }
//   return new Promise((resolve, reject) => {
//     uni.request({
//         method: type,
//         url: baseUrl + url,
//         data: data,
//         header: header,
//         dataType: 'json',         
//     }).then((response) => {
//         setTimeout(function() {
//             uni.hideLoading();
//         }, 200);
//         let [error, res] = response;
//         // 未登录或登录过期
//         if(parseInt(res.data.code || 0) === 401) {
//           uni.navigateTo({
//             url: `/pages/login/index`
//           });
//         }
//         resolve(res.data);
//     }).catch(error => {
//         let [err, res] = error;
//         reject(err)
//     })
//   });
// }
// export default request