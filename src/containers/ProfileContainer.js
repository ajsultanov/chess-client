/* ^ App ^ */
/* this component is a page that shows the profile (cmp), a link to the current lesson (cmp), and a link to the allLessons page */

import React, { Component } from 'react';
import Profile              from '../components/Profile';
import CurrentLesson        from '../components/CurrentLesson';
import { Link }             from 'react-router-dom'
import '../styles.css';

class ProfileContainer extends Component {

  render() {
    return (
      <div style={{width:"99%",border:"3px solid black",borderRadius:"5px"}}>
        <Profile />

        <CurrentLesson />

        <Link to="/lessons/">
          <div style={{padding:"5px",margin:"5px",height:"100px",border:"2px solid blue"}}>
            Link to All Lessons
          </div>
        </Link>
      </div>
    );
  }
}

export default ProfileContainer
