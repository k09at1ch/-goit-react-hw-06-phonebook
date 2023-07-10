import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/slice';

function ContactList() {
  const contacts = useSelector(state => state.contacts.data);
  const searchTerm = useSelector(state => state.contacts.searchTerm);
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact({ id: contactId }));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul className="list">
      {filteredContacts.map(contact => (
        <li key={contact.id} className="listItem">
          {contact.name}
          <span> </span>
          {contact.number}
          <button onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
