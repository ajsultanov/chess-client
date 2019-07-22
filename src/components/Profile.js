/* ^ ProfileContainer ^ */
/* this component render the user profile on the home page */

import React, { Component } from 'react';
import { connect }          from 'react-redux';

class Profile extends Component {

  styles = {
    padding:"5px",
    margin:"5px",
    height:"100px",
    border:"2px solid red",
    lineHeight: "10px",
  }

  render() {

    const name = this.props.currentUser ? this.props.currentUser.username : "not found"
    const xp = this.props.currentUser ? this.props.currentUser.xp : "not found"

    return (
      <div style={this.styles}>
        <h3>User Profile</h3>
        <p>username: {name}</p>
        <p>xp: {xp}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser  // object
  }
}

export default connect(mapStateToProps)(Profile)
