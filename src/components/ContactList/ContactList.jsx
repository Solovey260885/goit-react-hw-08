import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";

import css from "./Contactlist.module.css";

export default function ContactList() {
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
}
