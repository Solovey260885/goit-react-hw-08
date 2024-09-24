import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
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
}
