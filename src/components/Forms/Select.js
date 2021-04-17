import React, { useState, useCallback } from 'react'
import { func, string, arrayOf, object } from 'prop-types'
import { TextField, MenuItem, FormControl } from '@material-ui/core'

const Select = ({ field: { ...fields }, ...props }) => {
  const [currency, setCurrency] = useState('')
  const handleChange = useCallback(
    event => {
      setCurrency(event?.target?.value)
      props.setFieldValue(props.name, event?.target?.value)
    },
    [props.setFieldValue, props.name, currency]
  )

  return (
    <FormControl fullWidth>
      <TextField select value={currency} onChange={handleChange} {...fields} {...props}>
        {props.data.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  )
}

Select.propTypes = {
  id: string,
  name: string,
  label: string,
  field: object,
  helperText: string,
  setFieldValue: func,
  data: arrayOf(object)
}

export default Select
