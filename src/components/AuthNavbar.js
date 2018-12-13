import React, { Component } from 'react';
import { NavLink , Redirect } from 'react-router-dom';
import logo from '../images/newLogo2.png';


class AuthNavBar extends Component {
  logOut() {
    sessionStorage.removeItem('token')
  }
  render() {
    if(!sessionStorage.getItem('token')) {
      return <Redirect to="/admin-login" />
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-height">
          <NavLink className="navbar-brand navbar-width" to="/orders"><img src={logo} alt="logo"/></NavLink>
          <div className="navbar-nav navbar-links">
            <NavLink className="nav-item nav-link" to="/orders">All Orders</NavLink>
            <NavLink className="nav-item nav-link" to="/add-product">Add New Product</NavLink>
            <NavLink to="/admin-login"><button onClick={this.logOut.bind(this)}>Log Out</button></NavLink>
          </div>
      </nav>
    )
  }
}
export default AuthNavBar;
