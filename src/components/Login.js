import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../images/newLogo2.png';



class Login extends Component {
  constructor() {
    super();
    this.state = {
      wrongCredentials: null,
      userInput: {
        username: '',
        password: ''
      }
    }
  }
  getInputValues(e) {
    e.preventDefault();
    this.setState({
      userInput: {
        username: this.refs.username.value,
        password: this.refs.password.value
      }
    })
  }
  logIn(e) {
    e.preventDefault();
    fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.userInput)
    })
      .then(res => res.json())
      .then(user => {
        if(user.success) {
          sessionStorage.setItem('token', user.token)
          this.setState({
            userInput: {
              username: this.refs.username.value = '',
              password: this.refs.password.value = ''
            }
          })
        } else {
          this.setState({
            wrongCredentials: false,
            userInput: {
              username: this.refs.username.value = '',
              password: this.refs.password.value = ''
            }
          })
        }
      })
  }
  render() {
    if(sessionStorage.getItem('token')) {
      return <Redirect to='/orders' />
    }
    return (
      <div className="login-main-div">
        <div className="loggan">
        <img src={logo} alt="logo" className="logo" />
        </div>
        <form className="login-div">
          <div className="wrong-credentials">{ this.state.wrongCredentials === false ? 'Wrong username or password' : null }</div>
          <input
          className="form-control form-control-lg input-field"
          type="text"
          placeholder="Username"
          require="true"
          ref="username"
          onChange={this.getInputValues.bind(this)}
          />
          <input
          className="form-control form-control-lg input-field"
          type="password"
          placeholder="Password"
          require="true"
          ref="password"
          onChange={this.getInputValues.bind(this)}
          />
          <div className="login-button-div">
            <input className="btn btn-success login-button" type="submit" value="Log In" onClick={this.logIn.bind(this)} />
          </div>
        </form>
      </div>

    )
  }
}
export default Login;
