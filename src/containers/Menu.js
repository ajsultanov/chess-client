/* ^ App ^ */
/* this component contains the header and navigation links */

import React, { Component } from 'react';
import { Link }             from "react-router-dom";
import { connect }          from 'react-redux';
import { logout }           from '../actions'

class Menu extends Component {

  styles = {
    backgroundColor:"#6BF",
    width:"800px",
    height:"40px",
    padding:"10px",
  }

  render() {
    return (
      <div style={this.styles}>

        <Link to= {
          this.props.currentUser
        ?
          "/home"
        :
          "/"
        }>
          <h2
            style={{display:"inline", textDecoration:"none"}}
            className="font-effect-shadow-multiple">
            Rookie Chess
          </h2>
        </Link>

        {
          this.props.currentUser
        ?
          <span style={{float:"right"}}>
            <span>
              user: {this.props.currentUser.username}
            </span>
            <span> | </span>
            <Link to="/lessons">
              Lessons
            </Link>
            <span> | </span>
            <Link to="/play">
              Play!
            </Link>
            <span> | </span>
            <Link to="/login"
            onClick={this.props.logout}>
              Log Out
            </Link>
          </span>
        :
          <span style={{float:"right"}}>
            <Link to="/constructor">
              Constructor (take this out)
            </Link>
            <span> | </span>
            <Link to="/board">
              Play! (take this out)
            </Link>
            <span> | </span>
            <Link to="/signup">
              Sign Up
            </Link>
            <span> | </span>
            <Link to="/login">
              Log In
            </Link>
          </span>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  }
}


export default connect(mapStateToProps, { logout })(Menu)
