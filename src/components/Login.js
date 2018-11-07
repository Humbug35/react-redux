import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
//import { fakeAuth } from './PrivateRoute';



class Login extends Component {
  constructor() {
    super();
    this.state = {
      wrong: null,
      token: null,
      userInput: {
        username: '',
        password: ''
      },
      credentials: {
        username: 'admin',
        password: 'admin'
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
        if(user) {
          this.setState({
            token: user.token,
            userInput: {
              username: this.refs.username.value = '',
              password: this.refs.password.value = ''
            }
          })
        } else {
          this.setState({
            wrong: false,
            userInput: {
              username: this.refs.username.value = '',
              password: this.refs.password.value = ''
            }
          })
        }
      })
    // if(this.state.userInput.username === this.state.credentials.username && this.state.userInput.password === this.state.credentials.password) {
    //   fakeAuth.signIn()
    //   fetch('http://localhost:5000/users/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json',
    //                'Accept': 'application/json' },
    //     body: JSON.stringify(this.state.userInput)
    //   })
    //     .then(response => response.json())
    //     .then(user => console.log('User', user))
    //   this.setState({
    //     userInput: {
    //       username: this.refs.username.value = '',
    //       password: this.refs.password.value = ''
    //     }
    //   })
    // } else {
    //   this.setState({
    //     wrong: false,
    //     userInput: {
    //       username: this.refs.username.value = '',
    //       password: this.refs.password.value = ''
    //     }
    //   })
    // }
  }
  render() {
    console.log('Storage', localStorage)
    console.log('State', this.state.token)
    if(this.state.token) {
      localStorage.setItem('token', this.state.token)
      this.state.token = null;
      return <Redirect to='/orders' />
    }
    return (
      <div>
        <input
        type="text"
        placeholder="Username"
        require="true"
        ref="username"
        onChange={this.getInputValues.bind(this)}
        />
        <input
        type="password"
        placeholder="Password"
        require="true"
        ref="password"
        onChange={this.getInputValues.bind(this)}
        />
        <button type="submit" onClick={this.logIn.bind(this)}>Log In</button>
        <div>{ this.state.wrong === false ? 'Wrong username or password' : null }</div>
      </div>
    )
  }
}
export default Login;
