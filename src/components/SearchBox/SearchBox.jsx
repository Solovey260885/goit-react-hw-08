import css from "./SearchBox.module.css";

import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const hundleFilter = (valueInput) => {
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
}
