import React from 'react'
import { node, string, func, bool, arrayOf, shape } from 'prop-types'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, IconButton, Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import dialogStyled from './styled'

export const DialogComponent = ({ children, isOpen, title, description, handleClose, actions }) => {
  const { closeButton } = dialogStyled()

  const getActionsButtons = actionsList =>
    actionsList.map(button => (
      <Button key={button.text} onClick={button.action}>
        {button.text}
      </Button>
    ))

  return (
    <Dialog disableBackdropClick disableEscapeKeyDown maxWidth='xs' open={isOpen} onClose={handleClose} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>
        {title}
        <IconButton aria-label='close' className={closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
        {children}
      </DialogContent>
      {actions && <DialogActions>{getActionsButtons(actions)}</DialogActions>}
    </Dialog>
  )
}

DialogComponent.propTypes = {
  isOpen: bool.isRequired,
  title: string.isRequired,
  children: node.isRequired,
  handleClose: func.isRequired,
  description: string.isRequired,
  actions: arrayOf(
    shape({
      text: string,
      action: func
    })
  )
}

export default DialogComponent
