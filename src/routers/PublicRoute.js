import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({
  // User cannot see this page if logged in
  isAuthenticated,
  component: PassedComponent,
  ...rest // catch the rest of properties
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? ( // redirect to dashboard if logged in
        <Redirect to='/dashboard' />
      ) : (
        <PassedComponent {...props} /> // Login page in this case
      )
    }
  />
)

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.userID // if user is logged in
})

export default connect(mapStateToProps)(PublicRoute)
