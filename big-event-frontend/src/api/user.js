//导入request.js请求工具
import request from '@/utils/request.js'

//提供调用注册接口的函数
export const userRegisterService = (registerData) => {
  //借助UrlSearchParams完成传递
  const params = new URLSearchParams()
  for(let key in registerData){
    params.append(key,registerData[key]);
  }
  return request.post('user/register',params);
}

//提供调用登录接口的函数
export const userLoginService = (loginData) => {
  //借助UrlSearchParams完成传递
  const params = new URLSearchParams()
  for(let key in loginData){
    params.append(key,loginData[key]);
  }
  return request.post('/user/login',params);
}

//获取个人信息
export const userInfoGetService = ()=>{
  return request.get('/user/userInfo');
}

//修改个人信息
export const userInfoUpdateService = (userInfo) =>{
  return request.put('/user/update',userInfo)
}

//修改头像
export const userAvaUpdateService = (avatarUrl) => {
  const params = new URLSearchParams();
  params.append('avatarUrl',avatarUrl);
  return request.patch('/user/updateAvatar',avatarUrl);
}