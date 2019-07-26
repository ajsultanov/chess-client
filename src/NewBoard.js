import React, { Component } from 'react';
import Chess                from "chess.js";
import Chessboard           from "chessboardjsx";

let chess = new Chess();

class NewBoard extends Component {

  state = {
    position: "start",
    activeSquare: "",
    validSquares: [],
    history: [],
  }

  // square = the square thats been clicked on
  onSquareClick = square => {

    // clicked square is piece from side whose turn it is
    if (chess.get(square) && chess.get(square).color === chess.turn()){
      this.setState(
      {
        activeSquare: square
      },
      () => {
        // highlight active square
        this.unhighlightSquares()
        this.highlightSquare(square)
        // valid moves list
        let moves = chess.moves({square:square})
        // squares of valid moves
        let squares = moves.map(move => move.match(/[a-h][1-8]/))
        // array flattening function
        let flat = arr => [].concat(...arr)

        // if moves, update valid squares in state
        if (moves.length > 0) {
          this.setState(
            {
              validSquares: flat(squares)
            },
            // highlight valid moves
            () => this.highlightMoves(flat(squares))
          )
        } else {
          // valid piece with no moves
          return null
        }
      })
    }
    // clicked square is a valid move
    else if (this.state.validSquares.includes(square)) {
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
        validSquares: [],
        history: chess.history()
      })
    }
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

  // useful: chess.square_color(square) -> 'light' or 'dark'

  highlightMoves = squares => {
    squares.forEach(square => {
      this.highlightSquare(square)
    })
  }
  highlightSquare = square => {
    let mySquare = document.querySelector(`[data-squareid=${square}]`)

    // highlighting on active square
    if (square === this.state.activeSquare) {
      //mySquare.style.boxShadow = "inset 0 0 10px #B5CCF0"
      mySquare.style.outline = "3px dashed rgba(240,240,255,.5)"
      mySquare.style.outlineOffset = "-5px"
    }
    // highlighting on valid moves
    else {
      // enemy pieces
      if (chess.get(mySquare.dataset.squareid) !== null) {
        //mySquare.style.boxShadow = "inset 0 0 10px #FCACAD"
        mySquare.style.outline = "3px dashed rgba(255,240,165,.5)"
        mySquare.style.outlineOffset = "-5px"
      }
      // empty square
      else {
        //mySquare.style.boxShadow = "inset 0 0 10px #ACFCD0"
        mySquare.style.outline = "3px dashed rgba(210,255,225,.5)"
        mySquare.style.outlineOffset = "-5px"
      }

    }
  }
  unhighlightSquares = () => {
    let allSquares = document.querySelectorAll("[data-squareid]")
    allSquares.forEach((square) => {
      //square.style.boxShadow = ""
      square.style.outline = ""
      square.style.outlineOffset = ""
    })
  }

  render() {
    console.log("rr");
    return (
      <div>
        <div>Hello yes this is NEW board</div>

        <div style={{float:"left",marginRight:"10px"}}>
          <Chessboard
            width={500}
            position={this.state.position}
            onSquareClick={this.onSquareClick}
            lightSquareStyle={{backgroundColor:'#BBC',boxShadow:'0 0 20px inset rgba(255,192,203,.75)'}}
            darkSquareStyle={{backgroundColor:'#889',boxShadow:'0 0 20px inset rgba(255,192,203,1)'}}
            showNotation={false}
            onDrop={this.onDrop}
            dropSquareStyle={{
              outline: "3px dashed rgba(255,240,85,.6)",
              outlineOffset: "-5px",
            }}
            boardStyle={{border:'10px solid pink',borderRadius:'10px'}}
            pieces={{
              wK: ({ squareWidth, isDragging }) => (
                <img
                  style={{
                    width: isDragging ? squareWidth * 1.25 : squareWidth,
                    height: isDragging ? squareWidth * 1.25 : squareWidth
                  }}
                  src={'./wK.png'}
                  alt={"white king"}
                />
              ),
              wQ: ({ squareWidth }) => (
                <img
                  style={{width: squareWidth}}
                  src={'./wQ.png'}
                  alt={"white queen"}
                />
              ),
              wR: ({ squareWidth }) => (
                <img
                  style={{width: squareWidth}}
                  src={'./wR.png'}
                  alt={"white rook"}
                />
              ),
              wB: ({ squareWidth }) => (
                <img
                  style={{width: squareWidth}}
                  src={'./wB.png'}
                  alt={"white bishop"}
                />
              ),
              wN: ({ squareWidth }) => (
                <img
                  style={{width: squareWidth}}
                  src={'./wN.png'}
                  alt={"white knight"}
                />
              ),
              wP: ({ squareWidth }) => (
                <img
                  style={{width: squareWidth}}
                  src={'./wP.png'}
                  alt={"white pawn"}
                />
              ),
              bK: ({ squareWidth, isDragging }) => (
                <img
                  style={{
                    width: isDragging ? squareWidth * 1.25 : squareWidth,
                    height: isDragging ? squareWidth * 1.25 : squareWidth
                  }}
                  src={'./bK.png'}
                  alt={"black king"}
                />
              ),
              bQ: ({ squareWidth }) => (
                <img
                  style={{width: squareWidth}}
                  src={'./bQ.png'}
                  alt={"black queen"}
                />
              ),
              bR: ({ squareWidth }) => (
                <img
                  style={{width: squareWidth}}
                  src={'./bR.png'}
                  alt={"black rook"}
                />
              ),
              bB: ({ squareWidth }) => (
                <img
                  style={{width: squareWidth}}
                  src={'./bB.png'}
                  alt={"black bishop"}
                />
              ),
              bN: ({ squareWidth }) => (
                <img
                  style={{width: squareWidth}}
                  src={'./bN.png'}
                  alt={"black knight"}
                />
              ),
              bP: ({ squareWidth }) => (
                <img
                  style={{width: squareWidth}}
                  src={'./bP.png'}
                  alt={"black pawn"}
                />
              )
            }}
          />
        </div>
      </div>
    );
  }
}

export default NewBoard
