/* ^ ProfileContainer ^ */
/* this component render the user profile on the home page */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import '../styles.css';

class Profile extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {

    const name = this.props.currentUser ? this.props.currentUser.username : "not found"
    const xp = this.props.currentUser ? this.props.currentUser.xp : "not found"

    return (
      <div style={{padding:"5px",margin:"5px",height:"100px",border:"2px solid red",lineHeight:"10px"}}>
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
