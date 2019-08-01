/* ^ App ^ */
/* this component contains the header and navigation links */

import React, { Component } from 'react';
import { Link }             from "react-router-dom";
import { connect }          from 'react-redux';
import { logout }           from '../actions'
import styled               from 'styled-components'

const StyledMenu = styled.div`
/* border: 1px solid yellow; */
  background-color: powderblue;
  padding: .5em;

  z-index: 2;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
/* border: 1px solid lime; */
/* background-color: skyblue; */
  width: 98%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled.h1`
/* border: 1px solid; */
  font-weight: normal;
  margin: 0 .75em;
  font-size: 36pt;
  text-decoration: none;
  transform: rotate(-3deg);
  color: white;
  text-shadow: -2px 1px 3px deepskyblue;
`;

const Star1 = styled.span`
/* border: 1px solid; */
  font-size: 36pt;
  position: absolute;
  margin: 0;
  padding: 0;
  top: -10px;
  left: 30px;
  color: white;
`;

const Star2 = styled.span`
/* border: 1px solid; */
  font-size: 30pt;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 20px;
  left: 455px;
  color: white;
`;

const Star3 = styled.span`
/* border: 1px solid; */
  font-size: 20pt;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 45px;
  left: 425px;
  color: white;
`;


const StyledNav = styled.span`
/* border: 1px solid ; */
  background-color: azure;
  align-self: center;
  padding: .5em .75em;
  margin: 0;
  min-width: 220px;
  border-radius: 3px;
`;

const StyledLink = styled(Link)`
/* border: 1px solid red; */
  color: navy;
  font-weight: normal;
  font-family: BioRhyme;
  font-size: 1em;
  padding: .5em 1em;
  text-decoration: none;
`;
const LogoLink = styled(StyledLink)`
  padding: 0;
  margin: 0 0 0 1em;
`;

class Menu extends Component {

  render() {
    return (
      <StyledMenu>
        <Wrapper>
        <LogoLink to= {
          this.props.currentUser
        ?
          "/home"
        :
          "/"
        }>
          <Star1>✴</Star1>
          <Logo>
            ROOKIE&nbsp;Chess
          </Logo>
          <Star2>✴</Star2>
          <Star3>✶</Star3>
        </LogoLink>

        {
          this.props.currentUser
        ?
          <StyledNav>
            <StyledLink to="/home">
              Home
            </StyledLink>
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
            <StyledLink to="/signup">
              Sign&nbsp;Up
            </StyledLink>
            <span> | </span>
            <StyledLink to="/login">
              Log&nbsp;In
            </StyledLink>
          </StyledNav>
        }
        </Wrapper>
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
