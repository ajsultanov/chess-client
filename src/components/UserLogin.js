/* ^ App ^ */
/* this component allows the user to log in, sets current user */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { setUser }          from '../actions'

class UserLogin extends Component {

  state = {
    username: '',
    password: ''
  }

  styles = {
    width:"796px",
    padding:"10px",
    border:"2px solid green",
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
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.setUser(this.state)
    } else{
      window.alert("Please fill out all fields")
    }
  }

  componentDidUpdate() {
    if (this.props.user) {this.props.history.push("/home")}
  }

  render() {
    return (
      <div style={this.styles}>
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
