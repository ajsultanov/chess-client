/* ^ App ^ */
/* this component contains the header and navigation links */

import React, { Component } from 'react';
import { Link }             from "react-router-dom";
import { connect }          from 'react-redux';
import { logout }           from '../actions'
import styled               from 'styled-components'

const StyledMenu = styled.div`
border: 1px solid yellow;
  background-color: skyblue;
  border-bottom: 1px solid;
  padding: .5em;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.span`
border: 1px solid ;
  background-color: azure;
  align-self: center;
  padding: .5em .75em;
  margin-right: 1em;
  border-radius: 0px;
`;

const StyledLink = styled(Link)`
border: 1px solid red;
  color: navy;
  font-weight: normal;
  font-family: BioRhyme;
  font-size: 1em;
  padding: .5em 1.5em;
  text-decoration: none;
`;

const Logo = styled.h1`
border: 1px solid;
  font-weight: normal;
  font-size: 36pt;
  margin: .25em;
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
            ROOKIE&nbsp;Chess
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
              Log&nbsp;Out
            </StyledLink>
          </StyledNav>
        :
          <StyledNav>
            <StyledLink to="/board">
              Play! (take this out)
            </StyledLink>
            <span> | </span>
            <StyledLink to="/signup">
              Sign&nbsp;Up
            </StyledLink>
            <span> | </span>
            <StyledLink to="/login">
              Log&nbsp;In
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
