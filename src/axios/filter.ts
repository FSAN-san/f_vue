import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'

const httpConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:8080/',
  timeout: 3600,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
}

const http = axios.create(httpConfig)

// 请求拦截器
http.interceptors.request.use(req => {
  (<AxiosRequestHeaders>req.headers).token = 'this is token'
  return req
})

// 响应拦截器
http.interceptors.response.use(({ status, statusText, data }) => {
  if (status !== 200) {
    // ElMessage.error(statusText || '系统异常！')
    return Promise.reject(statusText)
  } else {
    if (data.code !== 200) {
      // ElMessage.error(data.msg || '请求失败！')
      return Promise.reject(data.msg)
    }
  }
  return data.data
})

export default http
