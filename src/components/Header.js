import React from 'react';
import Categories from './allCategories';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../images/newLogo2.png';

const Header = (props) => {
  let productsInCart = 0;
  if(props.cart.length === 0) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-height">
          <NavLink className="navbar-brand navbar-width" to="/products"><img src={logo} alt="logo"/></NavLink>
          <div className="row d-flex nav-links">
            <div className="navbar-nav navbar-links">
              <Categories />
            </div>
            <div className="d-flex checkout-link justify-content-end">
              <NavLink className="nav-item nav-link" to="/checkout"><i className="fa fa-shopping-cart"></i><span className="ml-2 h3">{productsInCart}</span></NavLink>
            </div>
          </div>
      </nav>
    )
  } else {
    props.cart.map(item => {
      productsInCart = productsInCart + item.quantity
      return productsInCart
    })
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-height">
          <NavLink className="navbar-brand navbar-width" to="/products"><img src={logo} alt="logo"/></NavLink>
          <div className="row d-flex nav-links">
            <div className="navbar-nav navbar-links">
              <Categories />
            </div>
            <div className="d-flex checkout-link justify-content-end">
              <NavLink className="nav-item nav-link" to="/checkout"><i className="fa fa-shopping-cart"></i><span className="ml-2 h3">{productsInCart}</span></NavLink>
            </div>
          </div>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
})
export default connect(mapStateToProps)(Header);
