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
      position: this.props.positions[0],
      activeSquare: this.props.moves[0],
    };
  }

  componentDidMount() {
    console.log(this.props.moves[0], this.props.moves[1]);
    console.log(this.props.positions[0]);
    this.highlightSquare(this.state.activeSquare);
  }

  // square = the square thats been clicked on
  onSquareClick = square => {

    if (square === this.props.moves[1]){
      console.log("YAY");
      // create move
      chess.move({
        from: this.state.activeSquare,
        to: square
      })
      // update board state
      this.unhighlightSquares()
      this.setState({
        position: chess.fen(),
        activeSquare: "",
      })

      // here is where you do something else when the puzzle is completed





    }


    // FIX
    // square is not a valid move or valid piece
    else {
      // reset move state
      console.log("HONK");
      this.unhighlightSquares()
      this.setState({
        activeSquare: "",
        validSquares: [],
      })
    }
  }

  onDrop = ({ sourceSquare, targetSquare }) => {
    // create move
    chess.move({
      from: sourceSquare,
      to: targetSquare
    })
    // update board state
    this.setState({
      position: chess.fen(),
      activeSquare: "",
      validSquares: [],
      history: chess.history()
    })
  }

  highlightSquare = square => {
    let mySquare = document.querySelector(`[data-squareid=${square}]`)
    console.log(square);
    console.log(document.querySelector(`[data-squareid='a1']`))
    // highlighting on active square
    // if (square === this.state.activeSquare) {
      // mySquare.style.boxShadow = "inset 0 0 10px #FFFF00"
      // mySquare.style.outline = "2px dashed rgba(255,255,255,.5)"
      // mySquare.style.outlineOffset = "-5px"
    // }
  }
  unhighlightSquares = () => {
    let allSquares = document.querySelectorAll("[data-squareid]")
    allSquares.forEach((square) => {
      square.style.boxShadow = ""
      square.style.outline = ""
      square.style.outlineOffset = ""
    })
  }

  render() {

    return (
      <div>
        <div>Hello yes this is NEW board</div>

        <div style={{float:"left",marginRight:"10px"}}>
          <Chessboard
            width={256}
            position={this.state.position}
            onSquareClick={this.onSquareClick}
            lightSquareStyle={{backgroundColor:'#BCB'}}
            darkSquareStyle={{backgroundColor:'#898'}}
            showNotation={false}
            onDrop={this.onDrop}
            dropSquareStyle={{
              outline: "2px dashed rgba(255,240,85,.6)",
              outlineOffset: "-5px",
            }}
          />
        </div>
      </div>
    );
  }
}

export default TestBoard
