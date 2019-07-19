import React, { Component } from 'react';
import { connect }          from 'react-redux';


class Lesson extends Component {

  render() {
    const lessonId = this.props.match.params.id;
    const currentLesson = this.props.allLessons[lessonId - 1]

    return (
      <React.Fragment>
        <div>This is the lesson!</div>
        <div>{currentLesson.title}</div>
        <div>{currentLesson.description}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    allLessons: state.allLessons
  }
}

export default connect(mapStateToProps)(Lesson)
