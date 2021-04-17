export const GetPollReducer = ({ polls }, { type, payload = [] }) => {
  switch (type) {
    case 'POLL_REQUEST':
      return {
        isFetching: true
      }
    case 'POLL_SUCCESS':
      return {
        data: payload,
        isError: false,
        isFetching: false
      }
    case 'POLL_ERROR':
      return {
        data: payload,
        isError: true,
        isFetching: false
      }

    default:
      return polls
  }
}

GetPollReducer.key = 'polls'

GetPollReducer.initialState = {
  data: [],
  isError: false,
  isFetching: false
}
