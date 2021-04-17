export const PollsReducer = ({ polls }, { type, payload = [] }) => {
  switch (type) {
    case 'POLLS_REQUEST':
      return {
        isFetching: true
      }
    case 'POLLS_SUCCESS':
      return {
        data: payload,
        isError: false,
        isFetching: false
      }
    case 'POLLS_ERROR':
      return {
        data: payload,
        isError: true,
        isFetching: false
      }

    default:
      return polls
  }
}

PollsReducer.key = 'polls'

PollsReducer.initialState = {
  data: [],
  isError: false,
  isFetching: false
}
