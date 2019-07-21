/* ^ ProfileContainer ^ */
/* this component is a link to the current lesson on the home page */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class CurrentLesson extends Component {

  render() {
    return (
      <Link to={`/lessons/${this.props.currentLesson}`}>
        <div style={{margin:"5px",height:"100px", border:"2px solid green"}}>
          Current Lesson Linkie
        </div>
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentLesson: state.currentLesson
  }
}

export default connect(mapStateToProps)(CurrentLesson)
