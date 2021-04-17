import { UNAUTHORIZED, GATEWAY_TIMEOUT } from 'constants/httpStatus'
import { removeToken } from 'utils/token'

export const handleErrorStatus = status => {
  switch (status) {
    case UNAUTHORIZED:
    case GATEWAY_TIMEOUT:
      removeToken()
      window.location.href = '/login'
      break
    default:
      return null
  }
}

export const statusErrorApi = ({ data: { message } }) => {
  const messagesError = {}

  return messagesError[message] || 'Ocorreu um erro inesperado. Tente novamente.'
}
