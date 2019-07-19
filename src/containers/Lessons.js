import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchLessons }     from '../actions'
import LessonLink           from '../components/LessonLink'

class Lessons extends Component {

  componentDidMount = () => {
    this.props.fetchLessons()
  }

  render() {
    console.log(this.props);
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

export default connect(mapStateToProps, { fetchLessons })(Lessons)
