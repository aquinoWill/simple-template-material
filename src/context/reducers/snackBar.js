export const SnackBar = ({ snackBar }, { type, payload = {} }) => {
  switch (type) {
    case 'SNACKBAR_SUCCESS':
      return {
        data: payload,
        type: 'success',
        isOpen: true
      }
    case 'SNACKBAR_WARNNING':
      return {
        data: payload,
        type: 'warnning',
        isOpen: true
      }
    case 'SNACKBAR_INFO':
      return {
        data: payload,
        type: 'info',
        isOpen: true
      }
    case 'SNACKBAR_ERROR':
      return {
        data: payload,
        type: 'error',
        isOpen: true
      }
    case 'SNACKBAR_CLOSED':
      return {
        isOpen: false
      }
    default:
      return snackBar
  }
}

SnackBar.key = 'snackBar'

SnackBar.initialState = {
  data: {},
  type: '',
  isOpen: false
}
