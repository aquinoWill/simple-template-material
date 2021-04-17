export const MembersReducer = ({ members }, { type, payload = [] }) => {
  switch (type) {
    case 'MEMBERS_REQUEST':
      return {
        isFetching: true
      }
    case 'MEMBERS_SUCCESS':
      return {
        data: payload,
        isError: false,
        isFetching: false
      }
    case 'MEMBERS_ERROR':
      return {
        data: payload,
        isError: true,
        isFetching: false
      }

    default:
      return members
  }
}

MembersReducer.key = 'members'

MembersReducer.initialState = {
  data: [],
  isError: false,
  isFetching: false
}
