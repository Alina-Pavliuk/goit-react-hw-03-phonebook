import React from 'react';
import styles from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from "prop-types";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={styles.contactsList}>
      {contacts.map(contact =>
        <li key={contact.id} className={styles.contactItem}>
          <ContactItem {...contact} removeContact={removeContact} />
        </li>
      )}
    </ul >
  )
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired
}