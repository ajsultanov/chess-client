/* ^ App ^ */
/* this component is a page that renders links to each of the lessons */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchLessons }     from '../actions'
import LessonLink           from '../components/LessonLink'
import styled               from 'styled-components'

const StyledContent = styled.div`
border: 1px solid;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1em;
  margin: .5em;
`;

class LessonsContainer extends Component {

  render() {
    return (
      <StyledContent>
        {this.props.allLessons.map(lesson => {
          return <LessonLink key={lesson.id} {...lesson} />
        })}
      </StyledContent>
    );
  }
}

const mapStateToProps = state => {
  return {
    allLessons: state.allLessons
  }
}

export default connect(mapStateToProps, { fetchLessons })(LessonsContainer)
