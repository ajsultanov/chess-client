/* ^ Carousel ^ */
/* this component is a container for the lesson content shown at any one given time, dictated by the index */

import React, { Component } from 'react'
import ExampleBoard         from '../ExampleBoard'
import TestBoard            from '../TestBoard'
import LeftArrow            from "./LeftArrow";
import RightArrow           from "./RightArrow";

class Puzzle extends Component {

  styles = {
    padding:"5px",
    margin:"5px",
    backgroundColor:"#fff",
    border:"2px solid orange",
    overflow:"hidden"
  }



  render() {
    console.log("pos index: ", this.props.index);

    if (!this.props.content) {
      return <div />
    } else {

      let puzzle = this.props.content

      return <div className="puzzle" style={this.styles}>
        [inside the puzzle component]
        <h4>id: {puzzle.id} - title: {puzzle.title}</h4>
        <p>desc: {puzzle.description}</p>

        { this.props.content.style === "puzzle"
        ? <React.Fragment>
            <ExampleBoard
              positions={puzzle.positions}
              index={this.props.index}
            />
            <p>pos: {puzzle.positions[this.props.index]}</p>
            <LeftArrow goToPrev={this.props.goToPrev} />
            <span>moves</span>
            <RightArrow goToNext={this.props.goToNext} />
          </React.Fragment>
        :
          <React.Fragment>
            <TestBoard
              positions={puzzle.positions}
              moves={puzzle.moves}
              goToNext={this.props.goToNext}
              index={this.props.index}
            />
            {this.props.index === this.props.content.positions.length - 1
            ? <RightArrow goToNext={this.goToNextPos} />
            : null}
          </React.Fragment>
        }
      </div>
    }
  }
}

export default Puzzle
