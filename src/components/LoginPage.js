import React from 'react'
import { connect } from 'react-redux'
import { loginFirebase } from '../actions/auth'
import backgroundImage from './background1.jpg'

const LoginPage = ({ triggerLogin }) => {
  return (
    <div className='row white' id='login-page'>
      <img src={backgroundImage} alt='background' />
      <div className='card-panel col s10 m8 l4 green lighten-1'>
        <h3 className='white-text'>Expendex</h3>
        <button onClick={triggerLogin} className='btn btn-large red lighten-1'>
          <i class='material-icons left'>cloud</i>Login with Google
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  triggerLogin: () => dispatch(loginFirebase())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
