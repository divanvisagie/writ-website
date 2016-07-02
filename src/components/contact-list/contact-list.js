import React from 'react'
import Contact from '../contact/contact'
import HttpService from '../../services/http-service/http-service'

class ContactList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      contacts: props.contacts
    }

    const httpService = HttpService()
    console.log('getting')
    httpService.get('/ping')
      .map(word => `response is ${word}`)
      .onValue(word => console.log(word))
  }

  updateSearch (event) {
    this.setState({search: event.target.value})
  }

  addContact (event) {
    event.preventDefault()

    let name = this.refs.name.value
    let phone = this.refs.phone.value
    this.setState({
      contacts: this.state.contacts.concat({
        name,
        phone
      })
    })
    this.refs.name.value = ''
    this.refs.phone.value = ''
  }

  render () {
    let filteredContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase()
             .indexOf(this.state.search.toLowerCase()) !== -1
    })

    return (
      <div>
        <input type='text'
          placeholder='Search'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <hr />
        <form onSubmit={this.addContact.bind(this)}>
          <input placeholder='Name' type='text' ref='name' />
          <input placeholder='Phone' type='text' ref='phone' />
          <button type='submit'>Add new contact</button>
        </form>

        <ul>
          {
            filteredContacts.map(contact => {
              return <Contact key={contact.name} contact={contact} />
            })
          }
        </ul>
      </div>
    )
  }
}

export default ContactList
