import React from 'react'
import { object } from 'prop-types'
import { TextField, FormControl } from '@material-ui/core'

const TextFields = ({ field: { ...fields }, ...props }) => (
  <FormControl fullWidth>
    <TextField {...fields} {...props} margin='normal' />
  </FormControl>
)

TextFields.propTypes = {
  field: object,
  props: object
}

export default TextFields
