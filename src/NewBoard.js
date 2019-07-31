import React, { Component } from 'react';
import Chess                from "chess.js";
import Chessboard           from "chessboardjsx";
import styled               from "styled-components";

let chess = new Chess();

const StyledContent = styled.div`
/* border: 1px solid blue; */
  background-color: honeydew;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  self-align: center;
  width: 100%;
`;

const BoardContainer = styled.div`
/* border: 1px solid; */
  background-color: wheat;
  display: flex;
  margin: 1em;
`;

const MovesContainer = styled.div`
/* border: 1px solid; */
  background-color: papayawhip;
  margin: .5em .5em .5em 1em ;
  display: flex;
  width: 12em;
  line-height: 2em;

  /* ???? */
  background-size: cover;
  max-height: inherit;
  overflow: auto;
`;
const Moves = styled.div`
/* border: 1px solid red; */
  background-color: papayawhip;
  margin: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 6em;
  padding: .25em;
  line-height: 2em;
`;
const Move = styled.p`
/* border: 1px solid; */
  margin: 0;
  text-align: left;
`;

const Button = styled.button`
  /* border: 5px dashed orange; */
  margin: 1em;
  padding: 0 2em;
  font-size: 1em;
  font-family: BioRhyme;
  display: inline;
`;

class NewBoard extends Component {

  state = {
    position: "start",
    activeSquare: "",
    validSquares: [],
    history: [],
  }

  // square = the square thats been clicked on
  onSquareClick = square => {

    if (square === this.state.activeSquare) {
      this.unhighlightSquares()
      this.setState({
        activeSquare: "",
      })
      return null
    }

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
    console.log(chess.square_color(square));
    let mySquare = document.querySelector(`[data-squareid=${square}]`)
    // highlighting on active square
    if (square === this.state.activeSquare) {
      //mySquare.style.boxShadow = "inset 0 0 10px #B5CCF0"
      mySquare.style.outline = "3px solid rgba(255,240,165,1)"
      mySquare.style.outlineOffset = "-5px"
    }
    // highlighting on valid moves
    else {
      // enemy pieces
      if (mySquare && chess.get(mySquare.dataset.squareid) !== null) {
        // mySquare.style.boxShadow = "inset 0 0 10px #FCACAD"
        if (chess.square_color(square) === "dark") {
          mySquare.style.outline = "3px dashed rgba(224,115,85,1)"
          mySquare.style.outlineOffset = "-5px"
        }
        else {
          mySquare.style.outline = "3px dashed rgba(240,130,100,1)"
          mySquare.style.outlineOffset = "-5px"
        }
      }
      // empty square
      else {
        // mySquare.style.boxShadow = "inset 0 0 10px #ACFCD0"
        if (chess.square_color(square) === "dark") {
          mySquare.style.outline = "3px dashed rgba(195,240,210,1)"
          mySquare.style.outlineOffset = "-5px"
        }
        else {
          mySquare.style.outline = "3px dashed rgba(210,255,225,1)"
          mySquare.style.outlineOffset = "-5px"
        }
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
    return (
      <StyledContent>
        <BoardContainer>
          <Chessboard
            width={600}
            position={this.state.position}
            onSquareClick={this.onSquareClick}
            lightSquareStyle={{backgroundColor:'#A8C',boxShadow:'0 0 2px 4px inset rgba(255,192,245,1)'}}
            darkSquareStyle={{backgroundColor:'#86A',boxShadow:'0 0 2px 4px inset rgba(255,192,245,.8)'}}
            showNotation={false}
            onDrop={this.onDrop}
            dropSquareStyle={{
              outline: "3px dashed rgba(255,240,165,1)",
              outlineOffset: "-5px",
            }}
            boardStyle={{border:'10px solid rgb(255,192,245)',borderRadius:'10px'}}
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
          <MovesContainer>
            <Moves>
              <u>White</u>
              {
                this.state.history.map((move, i) => {
                  let j = Math.floor(i / 2) + 1

                  if (i % 2 === 0) {
                    return <Move key={i}>{j + "." + move}</Move>
                  }
                  else { return null }
                })
              }
            </Moves>
            <Moves>
              <u>Black</u>
              {
                this.state.history.map((move, i) => {

                  if (i % 2 !== 0) {
                    return <Move key={i}>{move}</Move>
                  }
                  else { return null }
                })
              }
            </Moves>
          </MovesContainer>
        </BoardContainer>
        <div>
          <Button>Import Position</Button>
          <Button>Export Position</Button>
        </div>
      </StyledContent>
    );
  }
}

export default NewBoard
