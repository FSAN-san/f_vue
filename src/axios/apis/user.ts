import http from '../filter'
import { AxiosRequestConfig } from 'axios'

const userApi = (config: AxiosRequestConfig) => {
  config.url = '/user' + config.url
  return http(config)
}

interface loginInter {
    // 用户名
    username: string,
    // 密码
    password: string,
    // 验证码的key
    codeKey: string,
    // 验证码的值
    code: string
}

const login = (data: loginInter) => {
  return userApi({
    url: '/login',
    method: 'post',
    data
  })
}

export default {
  login
}
