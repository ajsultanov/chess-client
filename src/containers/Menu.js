/* ^ App ^ */
/* this component contains the header and navigation links */

import React, { Component } from 'react';
import { Link }             from "react-router-dom";
import { connect }          from 'react-redux';
import { logout }           from '../actions'

class Menu extends Component {

  styles = {
    backgroundColor:"#59D",
    width:"98%",
    height:"40px",
    padding:"10px",
  }

  render() {
    return (
      <div style={this.styles}>

        <Link to="/home/">
          Home
        </Link>

        {this.props.currentUser ?
          <span style={{float:"right"}}>
            <span>
              user: {this.props.currentUser.username} (replace me with an img)
            </span>
            <span> | </span>
            <Link to="/logout/"
            onClick={this.props.logout}>
              Log Out
            </Link>
          </span>

          :

          <span style={{float:"right"}}>
            <Link to="/signup/">
              Sign Up
            </Link>
            <span> | </span>
            <Link to="/login/">
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
    currentLesson: state.currentLesson
  }
}


export default connect(mapStateToProps, { logout })(Menu)
