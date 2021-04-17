import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard'
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt'
import ImageIcon from '@material-ui/icons/Image'

export const Items = [
  {
    text: 'Dashboard',
    link: '/',
    icon: <DashboardIcon />
  },
  {
    text: 'Download de Images',
    link: '/upload-images',
    icon: <SystemUpdateAltIcon />
  },
  {
    text: 'Lista de imagens',
    link: '/list-images',
    icon: <ImageIcon />
  }
]
