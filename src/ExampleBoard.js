import React, { Component } from 'react';
import Chessboard           from "chessboardjsx";

class ExampleBoard extends Component {

  state = {
    fen: "start",
    history: [],
  }

  render() {

    return (
      <div>
        <div style={{float:"left",marginRight:"10px"}}>
          <Chessboard
            width={360}
            position={this.props.positions[this.props.index]}
            transitionDuration={200}
            allowDrag={() => false}
            boardStyle={{border:'5px solid lightblue',borderRadius:'5px'}}
          />
        </div>
      </div>
    );
  }
}

export default ExampleBoard
