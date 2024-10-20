import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './FilterContacts/FilterContacts';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };
  handleAddContact = contactData => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contactData.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contactData }, ...prevState.contacts],
    }));
  };

  getContact() {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const visibleContacts = this.getContact();
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.handleAddContact} />
        <h2>Contacts</h2>
        {this.state.contacts.length > 0 ? (
          <FilterContacts
            value={this.state.filter}
            filter={this.onChangeFilter}
          />
        ) : (
          <p>Your Phonebook is empty! Add contact!</p>
        )}

        {this.state.contacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onDelete={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
