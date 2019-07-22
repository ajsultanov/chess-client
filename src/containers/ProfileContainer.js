/* ^ App ^ */
/* this component is a page that shows the profile (cmp), a link to the current lesson (cmp), and a link to the allLessons page */

import React, { Component } from 'react';
import Profile              from '../components/Profile';
import CurrentLesson        from '../components/CurrentLesson';
import { Link }             from 'react-router-dom'

class ProfileContainer extends Component {

  styles = {
    padding:"5px",
    margin:"5px",
    width:"98%",
    border:"3px solid sienna",
    borderRadius:"5px",
  }

  render() {
    return (
      <div style={this.styles}>
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
