import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
