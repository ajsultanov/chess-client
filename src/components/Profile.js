/* ^ ProfileContainer ^ */
/* this component render the user profile on the home page */

import React, { Component } from 'react';
import styled               from 'styled-components'

const images = [
  "./wK.png", "./wQ.png", "./wR.png", "./wB.png", "./wN.png", "./wP.png",
  "./bK.png", "./bQ.png", "./bR.png", "./bB.png", "./bN.png", "./bP.png"
]
const avatar = images[Math.floor(Math.random() * images.length)];

const StyledContent = styled.div`
/* border: 1px solid; */
  font-size: 2em;
  line-height: 1.5em;
  color: slateblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 .5em;
  padding: 0;
  width: 75%
`;

const ImgDiv = styled.div`
/* border: 1px solid red; */
  background-color: ivory;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;


const ProfileImg = styled.img`
/* border: 1px solid red; */
  width: 110%;
  height: 110%;
  /* background-color: ivory; */
  border-radius: 50%;
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
  background-color: slateblue;
  color: white;
  border: 5px solid slateblue;
  border-radius: 5px;
  padding: 0 .5em;
  margin: 0 .5em 0 0;
  font-weight: bold;
`;

class Profile extends Component {



  render() {
    return (
      <StyledContent>
        <div style={{display:"flex"}}>
          <ImgDiv>
            <ProfileImg src={avatar}/>
          </ImgDiv>
          <Username>{this.props.username}</Username>
        </div>
        <div style={{display:"flex"}}>
          <Stat><StatName>xp :</StatName>&nbsp;{this.props.xp}</Stat>
          <Stat><StatName>rank :</StatName>
            {
              this.props.xp < 20
            ?
              "total rookie"
            : this.props.xp < 50
              ?
                "rookie"
              :
                this.props.xp < 100
                ?
                  "not bad not bad"
                :
                  "chess master"
            }
          </Stat>
        </div>
      </StyledContent>
    );
  }
}

export default Profile
