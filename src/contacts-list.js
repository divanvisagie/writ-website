import React from 'react'
import Contact from './contact'

class ContactsList extends React.Component {
  constructor() {
    super()
    this.state = {
      search: 'React'
    }
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.contacts.map( contact => {
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
