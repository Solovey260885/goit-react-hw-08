import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { useAppDispatch } from "../Contact/Contact";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const handleSubmit = (
    values: { email: string; password: string },
    actions: any
  ) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field
            type="email"
            name="email"
            placeholder="abcdef@ghi.jkl"
            className={css.input}
          />
        </label>
        <label className={css.label}>
          Password
          <Field
            type="password"
            name="password"
            placeholder="**********"
            className={css.input}
          />
        </label>
        <button type="submit" className={css.btn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
