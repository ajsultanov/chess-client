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

    if (!this.props.content) {
      return <div />
    } else {

      let puzzle = this.props.content

      return <div className="puzzle" style={this.styles}>
        [inside the puzzle component]
        <h4>id: {puzzle.id} - title: {puzzle.title}</h4>
        <p>desc: {puzzle.description}</p>

        {
          this.props.content.style === "puzzle"
        ?
          <React.Fragment>
            <ExampleBoard
              positions={puzzle.positions}
              index={this.props.index}
            />
            <LeftArrow
              goToPrev={this.props.goToPrev}
              active={this.props.index !== 0}
            />
            <span>moves</span>
            <RightArrow
              goToNext={this.props.goToNext}
              active={this.props.index !== puzzle.positions.length - 1}
            />
          </React.Fragment>
        :
          <React.Fragment>
            <TestBoard
              positions={puzzle.positions}
              moves={puzzle.moves}
              goToNext={this.props.goToNext}
              index={this.props.index}
            />
            {
              this.props.index === puzzle.positions.length - 1
            ?
              <h4>Wow you did it!</h4>
            :
              null
            }
          </React.Fragment>
        }
      </div>
    }
  }
}

export default Puzzle
