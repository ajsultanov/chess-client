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

  styles = {
    padding:"5px",
    margin:"5px",
    backgroundColor:"#eee",
    border:"2px solid mediumorchid",
    overflow:"hidden"
  }

  state = {
    slideIndex: 0
  }

  goToPrevSlide = () => {
    console.log("back!!");
    if (this.state.slideIndex !== 0) {
      this.setState({
        slideIndex: this.state.slideIndex - 1
      })
    }
  }

  goToNextSlide = () => {
    console.log("next!!");
    let lessonLength = [...this.props.lesson.slides, ...this.props.lesson.puzzles].length

    if (this.state.slideIndex !== lessonLength - 1) {
      this.setState({
        slideIndex: this.state.slideIndex + 1
      })
    }
  }

  ul = this.props.currentUser.user_lessons.find(ul => {
    return ul.lesson_id === this.props.currentUser.current_lesson
  })

  finishLesson = () => {
    if (this.ul) {
      if (this.ul.completed) {
        window.alert("UH UH NOP")
      } else {
        console.log("IM TRYINNNN!!!!!")
        this.props.markAsComplete(this.ul)
        this.props.addXP(this.props.currentUser, this.props.lesson.xp_worth)
      }
    } else {
      console.log(this.props.currentUser);
    }
  }

  render() {

    let lessonContent = [...this.props.lesson.slides, ...this.props.lesson.puzzles].sort((a, b) => a.sort_order - b.sort_order);

    if (!this.props.lesson) {
      return <div />
    } else {
      return (
        <div className="carousel" style={this.styles}>
          [inside the carousel component]

          {
            lessonContent[this.state.slideIndex].style === "slide"
            ? <Slide content={lessonContent[this.state.slideIndex]}/>
            : <Puzzle content={lessonContent[this.state.slideIndex]}/>
          }

          <LeftArrow goToPrev={this.goToPrevSlide} />
          <span>{this.state.slideIndex + 1 + "/" + lessonContent.length}</span>
          <RightArrow goToNext={this.goToNextSlide} />

          {
            this.state.slideIndex + 1 === lessonContent.length
            ?
              <div onClick={() => this.finishLesson()}>
                <Link to="/lessons/">Complete this Lesson</Link>
              </div>
            :
              null
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
