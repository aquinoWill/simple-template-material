import axios from 'config/axios'

const URL = '/authenticate'

export const userService = ({ username, password }) => axios.post(URL, {}, { auth: { username, password } })
