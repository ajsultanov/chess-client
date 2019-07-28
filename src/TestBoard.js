import React, { Component } from 'react';
import Chess                from "chess.js";
import Chessboard           from "chessboardjsx";

let chess = new Chess();

class TestBoard extends Component {

  // make 'move' from puzzle model an object with a 'from' key
  // and a 'to' key.
  // assign a highlight to the 'from' position.
  // user must choose the highlighted square -> becomes
  // activeSquare.
  // user must click on the correct square, that matches the
  // 'to' position.
  // then a button for continue appears?

  constructor(props) {
    super(props);
    this.state = {
      activeSquare: "",
    };
  }

  // square = the square thats been clicked on
  onSquareClick = square => {

    if (square === this.state.activeSquare) {
      this.setState({
        activeSquare: "",
      })
      return null
    }
    else {

      if (square === this.props.moves[0]){
        this.setState({
          activeSquare: square
        }, () => this.highlightSquare())
        return null
      }

      if (this.state.activeSquare === this.props.moves[0] && square === this.props.moves[1]) {
        this.props.goToNext()
        this.setState({
          activeSquare: "",
        })
      }
    }
  }

  onDrop = ({ sourceSquare, targetSquare }) => {
  if (sourceSquare === this.props.moves[0] && targetSquare === this.props.moves[1]) {
      this.props.goToNext()
      this.setState({
        activeSquare: "",
      })
    }
  }

  highlightSquare = square => {

  }

  render() {
    return (
      <div>
        <div>Hello yes this is TEST board</div>

        <div style={{float:"left",marginRight:"10px"}}>
          <Chessboard
            width={360}
            position={this.props.positions[this.props.index]}
            onSquareClick={this.onSquareClick}
            lightSquareStyle={{backgroundColor:'#BCB'}}
            darkSquareStyle={{backgroundColor:'#898'}}
            showNotation={false}
            squareStyles={this.state.activeSquare: {backgroundColor: "red"}}
            onDrop={this.onDrop}
            dropSquareStyle={{
              outline: "2px dashed rgba(255,240,85,.6)",
              outlineOffset: "-5px",
            }}
            boardStyle={{border:'5px solid pink',borderRadius:'5px'}}
          />
        </div>
      </div>
    );
  }
}

export default TestBoard
