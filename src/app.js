import React from 'react'
import ReactDOM from 'react-dom'
import ContactsList from './contacts-list'

let contacts = [{
  name: 'John',
  phone: '555 123 5555'
}, {
  name: 'Mary',
  phone: '555 456 5555'
}]

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Contacts List</h1>
        <ContactsList contacts={this.props.contacts} />
      </div>
    )
  }

}

ReactDOM.render(<App contacts={contacts} />, document.getElementById('app'))
