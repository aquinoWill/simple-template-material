import * as nativeAxios from 'axios'
import { v5 } from 'uuid'

import { BASE_URL } from 'constants/connections'
import { ERROR_TIMEOUT } from 'constants/error'

import { handleErrorStatus } from 'utils/error'
import { getToken } from 'utils/token'

const createRequestIdInterceptor = axios => {
  if (!axios.interceptors) return axios
  axios.interceptors.request.use(config => {
    config.headers['Request-Id'] = v5.DNS
    return config
  })

  return axios
}

const createAxios = () => {
  const axiosInstance = nativeAxios.create
    ? nativeAxios.create({
        baseURL: BASE_URL
      })
    : nativeAxios

  if (!axiosInstance?.defaults) return axiosInstance
  axiosInstance.defaults.headers.common.Authorization = getToken()

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (!error.response) {
        throw new Error(ERROR_TIMEOUT)
      }

      handleErrorStatus(error.response.status)
      return Promise.reject(error)
    }
  )

  return createRequestIdInterceptor(axiosInstance)
}

export default createAxios()
