import React, { Component } from 'react';
import Chess                from "chess.js";
import Chessboard           from "chessboardjsx";

let chess = new Chess();

class ConstructorBoard extends Component {

  state = {
    bool: true,
  }

  onDrop = ({ sourceSquare, targetSquare, piece }) => {
    if (sourceSquare) {
      if (chess.put({ type: piece[1], color: piece[0] }, targetSquare)) {
      }
      chess.remove(sourceSquare)
      this.setState({
        bool: !this.state.bool
      })
    }
  }

  onSquareRightClick = (square) => {
    chess.remove(square)
    this.setState({
      bool: !this.state.bool
    })
  }

  clear = () => {
    chess.clear()
    console.log('cleared');
    this.setState({
      bool: !this.state.bool
    })
  }

  print = () => {
    console.log(chess.fen());
  }

  render(){
    return (
      <div>
        <Chessboard
          size={500}
          position={chess.fen()}
          onSquareRightClick={this.onSquareRightClick}
          onDrop={this.onDrop}
        />
        <button style={{width:'250px',margin:'10px'}} onClick={() => this.clear()}>clear</button>
        <button style={{width:'250px',margin:'10px'}} onClick={() => this.print()}>log</button>
      </div>
    )
  }

}

export default ConstructorBoard
