import React from 'react'
import Contact from './contact'

class ContactsList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.contacts.map( contact => {
              return <Contact key={contact.name} contact={contact}/>
          })
        }
      </ul>
    )
  }
}

export default ContactsList
