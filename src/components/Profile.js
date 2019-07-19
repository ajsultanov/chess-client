import React, { Component } from 'react';
import { connect }          from 'react-redux';

class Profile extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div style={{margin:"5px",height:"100px",border:"2px solid red"}}>
        Here's a big ol profile yes hello<br/>
        P is for Profile<br/>
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
