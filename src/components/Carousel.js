/* ^ Lesson ^ */
/* this component holds the slide and arrow button components and the slideshow logic */

import React, { Component } from 'react';
import { Link }             from 'react-router-dom'
import { connect }          from 'react-redux'
import { addXP, noXP, markAsComplete } from '../actions'
import Slide                from './Slide';
import Puzzle               from './Puzzle';
import LeftArrow            from './LeftArrow';
import RightArrow           from './RightArrow';
import styled               from 'styled-components'

const StyledContent = styled.div`
border: 1px solid;
  background-color: lightcyan;
  margin: 0;
  width: 96%;
  min-width: 600px;
  margin: .5em;
  padding: .5em;

  overflow: auto;
`;

const LessonNav = styled.div`
border: 1px solid;
  background-color: lightslategray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NextButton = styled(RightArrow)`
border: 1px solid;
  background-color: green;
`;

const FinishDiv = styled.div`
border: 1px solid limegreen;
  background-color: mistyrose;
  width: 200px;
  font-size: 1.25em;
  text-align: center;
  padding: 10px;
  margin: .5em;
  height: 30px;
`;

const FinishButton = styled(Link)`
border: 1px solid red;
  background: salmon;
  font-size: .75em;
`


class Carousel extends Component {

  lessonContent = [...this.props.lesson.slides, ...this.props.lesson.puzzles].sort((a, b) => a.sort_order - b.sort_order);

  styles = {
    padding:"5px",
    margin:"5px",
    backgroundColor:"#eee",
    border:"2px solid mediumorchid",
    overflow:"hidden"
  }

  state = {
    slideIndex: 0,
    posIndex: 0,
  }

  goToPrevSlide = () => {
    if (this.state.slideIndex !== 0) {
      this.setState({
        slideIndex: this.state.slideIndex - 1,
        posIndex: 0
      })
    }
  }

  goToNextSlide = () => {
    let lessonLength = [...this.props.lesson.slides, ...this.props.lesson.puzzles].length

    if (this.state.slideIndex !== lessonLength - 1) {
      this.setState({
        slideIndex: this.state.slideIndex + 1,
        posIndex: 0
      })
    }
  }

  goToPrevPos = () => {
    if (this.state.posIndex !== 0) {
      this.setState({
        posIndex: this.state.posIndex - 1
      })
    }
  }

  goToNextPos = () => {
    if (this.lessonContent[this.state.slideIndex].positions) {
      if (this.state.posIndex !== this.lessonContent[this.state.slideIndex].positions.length - 1) {
        this.setState({
          posIndex: this.state.posIndex + 1
        })
      }
    }
    else {
      this.setState({
        posIndex: 1
      })
    }
  }

  ul = this.props.currentUser.user_lessons.find(ul => {
    return ul.lesson_id === this.props.currentUser.current_lesson
  })

  finishLesson = () => {
    console.log(this.ul);
    if (this.ul) {
      if (this.ul.completed) {
        this.props.noXP("hello")
        window.alert("You have already completed this lesson")
      }
      else {
        this.props.addXP(this.props.currentUser, this.props.lesson.xp_worth)
        this.props.markAsComplete(this.ul)
      }
    }
  }

  render() {

    if (!this.props.lesson) {
      return <div />
    }
    else {
      return (
        <StyledContent>
          {
            this.lessonContent[this.state.slideIndex].style === "slide"
          ?
            <Slide
              content={this.lessonContent[this.state.slideIndex]}
              goToNext={this.goToNextPos}
            />
          :
            <Puzzle
              content={this.lessonContent[this.state.slideIndex]}
              index={this.state.posIndex}
              goToNext={this.goToNextPos}
              goToPrev={this.goToPrevPos}
            />
          }
          <LessonNav>
              <LeftArrow
                goToPrev={this.goToPrevSlide}
                active={this.state.slideIndex !== 0}
              />
            <span>{this.state.slideIndex + 1 + "/" + this.lessonContent.length} </span>
            {
              this.state.slideIndex !== this.lessonContent.length - 1
            ?
                <NextButton
                  goToNext={this.goToNextSlide}
                  active={
                    this.state.slideIndex !== this.lessonContent.length - 1 //&& this.state.posIndex !== 0
                  }
                />
            :
              <FinishDiv onClick={() => this.finishLesson()}>
                <FinishButton to="/home" style={{textDecoration:"none"}}>
                    Complete this Lesson
                </FinishButton>
              </FinishDiv>
            }
          </LessonNav>
        </StyledContent>
      )
    }
  }
}



const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser
  })
}

export default connect(mapStateToProps, { addXP, noXP, markAsComplete })(Carousel)
