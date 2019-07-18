import React, { Component } from 'react';
import { connect }          from 'react-redux';


class Profile extends Component {

  render() {
    return (
      <div>
        Here's a big ol profile
        <p>p{}</p>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Profile)
