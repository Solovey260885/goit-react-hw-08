import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
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
