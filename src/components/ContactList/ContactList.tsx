import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";

import css from "./Contactlist.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import React from "react";

const ContactList: React.FC = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
