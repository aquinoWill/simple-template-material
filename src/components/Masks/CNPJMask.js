import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'

const CNPJMask = props => {
  const { inputRef, ...other } = props
  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
      showMask
    />
  )
}

CNPJMask.propTypes = {
  inputRef: PropTypes.func.isRequired
}

export default CNPJMask
