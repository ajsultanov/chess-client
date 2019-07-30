/* ^ App ^ */
/* this component allows the user to log in, sets current user */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { setUser }          from '../actions'
import styled               from 'styled-components'

const StyledContent = styled.div`
  font-size: 1.5em;
  align-self: center;
  width: 75%
  margin: 1rem;
  background-color: papayawhip;
  border: 1px solid;
  border-radius: 0px;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  background-color: papayawhip;
  font-weight: normal;
  z-index: 1;
  font-size: 1.3em;
  display: inline;
  margin: 0 0 1em;

    ::before, ::after {
      content: "✷✷";
      font-size: 20px;
    }
`;

const StyledBorder = styled.div`
  width: 30%
  height: 12.5em;
  position: absolute;
  border: 1px solid maroon;
  border-radius: 0px;
  top: 8em;
`;

const StyledForm = styled.form`
border: 1px solid tan;
  z-index: 1;
  margin: 1em;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled.label`
  margin-top: 1em;
  font-size: .75em;
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
  background-color: ${props => props.primary ? "palevioletred" : "snow" };
  color: ${props => props.primary ? "white" : "mediumorchid" };
  margin: 2.5em;
  padding: 0.5em 2em;
  font-weight: bold;
  font-size: .5em;
  border: 2px solid ${props => props.primary ? "brown" : "navajowhite" };
  border-radius: 0px;
`;

class UserLogin extends Component {

  state = {
    username: '',
    password: ''
  }

  styles = {
    width:"796px",
    padding:"10px",
    border:"1px solid",
    textAlign: "right",
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
      <StyledContent>
      <StyledBorder></StyledBorder>
        <StyledForm onSubmit={(event) => this.handleOnSubmit(event)}>
          <Title>Log&nbsp;In</Title>

          <StyledLabel htmlFor="username">Enter&nbsp;your&nbsp;Username</StyledLabel>
          <StyledInput
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="username"
            placeholder="username"
          />

          <StyledLabel htmlFor="password">Enter&nbsp;your&nbsp;Password</StyledLabel>
          <StyledInput
            type="password"
            onChange={(event) => this.handleOnPasswordChange(event)}
            id="password"
            placeholder="password"
          />

          <Submit type="submit"> Submit </Submit>

        </StyledForm>
      </StyledContent>
    );
  }

}

export default connect(null, { setUser })(UserLogin)
