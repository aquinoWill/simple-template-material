import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { node, string, number } from 'prop-types'

const TabPanel = ({ children, value, index, ...other }) => (
  <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
    {value === index && (
      <Box p={3}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
)

TabPanel.propTypes = {
  children: node.isRequired,
  value: string.isRequired,
  index: number.isRequired
}

export default TabPanel
