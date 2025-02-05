import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsOps";
import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[A-Za-zА-Яа-яЁё\s]+$/,
      "Ім'я може містити тільки літери та пробіли"
    )
    .min(3, "Ім'я має бути довшим ніж 3 літери")
    .required("Впишіть ім'я"),
  number: Yup.string()
    .matches(/^[\d-]+$/, "Номер телефону може містити тільки цифри та дефіси")
    .required("Впишіть номер телефону"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className={s.form}>
            <label className={s.label}>
              <span>Name</span>
              <Field
                name="name"
                className={s.input}
                placeholder="Enter your name"
              />
              <ErrorMessage name="name" component="div" className={s.error} />
            </label>
            <label className={s.label}>
              <span>Number</span>
              <Field
                name="number"
                className={s.input}
                placeholder="Enter your number"
              />
              <ErrorMessage name="number" component="div" className={s.error} />
            </label>
            <button
              type="submit"
              className={s.button}
              disabled={!isValid || !dirty}
            >
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
