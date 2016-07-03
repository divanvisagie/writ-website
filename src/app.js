import React from 'react'
import { render } from 'react-dom'
import ContactList from './components/contact-list/contact-list'
import Login from './components/login/login'
import { Router, Route, Link, browserHistory } from 'react-router'
import HttpService from './services/http-service/http-service'

const httpService = new HttpService()
let login = Login(httpService)

const App = React.createClass({
  render () {
    return (
      <div>
        <h1>App page</h1>
        <Link to='/login'>Login</Link>
        <Link to='/contact-list'>ContactList</Link>
        {this.props.children}
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='login' component={login} />
      <Route path='contact-list' component={ContactList} />
    </Route>
  </Router>
), document.getElementById('app'))
