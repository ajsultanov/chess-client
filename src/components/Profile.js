/* ^ ProfileContainer ^ */
/* this component render the user profile on the home page */

import React, { Component } from 'react';
import styled               from 'styled-components'

const StyledContent = styled.div`
border: 1px solid;
  font-size: 1em;
  line-height: 1.5em;
  color: purple;
  background-color: darkorange;
  display: flex;
  justify-content: space-between;
  margin: 0 0 1em;
  padding: 0;
  width: 75%
`;

const ProfileImg = styled.img`
border: 1px solid red;
  background-color: pink;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  display: inline;
  margin: 0;
`;

const Username = styled.h3`
border: 1px solid green;
  display: inline;
  font-size: .9em;
  margin: 0 .5em;
`;

const Stat = styled.p`
border: 1px solid;
  font-size: .75em;
  background-color: mintcream;
  margin: 0 .5em;
  padding: 0;
  display: inline;
`;

class Profile extends Component {

  render() {
    return (
      <StyledContent>
        <div style={{display:"flex"}}>
          <ProfileImg></ProfileImg>
          <Username>{this.props.username}</Username>
        </div>
        <div style={{display:"flex"}}>
          <Stat>xp:&nbsp;{this.props.xp}</Stat>
          <Stat>rank:&nbsp;total&nbsp;rookie</Stat>
        </div>
      </StyledContent>
    );
  }
}

export default Profile
