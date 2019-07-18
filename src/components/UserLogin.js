import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { createUser }       from '../actions/users'

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
    this.props.createUser(this.state)
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
              type="text"
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

export default connect(null, { createUser })(UserLogin)
