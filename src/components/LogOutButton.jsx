import React from 'react'
import { connect } from 'react-redux'
import { logoutFirebase } from '../actions/auth'

const LogOutButton = ({ triggerLogout }) => {
  return <a onClick={triggerLogout}>Logout</a>
}

const mapDispatchToProps = dispatch => ({
  triggerLogout: () => dispatch(logoutFirebase())
})

export default connect(undefined, mapDispatchToProps)(LogOutButton)
