/* ^ App ^ */
/* this component contains the header and navigation links */

import React, { Component } from 'react';
import { Link }             from "react-router-dom";
import { connect }          from 'react-redux';
import { logout }           from '../actions'
import styled           from 'styled-components'

const StyledLink = styled(Link)`
  color: navy;
  font-weight: bold;
  font-size: .75em;
  padding: 0px 10px;
  text-decoration: none;
`;
const StyledMenu = styled.div`
  background-color: skyblue;
  height:40px;
  padding: 10px 20px;
  border-bottom: 1px solid;
`;
const StyledNav = styled.span`
  background-color: azure;
  float: right;
  padding: 0px 16px 4px;
  border: 1px solid;
  border-radius: 24px;
`;
const Logo = styled.h1`
  display: inline;
  font-weight: normal;
`;


class Menu extends Component {

  render() {
    return (
      <StyledMenu>

        <StyledLink to= {
          this.props.currentUser
        ?
          "/home"
        :
          "/"
        }>
          <Logo>
            ROOKIE Chess
          </Logo>
        </StyledLink>

        {
          this.props.currentUser
        ?
          <StyledNav>
            <span>
              user: {this.props.currentUser.username}
            </span>
            <span> | </span>
            <StyledLink to="/lessons">
              Lessons
            </StyledLink>
            <span> | </span>
            <StyledLink to="/play">
              Play!
            </StyledLink>
            <span> | </span>
            <StyledLink to="/login"
            onClick={this.props.logout}>
              Log Out
            </StyledLink>
          </StyledNav>
        :
          <StyledNav>
            <StyledLink to="/constructor">
              Constructor (take this out)
            </StyledLink>
            <span> | </span>
            <StyledLink to="/board">
              Play! (take this out)
            </StyledLink>
            <span> | </span>
            <StyledLink to="/signup">
              Sign Up
            </StyledLink>
            <span> | </span>
            <StyledLink to="/login">
              Log In
            </StyledLink>
          </StyledNav>
        }
      </StyledMenu>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  }
}


export default connect(mapStateToProps, { logout })(Menu)
