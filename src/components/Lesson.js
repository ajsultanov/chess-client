/* ^ App ^ */
/* this component is the lesson page itself, containing slides (cmp) and puzzles (cmp) */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom';
import { setCurrentLesson, getLessonContent } from '../actions';
import Carousel from './Carousel';
import '../styles.css';

class Lesson extends Component {

  /* this comes from the url */
  lessonId = this.props.match.params.id
  /* allLessons is an array that starts at 0, lesson ids start at 1 */
  currentLesson = this.props.allLessons[this.lessonId - 1]

  componentDidMount = () => {
    this.props.setCurrentLesson(this.currentLesson.id)
    //setTimeout(() => console.log("current lesson:", this.props.currentLesson), 100)

    this.props.getLessonContent(this.lessonId)
  }

  render() {
    console.log("lesson:", this.props.lessonContent);
    return (
      <div>
        <Link to="/lessons/">Back to lessons</Link>
        <div style={{border:"2px solid limegreen",padding:"5px",margin:"5px"}}>
          <div>title: {this.currentLesson.title} <br/>
          description: {this.currentLesson.description}</div>
          <Carousel lessonContent={this.props.lessonContent}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allLessons: state.allLessons,         // array of objects (lessons)
    currentLesson: state.currentLesson,   // int (lesson id)
    lessonContent: state.lessonContent    // array of objects (slides)
  }
}

export default connect(mapStateToProps, { setCurrentLesson, getLessonContent })(Lesson)
