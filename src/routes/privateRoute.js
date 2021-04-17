import React from 'react'
import { func, object } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('jwt_token') ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }
  />
)

PrivateRoute.propTypes = {
  component: func,
  location: object
}
