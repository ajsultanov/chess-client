/* ^ ProfileContainer ^ */
/* this component is a link to the current lesson on the home page */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class CurrentLesson extends Component {

  ok = "https://images.unsplash.com/photo-1529699310859-b163e33e4556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1122&q=80"

  styles = {
    padding:"5px",
    margin:"5px",
    height:"100px",
    border:"2px solid green",
    backgroundImage:`url(${this.ok})`,
    backgroundSize:"100%",
    backgroundPosition:"25% 60%",
  }

  render() {
    return (
      <Link to={`/lessons/${this.props.currentLesson}`}>
        <div style={this.styles}>
          Link to Current Lesson
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
