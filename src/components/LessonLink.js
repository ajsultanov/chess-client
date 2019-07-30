/* ^ LessonsContainer ^ */
/* this component is a link on the all lessons page */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom'

class LessonLink extends Component {

    state = {
      thisLesson: "",
    }

  styles = {
    color: "white",
    padding:"5px",
    margin:"5px",
    height:"150px",
    border:"2px solid red",
    backgroundImage:'url(https://source.unsplash.com/random)'
  }

  componentDidMount() {

    console.log(this.props.currentUser);

    const lesson = this.props.currentUser.user_lessons.find(l => {
      return l.lesson_id === this.props.id
    })



    this.setState({
      thisLesson: lesson,
    })
  }

  render() {

    return (
      <Link to={`/lessons/${this.props.id}`}>
        <div style={this.styles}>
          {
           this.state.thisLesson.completed
          ?
            "******** You did this one already **********"
          :
            "Welcome to the lesson"
          }
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </Link>
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
