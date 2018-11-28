import React from 'react';
import Categories from './allCategories';
import { NavLink } from 'react-router-dom';
import logo from '../images/newLogo2.png';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-height">
        <NavLink className="navbar-brand navbar-width" to="/products"><img src={logo} alt="logo"/></NavLink>
        <div className="row d-flex nav-links">
          <div className="navbar-nav navbar-links">
            <Categories />
            <NavLink className="nav-item nav-link" to="/about">About</NavLink>
          </div>
          <div className="d-flex checkout-link justify-content-end">
            <NavLink className="nav-item nav-link" to="/checkout"><i className="fa fa-shopping-cart"></i></NavLink>
          </div>
        </div>
    </nav>
  )
}
export default Header;
