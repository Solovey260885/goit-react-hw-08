import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { fetchContacts } from "../../redux/contactsOps";

import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { selectError, selectLoading } from "../../redux/contactsSlice";

export default function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

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
}
