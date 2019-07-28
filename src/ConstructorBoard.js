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

  enterFen = event => {
    event.preventDefault()
    let fen = event.target.value
    if (chess.validate_fen(fen)) {
      chess.load(fen)
      this.setState({
        bool: !this.state.bool
      })
    }
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
        <button style={{width:'250px',margin:'10px'}} onClick={() => this.print()}>log</button><br/>
        <label style={{fontSize:'12px'}} for="fen">enter fen string here ></label><input style={{width:'300px',margin:'10px'}} type="text" id="fen" name="fen" size="10" onChange={this.enterFen}/>
      </div>
    )
  }

}

export default ConstructorBoard
