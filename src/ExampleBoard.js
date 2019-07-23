import React, { Component } from 'react';
import Chessboard           from "chessboardjsx";

class ExampleBoard extends Component {

  state = {
    fen: "start",
    history: [],
  }

  render() {
    //console.log("current position should be: ", this.props.positions[this.props.index]);

    return (
      <div>
        <div>Hello yes this is board</div>

        <div style={{float:"left",marginRight:"10px"}}>
          <Chessboard
            width={200}
            position={this.props.positions[this.props.index]}
          />
        </div>
      </div>
    );
  }
}

export default ExampleBoard
