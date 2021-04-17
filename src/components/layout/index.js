import React, { useState } from 'react'
import { node, object } from 'prop-types'
import clsx from 'clsx'
import { useTheme } from '@material-ui/core/styles'
import { Grid, Drawer, Button, AppBar, Toolbar, Divider, Typography, CssBaseline } from '@material-ui/core'
import Logo from 'assets/logo192.png'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { layoutStyle } from './style'
import NavList from './navList'

const Layout = ({ children }) => {
  const classes = layoutStyle()
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Grid className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.titleBar} variant='h6' noWrap>
            Title
          </Typography>
          <Button variant='contained' className={classes.btLogin} onClick={() => {}}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <img src={Logo} className={classes.logo} alt='Logo' />
          <IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
        </div>
        <Divider />
        <NavList closeNavBar={handleDrawerClose} />
      </Drawer>
      <Grid
        item
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <Grid item className={classes.drawerHeader} />
        {children}
      </Grid>
    </Grid>
  )
}

Layout.propTypes = {
  classes: object,
  children: node
}

export default Layout
