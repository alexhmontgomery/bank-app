import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class BaseLayout extends Component {
  render () {
    return (
      <div>
        <nav className='navbar navbar-inverse bg-inverse'>
          <ul className='nav'>
            <li className='nav-item'>
              <NavLink className='navbar-brand' exact to='/'>BankShot</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/users'>Users</NavLink>
            </li>
          </ul>
        </nav>

        <main>
          {this.props.children}
        </main>

        <footer className='navbar navbar-inverse bg-inverse'>
          <span className='navbar-text'>&copy; 2017 alexhmonty designs</span>
        </footer>
      </div>
    )
  }
}

export default BaseLayout
