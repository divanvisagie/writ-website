import React from 'react'
import { Link } from 'react-router'

function Login (httpService) {
  return React.createClass({
    login (event) {
      event.preventDefault()

      const username = this.refs.username.value
      const password = this.refs.password.value

      httpService.post('/login', {
        username,
        password
      }).onValue(_ => {
        console.log('should redirect')
      })
    },

    render () {
      const center = {
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'maxWidth': '520px',
        'minWidth': '320px',
        'marginTop': '92px'
      }

      return (
        <div style={center} className='well'>
          <h1>Login</h1>
          <form onSubmit={this.login}>
            <div className='form-group label-static'>
              <label htmlFor='username' className='control-label'>Username</label>
              <input id='username' className='form-control' placeholder='' type='text' ref='username' />
            </div>
            <div className='form-group label-static'>
              <label htmlFor='password' className='control-label'>Password</label>
              <input id='password' className='form-control' placeholder='' type='password' ref='password' />
            </div>
            <button className='btn btn-primary ' type='submit'>Login</button>
            <Link className='btn' to='/register'>Register</Link>
          </form>
        </div>
      )
    }
  })
}

export default Login
