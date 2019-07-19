import React, { Component } from 'react';
import { Link }             from "react-router-dom";
import { connect }          from 'react-redux';
import { logout }           from '../actions/users'

class Menu extends Component {

  render() {

    return (
      <div style={{backgroundColor:"#59D",width:"95%",height:"40px",padding:"10px"}}>

        <Link to="/home/">
          Home
        </Link>

        {this.props.currentUser ?
          <span style={{float:"right"}}>
            <span>
              {this.props.currentUser.username}
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
