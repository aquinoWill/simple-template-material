import axios from 'config/axios'

const URL = '/urlUpload'

export const uploadService = ({ images }) => axios.post(URL, { images })
