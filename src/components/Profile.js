/* ^ ProfileContainer ^ */
/* this component render the user profile on the home page */

import React, { Component } from 'react';

class Profile extends Component {

  ok = "https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"

  styles = {
    padding:"5px",
    margin:"5px",
    height:"200px",
    color:"white",
    border:"2px solid red",
    lineHeight: "10px",
    backgroundImage:`url(${this.ok})`,
    backgroundSize:"cover",
    backgroundPosition:"50% 70%",
  }

  render() {
    return (
      <div style={this.styles}>
        <h3>User Profile</h3>
        <h1>username: {this.props.username.toUpperCase()}</h1>
        <p>xp: {this.props.xp}</p>
      </div>
    );
  }
}

export default Profile
