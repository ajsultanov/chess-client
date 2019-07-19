import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchLessons }     from '../actions'
import LessonLink           from '../components/LessonLink'

class LessonsContainer extends Component {

  componentDidMount = () => {
    this.props.fetchLessons()
  }

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
