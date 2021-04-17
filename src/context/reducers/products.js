export const ProductsReducer = ({ product }, { type, payload = {} }) => {
  switch (type) {
    case 'GET_PRODUCTS':
      return {
        isFetching: true
      }
    case 'PRODUCTS_SUCCESS':
      return {
        data: payload,
        isError: false,
        isFetching: false
      }
    case 'PRODUCTS_ERROR':
      return {
        data: payload,
        isError: true,
        isFetching: false
      }

    default:
      return product
  }
}

ProductsReducer.key = 'products'

ProductsReducer.initialState = {
  data: {},
  isError: false,
  isFetching: false
}
