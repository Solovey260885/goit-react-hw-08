import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import React from "react";
import { useAppDispatch } from "../Contact/Contact";

const UserMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button
        className={css.btn}
        onClick={() => dispatch(logOut())}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
