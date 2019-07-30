/* ^ Lesson ^ */
/* this component holds the slide and arrow button components and the slideshow logic */

import React, { Component } from 'react';
import { Link }             from 'react-router-dom'
import { connect }          from 'react-redux'
import { addXP, markAsComplete } from '../actions'
import Slide                from './Slide';
import Puzzle               from './Puzzle';
import LeftArrow            from './LeftArrow';
import RightArrow           from './RightArrow';

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
        window.alert("You have already completed this lesson")
        // redirect to lessons
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
        <div className="carousel" style={this.styles}>
          [inside the carousel component]

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

          <LeftArrow
            goToPrev={this.goToPrevSlide}
            active={this.state.slideIndex !== 0}
          />
          <span>{this.state.slideIndex + 1 + "/" + this.lessonContent.length} </span>
          {
            this.state.slideIndex !== this.lessonContent.length - 1
          ?
            <RightArrow
              goToNext={this.goToNextSlide}
              active={
                this.state.slideIndex !== this.lessonContent.length - 1 && this.state.posIndex !== 0
              }
            />
          :
            <button onClick={() => this.finishLesson()}>
              <Link to="/home" style={{textDecoration:"none"}}>Complete this Lesson</Link>
            </button>
          }
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser
  })
}

export default connect(mapStateToProps, { addXP, markAsComplete })(Carousel)
