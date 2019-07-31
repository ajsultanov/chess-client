/* ^ App ^ */
/* this component allows the user to sign up, creates a user, and sets current user */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { createUser }       from '../actions'
import styled               from 'styled-components'
import './login.css'

const StyledContent = styled.div`
  font-size: 1.5em;
  align-self: center;
  width: 90%
  background-color: papayawhip;
  border: 1px solid;
  border-radius: 0px;
  margin: .5em;
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.button`
border: 2px solid ${props => props.active ? "brown" : "navajowhite" };
  background-color: ${props => props.active ? "palevioletred" : "pink" };
  color: ${props => props.active ? "white" : "navajowhite" };

    &:hover {
      box-shadow: 0 0 1em inset ${props => props.active ? "mediumorchid" : "transparent" };
    }
`;


class UserSignup extends Component {

  state = {
    username: '',
    password1: '',
    password2: ''
  }

  styles = {
    width:"796px",
    padding:"10px",
    border:"2px solid blue",
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
        window.alert("Password must be the same")
      }
    } else {
      window.alert("Please fill out all fields")
    }
  }

  passwordCheck = () => {
    return this.state.password1 === this.state.password2;
  }

  componentDidUpdate() {
    if (this.props.user) {this.props.history.push("/home")}
  }

  render() {

    return (
      <StyledContent>
        <form className="form" onSubmit={(event) => this.handleOnSubmit(event)}>
          <h2 className="title">Sign&nbsp;Up</h2>

          <label className="label" htmlFor="username">Enter&nbsp;a&nbsp;Username</label>
          <input
            className="input"
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="username"
            placeholder="username"
          />

          <label className="label" htmlFor="password1">Enter&nbsp;a&nbsp;Password</label>
          <input
            className="input"
            type="password"
            onChange={(event) => this.handleOnPasswordChange(event)}
            id="password1"
            placeholder="password"
          />

          <input
            className="input"
            type="password"
            onChange={(event) => this.handleOnPasswordChange(event)}
            id="password2"
            placeholder="retype password"
          />

          <SubmitButton
            className="submit"
            type="submit"
            active={this.state.username && this.state.password1 && this.state.password2}
          >
            Submit
          </SubmitButton>

        </form>
      </StyledContent>
    );
  }

}

export default connect(null, { createUser })(UserSignup)
