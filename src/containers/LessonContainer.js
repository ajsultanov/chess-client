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
    backgroundColor:"#f4f4f4",
    border:"2px solid darkseagreen",
  }

  componentDidMount() {
    this.props.setCurrentLesson(this.props.match.params.id)
  }

  render() {
    return (
      <div style={this.styles}>
        {
          this.props.allLessons.length !== 0
          ? <Lesson lesson={this.props.allLessons[this.props.currentLesson - 1]}/>
          : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allLessons: state.allLessons,
    currentLesson: state.currentLesson,
    lesson: state.lesson
  }
}

export default connect(mapStateToProps, { setCurrentLesson, setLesson, getLessonSlides, getLessonPuzzles })(LessonContainer)
