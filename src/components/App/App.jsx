import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

import css from "./App.module.css";

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
