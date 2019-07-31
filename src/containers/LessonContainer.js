/* ^ App ^ */
/* this component is a page that renders links to each of the lessons */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Carousel             from '../components/Carousel';
import { setCurrentLesson,
         setLesson,
         getLessonSlides,
         getLessonPuzzles } from '../actions';
import styled               from 'styled-components'

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

class LessonContainer extends Component {

  styles = {
    width:"796px",
    padding:"10px",
    marginTop:"10px",
    backgroundColor:"#ccc",
    border:"1px solid",
  }

  componentDidMount() {
    const cl = this.props.currentUser.current_lesson
    const id = parseInt(this.props.match.params.id)
    if (cl === null || cl !== id) {
      this.props.setCurrentLesson(this.props.currentUser, id)
    }
  }

  render() {
    console.log("current lesson", this.props.currentUser.current_lesson);
    return (
      <StyledContent>
        {
          this.props.allLessons.length !== 0
        ?
          <Carousel
            lesson={this.props.allLessons[this.props.match.params.id - 1]}
          />
        :
          null
        }
      </StyledContent>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    allLessons: state.allLessons
  }
}

export default connect(mapStateToProps, { setCurrentLesson, setLesson, getLessonSlides, getLessonPuzzles })(LessonContainer)
