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
  }

  state = {
    currentIndex: 0
  }

  goToPrevSlide = () => {
    /* if this is the first slide in the array
    [!] does nothing... */
    if (this.state.currentIndex === 0) {
      console.log("nope!");
    }

    console.log("new index:", this.state.currentIndex - 1);
    this.setState({
      ...this.state,
      currentIndex: this.state.currentIndex - 1
    })
  }

  goToNextSlide = () => {
    /* if this is the last slide in the array
    [!] redirect to lesson completion page... */
    if (this.state.currentIndex === this.props.lessonContent.length - 1) {
      console.log("all done!");
    }

    console.log("new index:", this.state.currentIndex + 1);
    this.setState({
      ...this.state,
      currentIndex: this.state.currentIndex + 1
    })
  }

  render() {
    console.log("carousel props: ", this.props);
    return (
      <div className="carousel" style={this.styles}>
        inside the carousel component

        {/* this index should do a bunch of stuff */}
        <Slide
          index={this.state.currentIndex}
          lessonContent={this.props.lessonContent}
        />
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <span>{this.state.currentIndex + 1 + "/" + this.props.lessonContent.length}</span>
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    )
  }
}

export default Carousel
