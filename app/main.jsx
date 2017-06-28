'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import FrontPage from './components/FrontPage'
import LinkAccounts from './components/LinkAccounts'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      {/*<nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>*/}
      <Navbar />
      {/* Render our children (whatever the router gives us) */}
      {children}
      <Sidebar />
      <LinkAccounts />
    </div>
  )

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/home" />
        <Route path="/link" component={LinkAccounts} />
        <Route path='/home' component={FrontPage} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
