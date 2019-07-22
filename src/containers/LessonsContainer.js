/* ^ App ^ */
/* this component is a page that renders links to each of the lessons */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchLessons }     from '../actions'
import LessonLink           from '../components/LessonLink'
import '../styles.css';

class LessonsContainer extends Component {

  /* this should already have been fetched when App loads */

  // componentDidMount = () => {
  //   this.props.fetchLessons()
  // }

  render() {
    return (
      <div>
        Lessons!
        {this.props.allLessons.map(lesson => {
          return <LessonLink key={lesson.id} {...lesson} />
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allLessons: state.allLessons
  }
}

export default connect(mapStateToProps, { fetchLessons })(LessonsContainer)
