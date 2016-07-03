import React from 'react'

function Login (httpService) {
  return React.createClass({
    login (event) {
      event.preventDefault()

      const username = this.refs.username.value
      const password = this.refs.password.value

      httpService.post('/login', {
        username,
        password
      })
    },

    render () {
      return (
        <div>
          <h1>Login</h1>
          <form onSubmit={this.login}>
            <div className='form-group label-static'>
              <label className='control-label'>Username</label>
              <input className='form-control' placeholder='Username' type='text' ref='username' />
            </div>
            <input placeholder='Password' type='password' ref='password' />
            <button className='btn btn-primary' type='submit'>Add new contact</button>
          </form>
        </div>
      )
    }
  })
}

export default Login
