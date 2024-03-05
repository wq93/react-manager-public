import axios, {AxiosError} from 'axios'
import {message} from 'antd'
import {showLoading, hideLoading} from "./loading";

// 创建实例
const instance = axios.create({
  baseURL: 'api',
  timeout: 8000,
  timeoutErrorMessage: '请求超时, 请稍后再试',
  withCredentials: true
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token')
    if(token) {
      config.headers.Authorization = `Token::${token}`
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    const data = response.data
    hideLoading()
    return data.data
  },
  (error) => {
    hideLoading()
    message.error(error.message)
    return Promise.reject(error.message)
  }
)
