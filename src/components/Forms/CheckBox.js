import React, { useState } from 'react'
import { string, node, func, object, oneOfType, any } from 'prop-types'
import { FormControlLabel, Checkbox } from '@material-ui/core'

export const CustomCheckbox = ({ name, type = 'primary', label, setFieldValue, ...props }) => {
  const [selectedValue, setSelectedValue] = useState(name)

  const handleChange = event => {
    setSelectedValue(event.target.checked)
    return setFieldValue(name, event.target.checked)
  }

  return <FormControlLabel control={<Checkbox name={name} color={type} checked={selectedValue} onChange={handleChange} {...props} />} label={label} />
}

CustomCheckbox.propTypes = {
  name: string,
  type: string,
  value: oneOfType([string, any]),
  label: string,
  props: object,
  children: node,
  setFieldValue: func
}
