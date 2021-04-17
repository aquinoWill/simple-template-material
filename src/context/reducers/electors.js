export const ElectorsReducer = ({ electors }, { type, payload = [] }) => {
  switch (type) {
    case 'ELECTORS_REQUEST':
      return {
        isFetching: true
      }
    case 'ELECTORS_SUCCESS':
      return {
        data: payload,
        isError: false,
        isFetching: false
      }
    case 'ELECTORS_ERROR':
      return {
        data: payload,
        isError: true,
        isFetching: false
      }

    default:
      return electors
  }
}

ElectorsReducer.key = 'electors'

ElectorsReducer.initialState = {
  data: [],
  isError: false,
  isFetching: false
}
