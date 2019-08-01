/* ^ Lesson ^ */
/* this component holds the slide and arrow button components and the slideshow logic */

import React, { Component } from 'react';
import { Link, Redirect }   from 'react-router-dom'
import { connect }          from 'react-redux'
import { addXP, markAsComplete } from '../actions'
import Slide                from './Slide';
import Puzzle               from './Puzzle';
import LeftArrow            from './LeftArrow';
import RightArrow           from './RightArrow';
import styled               from 'styled-components'

const StyledContent = styled.div`
/* border: 1px solid; */
  /* background-color: lightcyan; */
  margin: 0;
  width: 100%;
  min-width: 600px;
  margin: .5em;
  padding: .5em;

  overflow: auto;
`;

const LessonNav = styled.div`
/* border: 1px solid; */
  /* background-color: lightslategray; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid;
`;

const FinishDiv = styled.div`
/* border: 1px solid red; */
  font-family: BioRhyme;
  background-color: powderblue;
  width: 200px;
  font-size: 1.25em;
  text-align: center;
  padding: 10px;
  margin: .5em 3em;
  height: 30px;
  box-shadow: 0 0 1em .5em inset skyblue;
  border-radius: 3px;
`;

const FinishButton = styled(Link)`
/* border: 1px solid red; */
  /* background: salmon; */
  font-size: .75em;
  color: white;
  font-weight: bold;
`

class Carousel extends Component {

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  lessonContent = [...this.props.lesson.slides, ...this.props.lesson.puzzles].sort((a, b) => a.sort_order - b.sort_order);

  state = {
    slideIndex: 0,
    posIndex: 0,
    finished: false,
  }

  handleKeyPress = (e) => {
    if (e.key === "ArrowRight") {
      this.goToNextSlide()
    }
    if (e.key === "ArrowLeft") {
      this.goToPrevSlide()
    }
    // if (e.key === "Enter" && this.state.slideIndex === this.lessonContent.length - 1) {
    //   this.finishLesson()
    // }
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
    // console.log(this.ul);
    console.log(this.props.currentUser);
    if (this.ul) {
      if (this.ul.completed) {
        this.props.addXP(this.props.currentUser, 0)
        window.alert("You have already completed this lesson")
        this.setState({
          finished: true,
        })
      }
      else {
        this.props.addXP(this.props.currentUser, this.props.lesson.xp_worth)
        this.props.markAsComplete(this.ul)
        console.log(this.props);
        // this.props.history.push("/home")
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
            <span>{this.state.slideIndex + 1 + " | " + this.lessonContent.length} </span>
            {
              this.state.slideIndex !== this.lessonContent.length - 1
            ?
                <RightArrow
                  goToNext={this.goToNextSlide}
                  active={
                    this.state.slideIndex !== this.lessonContent.length - 1
                  }
                />
            :
              <FinishDiv onClick={() => this.finishLesson()}>
                <FinishButton to="/home" >
                    Complete Lesson
                </FinishButton>
              </FinishDiv>
            }
          </LessonNav>
        </StyledContent>
      )
    }
  }
}

// && this.state.posIndex !== 0

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser
  })
}

export default connect(mapStateToProps, { addXP, markAsComplete })(Carousel)
