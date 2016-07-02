import React from 'react'
import Contact from './contact'

class ContactsList extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  render() {
    let filteredContacts = this.props.contacts.filter( contact => {
      return contact.name.toLowerCase()
                    .indexOf(this.state.search.toLowerCase()) !== -1
    })

    return (
      <div>
        <ul>
          {
            filteredContacts.map( contact => {
                return <Contact key={contact.name} contact={contact}/>
            })
          }
        </ul>
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
      </div>
    )
  }
}

export default ContactsList
