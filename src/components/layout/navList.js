import React, { useState } from 'react'
import { func } from 'prop-types'
import { useHistory } from 'react-router-dom'
import { List, ListItem } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Items } from './items'

const NavList = ({ closeNavBar }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { push } = useHistory()

  return (
    <List>
      {Items.map(({ text, icon, link }, index) => (
        <ListItem
          button
          key={text}
          selected={selectedIndex === index}
          onClick={() => {
            setSelectedIndex(index)
            closeNavBar()
            push(link)
          }}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  )
}

NavList.propTypes = {
  closeNavBar: func.isRequired
}

export default NavList
