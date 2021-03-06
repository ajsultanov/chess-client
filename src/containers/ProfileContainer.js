/* ^ App ^ */
/* this component is a page that shows the profile (cmp), a link to the current lesson (cmp), and a link to the allLessons page */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Profile              from '../components/Profile';
import { Link }             from 'react-router-dom'
import styled               from 'styled-components'

const StyledContent = styled.div`
  /* font-size: 1.5em; */
  align-self: center;
  width: 100%;
  background-color: papayawhip;
  /* border: 1px solid; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
/* border: 1px solid; */
  width: 96%;
  margin: .5em;
  padding: .5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: wheat; */
`;

const LinkWrapper = styled.div`
/* border: 1px solid; */
  width: 90%;
  display: flex;
  flex-direction: row;
  /* background-color: lightyellow; */
`;

const ProfileLink = styled(Link)`
/* border: 1px solid; */
  padding: 0;
  margin: .5em;
  height: 50vh;
  display: flex;
  color: slateblue;
  justify-content: center;
  align-items: center;
  background-color: lightpink;
  text-align: center;
  width: 50%;

  border-radius: 5px;
  border: 5px solid lightpink;
  box-shadow: 0 0 0 4px inset white;
`;

const ProfileLink1 = styled(ProfileLink)`
  background-color: plum;
  border: 5px solid plum;
`;

const ProfileLink2 = styled(ProfileLink)`
  background-color: aquamarine;
  border: 5px solid aquamarine;
`;

const LinkText = styled.span`
/* border: 1px solid; */
  padding: 1em;
  font-size: 2em;
  background-color: lavenderblush;
  border-radius: 50%;
`;

const Sm = styled.span`
/* border: 1px solid; */

  padding: .5em;
  font-size: .75em;
`;

class ProfileContainer extends Component {

  currentLessonTitle = ""

  render() {
    if (this.props.currentUser.current_lesson !== null) {
      this.currentLessonTitle = this.props.allLessons[this.props.currentUser.current_lesson - 1].title
    }

    return (
      <StyledContent>
        {
          this.props.currentUser
        ?
          <Wrapper>
            <Profile
              username={this.props.currentUser.username}
              xp={this.props.currentUser.xp}
            />

            <LinkWrapper>
              {
                this.props.currentUser.current_lesson
              ?
                <ProfileLink1 to={`/lessons/${this.props.currentUser.current_lesson}`}>
                  <LinkText><Sm>Next Lesson:</Sm><br/>{`${this.currentLessonTitle}`}</LinkText>
                </ProfileLink1>
              :
                <ProfileLink2 to={`/lessons/1`}>
                  <LinkText>Go to the first Lesson!</LinkText>
                </ProfileLink2>
              }

              <ProfileLink to="/lessons/">
                  <LinkText>All Lessons</LinkText>
              </ProfileLink>
            </LinkWrapper>
          </Wrapper>
        :
          null
        }
      </StyledContent>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    allLessons: state.allLessons
  }
}

export default connect(mapStateToProps)(ProfileContainer)
