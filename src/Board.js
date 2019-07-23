import React, { Component } from 'react';
import Chess                from "chess.js";
import Chessboard           from "chessboardjsx";

let chess = new Chess();

class Board extends Component {

  state = {
    fen: "start",
    selectedSquare: "",
    highlightedSquare: "",
    validSquares: [],
    history: [],
  }

  componentDidMount() {
    this.setState({
      fen: this.props.positions[0]
    })
    console.log(this.props.positions);
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

    /* for current piece and valid move highlighting */
    if (chess.moves({square: square}).length > 0) {  // if there are valid moves
      console.log("get ye moves here, valid moves!!")

      this.setState({
        highlightedSquare: square,
        validSquares: chess.moves({square: square}).map(move => {
          return move.match(/[a-h][1-8]/)           // pull the square out of the move
        })
      })
    }
    else {
      this.setState(
        {
          highlightedSquare: "",
          validSquares: []
        }
      )
    }

    /* creates a move object */
    let move = chess.move({
      from: this.state.selectedSquare,
      to: square,
    })

    /* if move invalid */
    if (move === null) return;

    /* if move valid, updates state */
    this.setState({
      fen: chess.fen(),
      history: chess.history(),
      selectedSquare: ""
    })
  }

  lightSquares = [0,  2,  4,  6,  9,  11, 13, 15,
                  16, 18, 20, 22, 25, 27, 29, 31,
                  32, 34, 36, 38, 41, 43, 45, 47,
                  48, 50, 52, 54, 57, 59, 61, 63]

  resetBoard() {
    let allSquares = document.querySelectorAll("[data-squareid]")
    allSquares.forEach((square, i) => {
      square.style.boxShadow = ""
      if (this.lightSquares.includes(i)) {
        square.style.backgroundColor = "rgb(240, 217, 181)"
      } else {
        square.style.backgroundColor = "rgb(181, 136, 99)"
      }
    })
  }

  highlightSquare = square => {
    let mySquare = document.querySelector(`[data-squareid=${square}]`)
    if (mySquare) {
      let id = mySquare.dataset.squareid

      if (mySquare.dataset.testid === "white-square") {
        /* light squares */
        if (chess.get(id) && !(id === this.state.selectedSquare)) {
          /* attack */
          mySquare.style.backgroundColor = "#f60"
          mySquare.style.boxShadow = "inset 0 0 20px #F0D9B5"
        } else {
          mySquare.style.backgroundColor = "#ACFCD0"
          mySquare.style.boxShadow = "inset 0 0 20px #F0D9B5"
        }
      }
      else {
        /* dark squares */
        if (chess.get(id) && !(id === this.state.selectedSquare)) {
          /* attack */
          mySquare.style.backgroundColor = "#c30"
          mySquare.style.boxShadow = "inset 0 0 20px #B58863"
        } else {
          mySquare.style.backgroundColor = "#6AC784"
          mySquare.style.boxShadow = "inset 0 0 20px #B58863"
        }
      }
      /* selected square */
      if (id === this.state.selectedSquare) {
        mySquare.style.backgroundColor = "#FFDD22"
      }
    }
  }

  render() {

    if (this.state.highlightedSquare) {
      this.resetBoard()
      this.highlightSquare(this.state.highlightedSquare)
    }
    if (this.state.validSquares) {
      this.state.validSquares.forEach(square => {
        this.highlightSquare(square)
      })
    }

    return (
      <div>
        <div>This is da board</div>

        <div style={{float:"left",marginRight:"10px"}}>
          <Chessboard
            width={400}
            position={this.state.fen}
            onSquareClick={this.onSquareClick}
          />
        </div>

        <p>
          {
            this.state.history.map((move, i) => {
              let j = Math.floor(i / 2) + 1

              if (i % 2 === 0) {
                return <span key={i}>{j + ". " + move}</span>
              } else {
                return <span key={i}>{"\v\v" + move}<br/></span>
              }
            })
          }
        </p>

      </div>
    );
  }
}

export default Board
