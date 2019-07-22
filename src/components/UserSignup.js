/* ^ App ^ */
/* this component allows the user to sign up, creates a user, and sets current user */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { createUser }       from '../actions'
import '../styles.css';

class UserSignup extends Component {

  state = {
    username: '',
    password1: '',
    password2: ''
  }

  handleOnNameChange = event => {
    this.setState({
      username: event.target.value
    });
  }

  handleOnPasswordChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password1) {
      if (this.passwordCheck()) {
        this.props.createUser(this.state)
      } else {
        window.alert("password must be the same")
      }
    } else {
      window.alert("please fill out all fields")
    }
  }

  passwordCheck = () => {
    return this.state.password1 === this.state.password2;
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <input
              type="text"
              onChange={(event) => this.handleOnNameChange(event)}
              id="username"
              placeholder="username" />
          </p>
          <p>
            <input
              type="password"
              onChange={(event) => this.handleOnPasswordChange(event)}
              id="password1"
              placeholder="password" />
          </p>
          <p>
            <input
              type="password"
              onChange={(event) => this.handleOnPasswordChange(event)}
              id="password2"
              placeholder="retype password" />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }

}

export default connect(null, { createUser })(UserSignup)
