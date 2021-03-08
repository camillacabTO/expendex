import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export const PrivateRoute = ({
  isAuthenticated,
  component: PassedComponent,
  ...rest // catch the rest of properties
}) => (
  <Route
    {...rest} // coming from PrivateRoute
    render={(
      props // does not create a new comp in every mount, just update it
    ) =>
      isAuthenticated ? (
        <React.Fragment>
          <Header />
          <PassedComponent {...props} />
          <Footer />
        </React.Fragment>
      ) : (
        <Redirect to='/' />
      )
    }
  />
)

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.userID // if user is logged in
})

export default connect(mapStateToProps)(PrivateRoute)
