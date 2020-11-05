import React, { Component } from 'react';
import styles from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter'


class App extends Component {
  state = {
    contacts: [
      // { name: 'Rosie Simpson', number: '459-12-56', id: 'id-1', },
      // { name: 'Hermione Kline', number: '443-89-12', id: 'id-2', },
      // { name: 'Eden Clements', number: '645-17-79', id: 'id-3', },
      // { name: 'Annie Copeland', number: '227-91-26', id: 'id-4', },
    ],
    filter: ''
  }

  componentDidMount() {
    const persistedContacts = localStorage.getItem('contacts');
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      })
    }
  }
  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   }
  // }

  addContact = (contactObj) => {
    if (this.state.contacts.some(el => el.name === contactObj.name)) {
      alert(`${contactObj.name} is already contacts`);
      return;
    }
    this.setState((prev) => ({
      contacts: [...prev.contacts, contactObj]
    }));

  };

  removeContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter(el => el.id !== id)
    }));
  }

  filterHandler = (e) => {
    this.setState(() => ({
      filter: e.target.value
    }));
  }

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.phonebookTitle}>Phonebook</h2>

        <ContactForm contacts={contacts} addContact={this.addContact} />
        <h3 className={styles.contactsTitle}>Contacts</h3>

        <Filter filter={filter} filterHandler={this.filterHandler} />
        <ContactList contacts={filteredContacts} removeContact={this.removeContact} />
      </div>
    );
  }
}

export default App;
