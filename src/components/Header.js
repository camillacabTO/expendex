import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import LogOutButton from './LogOutButton'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

const Header = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])
  return (
    <React.Fragment>
      <nav>
        <header className='nav-wrapper green lighten-1'>
          <div className='container'>
            <a href='#!' className='brand-logo'>
              Expendex
            </a>
            <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <NavLink to='/dashboard' activeClassName='active-nav'>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to='/create' activeClassName='active-nav'>
                  Create Expense
                </NavLink>
              </li>
              <li>
                <LogOutButton />
              </li>
            </ul>
          </div>
        </header>
      </nav>
      <ul className='sidenav' id='mobile-demo'>
        <li>
          <NavLink className='green-text darken-1' to='/dashboard'>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className='green-text darken-1' to='/create'>
            Create Expense
          </NavLink>
        </li>
        <li>
          <LogOutButton />
        </li>
      </ul>
    </React.Fragment>
  )
}

export default Header
