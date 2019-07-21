/* ^ App ^ */
/* this component is the lesson page itself, containing slides (cmp) and puzzles (cmp) */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { setCurrentLesson } from '../actions';
import { getLessonContent } from '../actions';
import Carousel from './Carousel';

class Lesson extends Component {

  lessonId = this.props.match.params.id;
  currentLesson = this.props.allLessons[this.lessonId - 1]

  componentDidMount = () => {
    this.props.setCurrentLesson(this.currentLesson.id)
    //setTimeout(() => console.log("current lesson:", this.props.currentLesson), 100)
    this.props.getLessonContent(this.lessonId)
  }

  render() {
    console.log("lesson:", this.props.lessonContent);
    return (
      <div style={{border:"2px solid limegreen"}}>
        <div>This is the lesson!</div>
        <div>title: {this.currentLesson.title} <br/>
        description: {this.currentLesson.description}</div>
        <Carousel lessonContent={this.props.lessonContent}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allLessons: state.allLessons,
    currentLesson: state.currentLesson,
    lessonContent: state.lessonContent
  }
}

export default connect(mapStateToProps, { setCurrentLesson, getLessonContent })(Lesson)
