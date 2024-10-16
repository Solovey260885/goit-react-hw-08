import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch, TypedUseSelectorHook } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import css from "./Contact.module.css";
import React from "react";
import { Contact as ContactType } from "../../redux/contacts/slice";
import { AppDispatch, RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface ContactProps {
  data: ContactType;
}

const Contact: React.FC<ContactProps> = ({ data: { name, number, id } }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    if (id !== undefined && id !== null) {
      dispatch(deleteContact(id));
    } else {
      console.error("ID is undefined or null");
    }
  };

  return (
    <div className={css.contact}>
      <div className={css.contactText}>
        <span>
          <FaUser className={css.contactIcon} />
          {name}
        </span>
        <span>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </span>
      </div>
      <button onClick={handleDelete} className={css.btn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
