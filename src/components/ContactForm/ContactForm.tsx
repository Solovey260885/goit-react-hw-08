import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "../ContactForm/ContactForm.module.css";

import { addContact } from "../../redux/contacts/operations";
import { useAppDispatch } from "../Contact/Contact";

const phoneRegExp =
  /^(\+?\d{1,4}[\s-]?)?\(?\d{1,4}?\)?[\s-]?\d{1,4}[\s-]?\d{1,9}$/;

const initialValues = {
  name: "",
  number: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Incorrect phone number")
    .required("Required"),
});

const ContactForm: React.FC = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: { name: string; number: string },
    actions: FormikHelpers<{ name: string; number: string }>
  ) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId} className={css.inputLable}>
          Name
        </label>
        <Field
          type="text"
          name="name"
          className={css.input}
          placeholder="Anna"
        />
        <ErrorMessage
          name="name"
          component="div"
          className={css.messageError}
        />

        <label htmlFor={numberFieldId} className={css.inputLable}>
          Number
        </label>
        <Field
          type="text"
          name="number"
          className={css.input}
          placeholder="0123456789"
        />
        <ErrorMessage
          name="number"
          component="div"
          className={css.messageError}
        />

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
