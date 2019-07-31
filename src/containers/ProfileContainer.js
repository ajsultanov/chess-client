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
  border: 1px solid;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
border: 1px solid;
  width: 96%;
  margin: .5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: wheat;
`;

const LinkWrapper = styled.div`
border: 1px solid;
  width: 90%;
  display: flex;
  flex-direction: row;
  background-color: lightyellow;
`;

const ProfileLink = styled(Link)`
border: 1px solid;
  padding: 0;
  margin: .5em;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: greenyellow;
  text-align: center;
  width: 50%;
`;

const LinkText = styled.span`
border 1px solid;
  padding: 1em;
  background-color: lavenderblush;
`;

class ProfileContainer extends Component {

  ok = "https://images.unsplash.com/photo-1505461296292-7d67beed10a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  twok = "https://images.unsplash.com/photo-1529699310859-b163e33e4556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1122&q=80"

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
                <ProfileLink to={`/lessons/${this.props.currentUser.current_lesson}`}>

                    <LinkText>Next Lesson:<br/>{`${this.currentLessonTitle}`}</LinkText>

                </ProfileLink>
              :
                <ProfileLink to={`/lessons/1`}>

                    <LinkText>Go to the first Lesson!</LinkText>

                </ProfileLink>
              }

              <ProfileLink to="/lessons/">
                  <LinkText>Link to All Lessons</LinkText>
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
