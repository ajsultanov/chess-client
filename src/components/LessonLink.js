/* ^ LessonsContainer ^ */
/* this component is a link on the all lessons page */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom'

class LessonLink extends Component {

  styles = {
    color: "white",
    padding:"5px",
    margin:"5px",
    height:"100px",
    border:"2px solid red",
    backgroundImage:'url(https://source.unsplash.com/random)'
  }

  render() {
    const thisLesson = this.props.currentUser.user_lessons.find(thisLesson => {
      return thisLesson.lesson_id === this.props.id
    })

    return (
      <Link to={`/lessons/${this.props.id}`}>
        <div style={this.styles}>
          {
            thisLesson.completed
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
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(LessonLink)
