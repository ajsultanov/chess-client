/* ^ App ^ */
/* this component is a page that renders links to each of the lessons */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Lesson               from '../components/Lesson';
import { setCurrentLesson,
         setLesson,
         getLessonSlides,
         getLessonPuzzles } from '../actions';

class LessonContainer extends Component {

  styles = {
    width:"796px",
    padding:"10px",
    marginTop:"10px",
    backgroundColor:"#ccc",
    border:"2px solid darkseagreen",
  }

  componentDidMount() {
    const cl = this.props.currentUser.current_lesson
    const id = parseInt(this.props.match.params.id)
    if (cl === null || cl !== id) {
      this.props.setCurrentLesson(this.props.currentUser, id)
    }
  }

  render() {
    console.log("current lesson", this.props.currentUser.current_lesson);
    return (
      <div style={this.styles}>
        {
          this.props.allLessons.length !== 0
          ? <Lesson lesson={this.props.allLessons[this.props.match.params.id - 1]}/>
          : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    allLessons: state.allLessons
  }
}

export default connect(mapStateToProps, { setCurrentLesson, setLesson, getLessonSlides, getLessonPuzzles })(LessonContainer)
