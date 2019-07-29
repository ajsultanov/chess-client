/* ^ App ^ */
/* this component allows the user to sign up, creates a user, and sets current user */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { createUser }       from '../actions'
import styled from 'styled-components'

const StyledContent = styled.div`
  font-size: 1.5em;
  text-align: center;
  align-self: center;
  width: 80%;
  background-color: papayawhip;
  border: 3px solid palevioletred;
  border-radius: 3px;

  display: flex;
  justify-content: center;
`;
const StyledForm = styled.form`
  margin: 1em;
  width: 30%;
  border: 3px solid navy;
  border-radius: 3px;
`;
const Submit = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white" };
  color: ${props => props.primary ? "white" : "brown" };
  margin: 1em;
  padding: 0.25em 1em;
  font-weight: bold;
  font-size: .5em;
  border: 3px solid ${props => props.primary ? "brown" : "navajowhite" };
  border-radius: 3px;
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
        <StyledForm onSubmit={(event) => this.handleOnSubmit(event)}>
          <h2 css={`background-color: red`}>Sign Up</h2>
          <p>
            <input
              type="text"
              onChange={(event) => this.handleOnNameChange(event)}
              id="username"
              placeholder="username"
            />
          </p>
          <p>
            <input
              type="password"
              onChange={(event) => this.handleOnPasswordChange(event)}
              id="password1"
              placeholder="password"
            />
          </p>
          <p>
            <input
              type="password"
              onChange={(event) => this.handleOnPasswordChange(event)}
              id="password2"
              placeholder="retype password"
            />
          </p>
          <Submit type="submit" > Submit </Submit>
          <Submit type="submit" primary > Submit </Submit>
        </StyledForm>
      </StyledContent>
    );
  }

}

export default connect(null, { createUser })(UserSignup)
