export const AlternativesReducer = ({ alternatives }, { type, payload = [] }) => {
  switch (type) {
    case 'ALTERNATIVES_REQUEST':
      return {
        isFetching: true
      }
    case 'ALTERNATIVES_SUCCESS':
      return {
        data: payload,
        isError: false,
        isFetching: false
      }
    case 'ALTERNATIVES_ERROR':
      return {
        data: payload,
        isError: true,
        isFetching: false
      }

    default:
      return alternatives
  }
}

AlternativesReducer.key = 'alternatives'

AlternativesReducer.initialState = {
  data: [],
  isError: false,
  isFetching: false
}
