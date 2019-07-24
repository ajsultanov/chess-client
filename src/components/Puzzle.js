/* ^ Carousel ^ */
/* this component is a container for the lesson content shown at any one given time, dictated by the posIndex */

import React, { Component } from 'react'
import ExampleBoard         from '../ExampleBoard'
import LeftArrow            from "./LeftArrow";
import RightArrow           from "./RightArrow";

/* should be taking the index prop it has been passed and taking data out of the content array  */

class Puzzle extends Component {

  state = {
    posIndex: 0,
  }

  styles = {
    padding:"5px",
    margin:"5px",
    backgroundColor:"#fff",
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
    if (this.state.posIndex !== this.props.content.positions.length - 1) {
      this.setState({
        posIndex: this.state.posIndex + 1
      })
    }
  }

  render() {
    if (!this.props.content) {
      return <div />
    } else {

      let puzzle = this.props.content

      return <div className="puzzle" style={this.styles}>
        [inside the puzzle component]
        <h4>id: {puzzle.id} - title: {puzzle.title}</h4>
        <p>desc: {puzzle.description}</p>
        <ExampleBoard
          positions={puzzle.positions}
          index={this.state.posIndex}
        />
        <p>pos: {puzzle.positions[this.state.posIndex]}</p>
        <LeftArrow goToPrev={this.goToPrevPos} />
        <span>moves</span>
        <RightArrow goToNext={this.goToNextPos} />

      </div>
    }
  }
}

export default Puzzle
