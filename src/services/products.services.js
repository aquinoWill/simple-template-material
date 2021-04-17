import axios from 'config/axios'

const URL = 'public/products'

export const productsService = () => axios.get(URL)
