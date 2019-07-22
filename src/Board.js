import React, { Component } from 'react';
import Chess                from "chess.js";
import Chessboard           from "chessboardjsx";

let chess = new Chess();

class Board extends Component {

  state = {
    fen: "start",
    square: "",
    history: [],
  }





  render() {
    console.log(chess);
    return (
      <div>
        <div>This is da board</div>
        <Chessboard position={this.state.fen}/>
      </div>
    );
  }
}

export default Board
