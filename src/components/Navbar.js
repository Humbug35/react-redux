import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
//import { fakeAuth } from './PrivateRoute';


class NavBar extends Component {
  logOut() {
    localStorage.removeItem('token');
  }
  render() {
    // if(!fakeAuth) {
    //   return <Redirect to='/login' />
    // }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar-height">
          <NavLink className="navbar-brand navbar-width" to="/orders"><img src={logo} alt="logo"/></NavLink>
          <div className="navbar-nav navbar-links">
            <NavLink className="nav-item nav-link" to="/orders">All Orders</NavLink>
            <NavLink className="nav-item nav-link" to="#">About</NavLink>
            <NavLink to='/login'><button onClick={this.logOut.bind(this)}>Log Out</button></NavLink>
          </div>
      </nav>
    )
  }
}
export default NavBar;
