import { Formik, Form, Field, FormikHelpers } from "formik";
import css from "./RegistrationForm.module.css";

import { register } from "../../redux/auth/operations";
import { useAppDispatch } from "../Contact/Contact";

export default function RegistrationForm() {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: { name: string; email: string; password: string },
    actions: FormikHelpers<{ name: string; email: string; password: string }>
  ) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field
            type="text"
            name="name"
            placeholder="Anna"
            className={css.input}
          />
        </label>
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
            placeholder="*** min 8 symbol ***"
            className={css.input}
          />
        </label>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
