/* ^ LessonsContainer ^ */
/* this component is a link on the all lessons page */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom'
import styled               from 'styled-components'

const colors = ["lightpink", "turquoise", "powderblue", "lightsalmon", "plum", "sandybrown", "skyblue", "darkseagreen", "burlywood"]
const color = colors[Math.floor(Math.random() * colors.length)];

const StyledLink = styled(Link)`
  font-weight: normal;
  font-family: BioRhyme;
  text-decoration: none;
  background-color: ${props => props.completed ? "lightgray" : color};
  color: ${props => props.completed ? "gray" : "darkslateblue"};
  width: 35%;
  min-width: 300px;
  height: 20vh;
  margin: .5em;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 25px;
  border: 5px solid ${props => props.completed ? "lightsteelblue" : color};
  box-shadow: 0 0 0 4px inset papayawhip;
`;

const Title = styled.h3`
/* border: 1px solid; */
  margin: 0;
  max-height: 40%;
  overflow: hidden;
  margin-bottom: .5em;
  font-weight: normal;
`;

const Description = styled.p`
/* border: 1px solid; */
  margin: 0 .5em;
  line-height: 1em;
  font-size: .9em;
`;

const XP = styled.div`
/* border: 1px solid; */
  background-color: ${props => props.completed ? "black" : "rgba(255, 240, 225, .8)"};
  width: 50px;
  height: 50px;
  margin: 0 .5em;
  align-self: flex-end;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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

    return (
      <StyledLink to={`/lessons/${this.props.id}`} completed={this.state.thisLesson.completed ? 1 : 0}>
        <Title>{this.props.title}</Title>
        <Description>{this.props.description}</Description>
        <XP>
        {
          this.state.thisLesson.completed
        ?
          "✓"
        :
          this.props.xp_worth + "xp"
        }
        </XP>
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
