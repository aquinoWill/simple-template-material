import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ImageSearchIcon from '@material-ui/icons/ImageSearch'
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt'

export const Items = [
  {
    text: 'Dashboard',
    link: '/',
    icon: <DashboardIcon />
  },
  {
    text: 'Incluir documento',
    link: '/upload-images',
    icon: <SystemUpdateAltIcon />
  },
  {
    text: 'Analisar',
    link: '/list-images',
    icon: <ImageSearchIcon />
  }
]
