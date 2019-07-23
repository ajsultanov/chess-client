/* ^ Lesson ^ */
/* this component holds the slide and arrow button components and the slideshow logic */

import React, { Component } from 'react';
import Slide                from './Slide';
import LeftArrow            from './LeftArrow';
import RightArrow           from './RightArrow';

class Carousel extends Component {

  styles = {
    padding:"5px",
    margin:"5px",
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

  render() {

    let lessonContent = [...this.props.lesson.slides, ...this.props.lesson.puzzles].sort((a, b) => a.sort_order - b.sort_order);

    console.log('SLIDES', this.props.lesson.slides);
    console.log('PUZZLES', this.props.lesson.puzzles);
    console.log('LESSON CONTENT', lessonContent);

    if (!this.props.lesson) {
      return <div />
    } else {
      return (
        <div className="carousel" style={this.styles}>
          [inside the carousel component]

          {/* this index should do a bunch of stuff */}
          <Slide
            content={lessonContent[this.state.slideIndex]}
          />
          <LeftArrow goToPrev={this.goToPrevSlide} />
          <span>{this.state.slideIndex + 1 + "/" + this.props.lesson.length}</span>
          <RightArrow goToNext={this.goToNextSlide} />
        </div>
      )
    }
  }
}

export default Carousel
