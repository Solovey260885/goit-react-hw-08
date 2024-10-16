import css from "./SearchBox.module.css";

import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filters/slice";
import React from "react";

const SearchBox: React.FC = () => {
  const dispatch = useDispatch();

  const hundleFilter = (valueInput: string) => {
    dispatch(setStatusFilter(valueInput));
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Find contacts by name or number!</p>
      <input
        type="text"
        placeholder="Anna"
        onChange={(event) => {
          hundleFilter(event.target.value);
        }}
        className={css.input}
      />
    </div>
  );
};
export default SearchBox;
