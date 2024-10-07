import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={styles.contactList}>
  {contacts.map(({ id, name, number }) => (
    <li key={id} className={styles.contactItem}>
      <div>
        <div>{name}</div>
        <div>{number}</div>
      </div>
      <button onClick={() => handleDelete(id)} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  ))}
</ul>
  );
};

export default ContactList;