import React, { Component } from 'react';
import Chess                from "chess.js";
import Chessboard           from "chessboardjsx";

let test = new Chess();

class TestBoard extends Component {

  state = {
    fen: "start",
    selectedSquare: "",
    highlightedSquare: "",
    validSquares: [],
    history: [],
  }

  componentDidUpdate(prevState) {
    if (this.state.validSquares.length === 0) {
      this.resetBoard()
    }
  }

  onSquareClick = square => {
    if (square === this.state.selectedSquare) {
      this.reClick(square)
    }
    else {
      this.newClick(square)
    }
  }

  /* click on the same square twice */
  reClick = square => {
    this.setState({
      selectedSquare: "",
      highlightedSquare: "",
      validSquares: []
    })
    this.resetBoard()
  }

  /* click on a second square */
  newClick = square => {
    this.setState({
      selectedSquare: square,
      highlightedSquare: "",
    })
  }

  render() {
    console.log(test.ascii());
    return (
      <div>
        <div style={{float:"left",marginRight:"10px"}}>
          <Chessboard
            width={200}
            position={this.props.positions[this.props.index]}
            transitionDuration={200}
            lightSquareStyle={{backgroundColor:'#CBF0B5'}}
            darkSquareStyle={{backgroundColor:'#90B563'}}
            boardStyle={{cursor:"pointer"}}
            //onMouseOverSquare={() => {}}
          />
        </div>
      </div>
    );
  }
}

export default TestBoard
