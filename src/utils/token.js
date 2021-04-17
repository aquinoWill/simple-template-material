export const removeToken = () => localStorage.removeItem('jwt_token')

export const getToken = () => localStorage.getItem('jwt_token') || ''
