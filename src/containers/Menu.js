import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Menu extends Component {

  render() {
    return (
      <div style={{backgroundColor:"#59D",width:"95%",height:"40px",padding:"10px"}}>

        <Link to="/">
          Menu
        </Link>

        <span style={{float:"right"}}>
          <Link to="/signup/">
            Sign Up
          </Link>
          <span> | </span>
          <Link to="/login/">
            Log In
          </Link>
        </span>

      </div>
    );
  }

}
