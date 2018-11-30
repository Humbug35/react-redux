import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adminLogin } from '../actions/adminLoginAction';
import { Redirect } from 'react-router-dom';
import logo from '../images/newLogo2.png';



class AdminLogin extends Component {
  logIn(e) {
    e.preventDefault();
    let loginBody = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
    this.props.dispatch(adminLogin(loginBody))
    loginBody = {
      username: this.refs.username.value = '',
      password: this.refs.password.value = ''
    }
  }
  render() {
    if(this.props.admin.adminUser !== null) {
      if(sessionStorage.getItem('token')) {
        return <Redirect to="/orders" />
      }
    }

    return (
      <div className="login-main-div">
        <div className="loggan">
        <img src={logo} alt="logo" className="logo" />
        </div>
        <form className="login-div">
          <div className="wrong-credentials">{}</div>
          <input
          className="form-control form-control-lg input-field"
          type="text"
          placeholder="Username"
          require="true"
          ref="username"
          />
          <input
          className="form-control form-control-lg input-field"
          type="password"
          placeholder="Password"
          require="true"
          ref="password"
          />
          <div className="login-button-div">
            <input className="btn btn-success login-button" type="submit" value="Log In" onClick={this.logIn.bind(this)} />
          </div>
        </form>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  admin: state.adminUser,
  wrong: state.wrong
})
export default connect(mapStateToProps)(AdminLogin);
