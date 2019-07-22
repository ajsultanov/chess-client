/* ^ App ^ */
/* this component allows the user to log in, sets current user */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { setUser }          from '../actions'
import '../styles.css';

class UserLogin extends Component {

  state = {
    username: '',
    password: ''
  }

  handleOnNameChange = event => {
    this.setState({
      username: event.target.value
    });
  }

  handleOnPasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.setUser(this.state)
    setTimeout(() => this.props.history.push("/home/"), 100)
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
              id="password"
              placeholder="password" />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }

}

export default connect(null, { setUser })(UserLogin)
