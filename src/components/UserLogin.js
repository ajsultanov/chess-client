/* ^ App ^ */
/* this component allows the user to log in, sets current user */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { setUser }          from '../actions'
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
    if (this.props.user) {this.props.history.push("/lessons/3")}        // <--- CHANGE THIS BACK TO 'HOME' !!!!!!!!!
  }

  render() {
    return (
      <StyledContent>
        <form className="form" onSubmit={(event) => this.handleOnSubmit(event)}>
          <h2 className="title">Log&nbsp;In</h2>

          <label className="label" htmlFor="username">Enter&nbsp;your&nbsp;Username</label>
          <input
            className="input"
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="username"
            placeholder="username"
          />

          <label className="label" htmlFor="password">Enter&nbsp;your&nbsp;Password</label>
          <input
            className="input"
            type="password"
            onChange={(event) => this.handleOnPasswordChange(event)}
            id="password"
            placeholder="password"
          />

          <SubmitButton
            className="submit"
            type="submit"
            active={this.state.username && this.state.password}
          >
            Submit
          </SubmitButton>

        </form>
      </StyledContent>
    );
  }

}

export default connect(null, { setUser })(UserLogin)
