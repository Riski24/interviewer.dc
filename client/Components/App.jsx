import React, { PropTypes } from 'react'

import { hashHistory, Router, Route, Link, Redirect, withRouter} from 'react-router'
import Login from './Login.jsx'
import Home from './Home.jsx'
import AuthService from '../Services/AuthService.js'


const auth = new AuthService('bIi5wFickS2TiO4JVTmyXIsfsLEJAYor', 'sdm.auth0.com')
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}
const routes = ( <div>
        <Route path="/" component={Home} auth={auth} onEnter={requireAuth} />
          <Route path={peth} component={Home} auth={auth} onEnter={requireAuth} />
          <Route path="/login" component={Login} auth={auth} />
        </div>)


export default class App extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {}
    auth.on('logged_out', (bye) => {

    })
  }




// validate authentication for private routes
  requireAuth (nextState, replace)  {
    console.log('auth', auth);
      if (!auth.loggedIn()) {
      replace({ pathname: '/login' })
     }
  }


// validate authentication for private routes
  // const requireAuth = (nextState, replace) => {
  //   if (!auth.loggedIn()) {
  //     replace({ pathname: '/login' })
  //   }
  // }

  render() {
    return (
      <Router history={hashHistory}>
       <div>
        <Route path="/" component={Home} auth={auth} onEnter={requireAuth} />
          <Route path='/home' component={Home} auth={auth} onEnter={requireAuth} />
          <Route path="/login" component={Login} auth={auth} />
        </div>)
      </Router>
    )
  }
}


