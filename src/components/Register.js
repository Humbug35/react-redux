import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postRegister } from '../actions/registerLogin';


class SignUp extends Component {
  signUp(e) {
    e.preventDefault();
    let registerObj = {
      username: this.refs.username.value,
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    this.props.dispatch(postRegister(registerObj))
    registerObj = {
      username: this.refs.username.value = '',
      email: this.refs.email.value = '',
      password: this.refs.password.value = ''
    }
  }
  render() {
    console.log('Props', this.props.register)
    return (
      <div>
        <input
          type="text"
          require='true'
          ref='username'
          placeholder="username"
          />
        <input
          type="email"
          require='true'
          ref='email'
          placeholder="email"
          />
        <input
          type="password"
          require='true'
          ref='password'
          placeholder="password"
          />
        <button onClick={this.signUp.bind(this)}>Sign Up</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  register: state.register
})

export default connect(mapStateToProps)(SignUp);
