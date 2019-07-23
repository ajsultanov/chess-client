/* ^ Carousel ^ */
/* this component is a container for the lesson content shown at any one given time, dictated by the posIndex */

import React, { Component } from 'react'
import Board from '../Board'
import ExampleBoard from '../ExampleBoard'
import LeftArrow            from "./LeftArrow";
import RightArrow           from "./RightArrow";

/* should be taking the index prop it has been passed and taking data out of the lessonContent array  */

class Slide extends Component {

  state = {
    posIndex: 0,
  }

  styles = {
    padding:"5px",
    margin:"5px",
    border:"2px solid orange",
    overflow:"hidden"
  }

  goToPrevPos = () => {
    console.log("back!!");
    if (this.state.posIndex !== 0) {
      this.setState({
        posIndex: this.state.posIndex - 1
      })
    }
  }

  goToNextPos = () => {
    console.log("next!!");
    if (this.state.posIndex !== this.props.lessonContent.positions.length - 1) {
      this.setState({
        posIndex: this.state.posIndex + 1
      })
    }
  }

  render() {
    if (!this.props.lessonContent) {
      return <div />
    } else {

      const slide = this.props.lessonContent

      return <div className="slide" style={this.styles}>
        [inside the slide component]
        <h4>id: {slide.id} - title: {slide.title}</h4>
        <p>desc: {slide.description}</p>
        <p>pos: {slide.positions[this.state.posIndex]}</p>
        <ExampleBoard
          positions={slide.positions}
          index={this.state.posIndex}
        />
        <LeftArrow goToPrev={this.goToPrevPos} />
        <span>moves</span>
        <RightArrow goToNext={this.goToNextPos} />

      </div>
    }
  }
}

export default Slide
