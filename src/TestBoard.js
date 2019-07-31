import React, { Component } from 'react';
import Chess                from "chess.js";
import Chessboard           from "chessboardjsx";

let chess = new Chess();

class TestBoard extends Component {

  state = {
    activeSquare: "",
  }

  componentDidMount() {
    console.log(this.props);
    chess.load(this.props.positions[this.props.index])
  }

  // square = the square thats been clicked on
  onSquareClick = square => {
    console.log(square, this.props.moves[1]);

    if (square === this.state.activeSquare) {
      console.log("same square");
      this.setState({
        activeSquare: "",
      }, () => this.highlightSquare())
      return null
    }
    else {
      let moves = chess.moves({square:square})
      //square === this.props.moves[0]

      if (moves.length > 0){
        console.log("square with moves");

        this.setState({
          activeSquare: square
        }, () => this.highlightSquare(square))
        return null
      }

      if (this.state.activeSquare === this.props.moves[0] && square === this.props.moves[1]) {
        this.props.goToNext()
        this.setState({
          activeSquare: "",
        }, () => this.highlightSquare())
      }
    }
  }

  onDrop = ({ sourceSquare, targetSquare }) => {
  if (sourceSquare === this.props.moves[0] && targetSquare === this.props.moves[1]) {
      this.props.goToNext()
      this.setState({
        activeSquare: "",
      }, () => this.highlightSquare())
    }
  }

  highlightSquare = square => {
    document.querySelectorAll('[data-squareid]').forEach(boardSquare => {
      // resets squares
      boardSquare.dataset.testid === "white-square"
        ?
          boardSquare.style.backgroundColor = "#BCB"
        :
          boardSquare.style.backgroundColor = "#898"
          boardSquare.style.boxShadow = ""
      // highlights active square
      if (boardSquare.dataset.squareid === square) {
        boardSquare.style.boxShadow = "0 0 20px inset rgba(255,240,65,.8)"
      }
    })
  }

  render() {
    console.log(this.props);
    return (
      <div>
          <Chessboard
            width={460}
            position={this.props.positions[this.props.index]}
            onSquareClick={this.onSquareClick}
            lightSquareStyle={{backgroundColor:'#BCB'}}
            darkSquareStyle={{backgroundColor:'#898'}}
            showNotation={false}
            onDrop={this.onDrop}
            dropSquareStyle={{
              outline: "2px dashed rgba(255,240,85,.6)",
              outlineOffset: "-5px",
            }}
            boardStyle={{border:'5px solid pink',borderRadius:'5px'}}
          />
      </div>
    );
  }
}
export default TestBoard
