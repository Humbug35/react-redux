import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/newlogo.png';


class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-height">
          <NavLink className="navbar-brand navbar-width" to="/orders"><img src={logo} alt="logo"/></NavLink>
          <div className="navbar-nav navbar-links">
            <NavLink className="nav-item nav-link" to="/orders">All Orders</NavLink>
            <NavLink className="nav-item nav-link" to="/about">About</NavLink>
            <button>Sign In</button>
          </div>
      </nav>
    )
  }
}
export default NavBar;
