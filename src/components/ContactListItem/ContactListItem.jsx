import React from 'react';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const ContactListItem = ({ contact, deleteContact }) => {
  if (!contact) {
    return null; // or return a placeholder or error message
  }

  const handleDelete = () => {
    deleteContact(contact.id);
    Notify.success(
      `${contact.name} was successfully deleted from your contacts!`,
      { position: 'center-top' }
    );
  };

  return (
    <li className={css.contactListItem}>
      <p>{contact.name}:</p>
      <p className={css.contactAlign}>{contact.phone}</p>
      <button className={css.btnDelete} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func.isRequired,
};

ContactListItem.defaultProps = {
  contact: null, // Ensure a default value if not provided
};

export default ContactListItem;
