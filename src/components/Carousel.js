import React, { Component } from 'react';
import Slide                from './Slide';
import LeftArrow            from './LeftArrow';
import RightArrow           from './RightArrow';

class Carousel extends Component {

  state = {
    currentIndex: 0,
    lessonContent: this.props.lessonContent
  }

  goToPrevSlide = () => {
    console.log("new index:", this.state.currentIndex - 1);
    this.setState({
      ...this.state,
      currentIndex: this.state.currentIndex - 1
    })
  }

  goToNextSlide = () => {
    // if (this.state.currentIndex === this.state.images.length - 1) {
    //   /*
    //   if this is the last slide in the array
    //   redirect to lesson completion page
    //   */
    //   console.log("all done!");
    // }

    console.log("new index:", this.state.currentIndex + 1);
    this.setState({
      ...this.state,
      currentIndex: this.state.currentIndex + 1
    })
  }

  render() {
    console.log("carousel state: ", this.state);
    return (
      <div className="carousel" style={{border:"2px solid purple"}}>
        inside the carousel component
        <Slide
          index={this.state.currentIndex}
          lessonContent={this.state.lessonContent}
        />
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    )
  }
}

export default Carousel
