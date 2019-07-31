/* ^ ProfileContainer ^ */
/* this component render the user profile on the home page */

import React, { Component } from 'react';
import styled               from 'styled-components'

const StyledContent = styled.div`
/* border: 1px solid; */
  font-size: 2em;
  line-height: 1.5em;
  color: purple;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 .5em;
  padding: 0;
  width: 75%
`;

const ProfileImg = styled.div`
/* border: 1px solid red; */
    background-color: gray;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: inline;
  margin: 0;
`;

const Username = styled.h3`
/* border: 1px solid green; */
  display: inline;
  font-size: .9em;
  margin: 0 .5em;
  font-weight: normal;
  top: 10px;
`;

const Stat = styled.p`
  font-size: .75em;
  background-color: ivory;
  margin: 0 .5em;
  padding: 0 .5em 0 0;
  display: flex;
  align-items: baseline;

  /* border: 1px solid purple; */
  border-radius: 5px;
`;

const StatName = styled.span`
  font-size: .75em;
  background-color: purple;
  color: white;
  border: 5px solid purple;
  border-radius: 5px;
  padding: 0 .5em;
  font-weight: bold;
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
          <Stat><StatName>xp :</StatName>&nbsp;{this.props.xp}</Stat>
          <Stat><StatName>rank :</StatName>&nbsp;total&nbsp;rookie</Stat>
        </div>
      </StyledContent>
    );
  }
}

export default Profile
