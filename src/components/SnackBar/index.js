import React from 'react'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { useContextConsumer } from 'context'
import SnackStyles from './styled'

const Alert = props => <MuiAlert elevation={6} variant='filled' {...props} />

const SnackBar = () => {
  const { root } = SnackStyles()
  const [{ snackBar }, dispatch] = useContextConsumer()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch({ type: 'SNACKBAR_CLOSED' })
  }

  return (
    <div className={root}>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        open={snackBar.isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackBar.type}>
          {snackBar.data}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SnackBar
