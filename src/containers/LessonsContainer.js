/* ^ App ^ */
/* this component is a page that renders links to each of the lessons */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchLessons }     from '../actions'
import LessonLink           from '../components/LessonLink'
import styled               from 'styled-components'

const StyledContent = styled.div`
/* border: 1px solid; */
  width: 100%;
  background-color: papayawhip;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
/* border: 1px solid; */
  width: 96%;
  display: flex;
  margin: .5em;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* background-color: wheat; */
`;


class LessonsContainer extends Component {


  render() {

    return (
      <StyledContent>
        <Wrapper>
          {this.props.allLessons.map(lesson => {
            return <LessonLink key={lesson.id} {...lesson}/>
          })}
        </Wrapper>
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
