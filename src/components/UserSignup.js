/* ^ App ^ */
/* this component allows the user to sign up, creates a user, and sets current user */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { createUser }       from '../actions'
import styled from 'styled-components'

const StyledContent = styled.div`
  font-size: 1.5em;
  align-self: center;
  width: 75%
  background-color: papayawhip;
  border: 1px solid;
  border-radius: 3px;

  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  background-color: tan;
  font-weight: normal;
  font-size: 1.3em;
  display: inline;

    ::before, ::after {
      content: "✷✷";
      font-size: 20px;
    }
`;

const StyledBorder = styled.div`
  width: 30%
  height: 14em;
  position: absolute;
  border: 1px solid;
  border-radius: 3px;
  top: 5.5em;
`;

const StyledForm = styled.form`
  margin: 1em;
  width: 30%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled.label`
  margin-top: 1em;
`;

const StyledInput = styled.input`
  background-color: lavenderblush;
  font-size: .5em;
  font-family: BioRhyme;
  height: 2em;
  width: 60%;
  margin: .5em;
  padding: 0;
`;

const Submit = styled.button`
  background: ${props => props.primary ? "palevioletred" : "snow" };
  color: ${props => props.primary ? "white" : "mediumorchid" };
  margin: 1em;
  padding: 0.5em 2em;
  font-weight: bold;
  font-size: .5em;
  border: 2px solid ${props => props.primary ? "brown" : "navajowhite" };
  border-radius: 6px;
  z-index: -1;
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
        <StyledBorder></StyledBorder>
        <StyledForm onSubmit={(event) => this.handleOnSubmit(event)}>
          <Title>Sign Up</Title>

          <StyledLabel htmlFor="username">Username</StyledLabel>
          <StyledInput
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="username"
            placeholder="username"
          />

          <StyledLabel htmlFor="password1">Password</StyledLabel>
          <StyledInput
            type="password"
            onChange={(event) => this.handleOnPasswordChange(event)}
            id="password1"
            placeholder="password"
          />

          <StyledInput
            type="password"
            onChange={(event) => this.handleOnPasswordChange(event)}
            id="password2"
            placeholder="retype password"
          />

          <Submit type="submit"> Submit </Submit>
        </StyledForm>
      </StyledContent>
    );
  }

}

export default connect(null, { createUser })(UserSignup)
