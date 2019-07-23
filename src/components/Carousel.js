/* ^ Lesson ^ */
/* this component holds the slide and arrow button components and the slideshow logic */

import React, { Component } from 'react';
import { Redirect }         from 'react-router-dom';
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
    if (this.state.slideIndex !== this.props.lessonContent.length - 1) {
      this.setState({
        slideIndex: this.state.slideIndex + 1
      })
    }
  }

  render() {
    if (this.props.lessonContent.length === 0) {
      return <div />
    } else {
      return (
        <div className="carousel" style={this.styles}>
          [inside the carousel component]

          {/* this index should do a bunch of stuff */}
          <Slide
            lessonContent={this.props.lessonContent[this.state.slideIndex]}
          />
          <LeftArrow goToPrev={this.goToPrevSlide} />
          <span>{this.state.slideIndex + 1 + "/" + this.props.lessonContent.length}</span>
          <RightArrow goToNext={this.goToNextSlide} />
        </div>
      )
    }
  }
}

export default Carousel
