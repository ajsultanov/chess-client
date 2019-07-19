import React               from 'react'
import { connect }         from 'react-redux'
import { Route, Redirect } from 'react-router'

const PrivateRoute = ({component, ...rest}) => (
  <Route {...rest} render={(props) => (
    this.props.currentUser ? (
      React.createElement(component, props)
    ) : (
      <Redirect to='login' />
    )
  )} />
)

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(PrivateRoute)
