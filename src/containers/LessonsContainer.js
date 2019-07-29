/* ^ App ^ */
/* this component is a page that renders links to each of the lessons */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchLessons }     from '../actions'
import LessonLink           from '../components/LessonLink'

class LessonsContainer extends Component {

  styles = {
    width:"796px",
    padding:"10px",
    border:"1px solid",
  }

  render() {
    return (
      <div style={this.styles}>
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
