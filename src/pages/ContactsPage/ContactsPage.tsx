import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

import { fetchContacts } from "../../redux/contacts/operations";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

import css from "./ContactsPage.module.css";
import { useAppDispatch } from "../../components/Contact/Contact";

const ContactsPage: React.FC = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.App}>
      <h1 className={css.AppTitle}>Phonebook</h1>
      {loading && <Loader>Loading message</Loader>}
      {error && <Error>Error message</Error>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
