/* ^ LessonsContainer ^ */
/* this component is a link on the all lessons page */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom'
import styled               from 'styled-components'

const StyledLink = styled(Link)`
border: 5px solid lightpink;
  /* color: navy; */
  font-weight: normal;
  font-family: BioRhyme;
  text-decoration: none;
  background-color: lightpink;
  color: ${props => props.completed ? "red" : "blue"};
  width: 30%;
  min-width: 300px;
  height: 20vh;
  margin: .5em;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 25px;
  box-shadow: 0 0 0 4px inset white;
`;

const Title = styled.h3`
border: 1px solid;
  margin: 0;
  max-height: 40%;
  overflow: hidden;
  margin-bottom: .5em;
`;

const Description = styled.p`
border: 1px solid;
  margin: 0 .5em;
  line-height: 1em;
  font-size: .9em;
`;

const XP = styled.p`
border: 1px solid;
background-color: palegreen;
  margin: 0 .5em;
  align-self: flex-end;
`;

class LessonLink extends Component {

    state = {
      thisLesson: "",
    }

  componentDidMount() {
    const lesson = this.props.currentUser.user_lessons.find(l => {
      return l.lesson_id === this.props.id
    })

    this.setState({
      thisLesson: lesson,
    })
  }



  render() {
    // console.log(this.state.thisLesson.completed);

    const description = this.props.description.split(",")[0]
    const xp = this.props.description.split(",")[1]

    return (
      <StyledLink to={`/lessons/${this.props.id}`} completed={this.state.thisLesson.completed ? 1 : 0}>
        <Title>title: {this.props.title}</Title>
        <Description>description: {description}</Description>
        <XP>{xp}</XP>
      </StyledLink>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    allLessons: state.allLessons,
    lesson: state.lesson,
    lessonContent: state.lessonContent,
  }
}

export default connect(mapStateToProps)(LessonLink)
