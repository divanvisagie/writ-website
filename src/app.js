import React from 'react'
import ReactDOM from 'react-dom'
import ContactsList from './contacts-list'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts List</h1>
        <ContactsList/>
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('app'))
