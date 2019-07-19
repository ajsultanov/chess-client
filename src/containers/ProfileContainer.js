import React, { Component } from 'react';
import Profile              from '../components/Profile';
import CurrentLesson        from '../components/CurrentLesson';
import { Link }             from 'react-router-dom'

class ProfileContainer extends Component {

  render() {
    return (
      <div style={{width:"99%",border:"3px solid black",borderRadius:"5px"}}>
        <Profile />
        <CurrentLesson />
        <Link to="/lessons/">
          <div style={{margin:"5px",height:"100px",border:"2px solid blue"}}>
            all lessons
          </div>
        </Link>
      </div>
    );
  }
}

export default ProfileContainer
