import React, { Component } from 'react';
import Chessboard           from "chessboardjsx";

class ExampleBoard extends Component {

  render() {
    console.log(this.props);
    return (
      <div style={{textAlign:'center'}}>
        <Chessboard
          width={420}
          position={this.props.positions[this.props.index]}
          transitionDuration={200}
          allowDrag={() => false}
          lightSquareStyle={{backgroundColor:'lightblue'}}
          darkSquareStyle={{backgroundColor:'deepskyblue'}}
          boardStyle={{border:'5px solid lightblue', borderRadius:'5px'}}
        />
        <p style={{color:'lightcoral'}}>use the arrows to advance</p>
      </div>
    );
  }
}

export default ExampleBoard
