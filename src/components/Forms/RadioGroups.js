import React, { useState } from 'react'
import { string, node, func, object, oneOfType, any } from 'prop-types'
import { FormLabel, RadioGroup, Radio, FormControlLabel } from '@material-ui/core/'

export const RadioField = ({ label, value, ...props }) => (
  <FormControlLabel control={<Radio />} label={label} value={value} labelPlacement='start' {...props} />
)

RadioField.propTypes = {
  label: string,
  props: object,
  value: oneOfType([string, any])
}

export const RadioGroups = ({ arial, name, value, label, children, setFieldValue }, props) => {
  const [selectedValue, setSelectedValue] = useState(value)

  const handleChange = event => {
    setSelectedValue(event.target.value)
    return setFieldValue(name, event.target.value)
  }

  return (
    <>
      <FormLabel component='legend'>{label}</FormLabel>
      <RadioGroup row name={name} aria-label={arial} value={selectedValue} onChange={handleChange} {...props}>
        {children}
      </RadioGroup>
    </>
  )
}

RadioGroups.propTypes = {
  arial: string,
  name: string,
  value: oneOfType([string, any]),
  label: string,
  props: object,
  children: node,
  setFieldValue: func
}
