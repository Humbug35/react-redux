import React, { Component } from 'react';
import { NavLink , Redirect } from 'react-router-dom';
import logo from '../images/newlogo.png';


class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isToken: true
    }
  }
  logOut() {
    sessionStorage.removeItem('token')
    this.setState({
      isToken: false
    })
  }
  render() {
    if(!this.state.isToken) {
      return <Redirect to="/" />
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar-height">
          <NavLink className="navbar-brand navbar-width" to="/orders"><img src={logo} alt="logo"/></NavLink>
          <div className="navbar-nav navbar-links">
            <NavLink className="nav-item nav-link" to="/orders">All Orders</NavLink>
            <NavLink className="nav-item nav-link" to="/about">About</NavLink>
            <button onClick={this.logOut.bind(this)}>Log Out</button>
          </div>
      </nav>
    )
  }
}
export default NavBar;
