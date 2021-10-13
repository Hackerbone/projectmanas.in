import { Field, Formik, Form } from "formik";
import * as yup from "yup";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

const validationSchema = yup.object().shape({
  name: yup.string().required("*Required"),
  subject: yup.string().required("*Required"),
  message: yup.string().required("*Required"),
  email: yup.string().email("Invalid email").required("*Required"),
});

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="form">
        <div className="contact-header">
          CONTACT <b>US</b>
        </div>
        <Formik
          initialValues={{
            name: "",
            subject: "",
            email: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched, values }) => {
            console.log(errors, touched, values);
            return (
              <Form>
                <div
                  className={`input-container error-${
                    errors.name && touched.name ? "shown" : "hidden"
                  }`}
                >
                  <Field name="name" type="text" />
                  {errors.name && touched.name ? (
                    <div className="error">{errors.name}</div>
                  ) : null}
                  <label className={values.name && "filled"}>NAME*</label>
                </div>

                <div
                  className={`input-container error-${
                    errors.email && touched.email ? "shown" : "hidden"
                  }`}
                >
                  <Field type="email" name="email" />
                  {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
                  <label className={values.email && "filled"}>EMAIL</label>
                </div>

                <div
                  className={`input-container error-${
                    errors.subject && touched.subject ? "shown" : "hidden"
                  }`}
                >
                  <Field type="text" name="subject" />
                  {errors.subject && touched.subject ? (
                    <div className="error">{errors.subject}</div>
                  ) : null}
                  <label className={values.subject && "filled"}>SUBJECT</label>
                  {errors.subject && touched.subject}
                </div>

                <div
                  name="message"
                  className={`input-container error-${
                    errors.message && touched.message ? "shown" : "hidden"
                  }`}
                >
                  <Field type="text" as="textarea" name="message" />
                  {errors.message && touched.message ? (
                    <div className="message-error">{errors.message}</div>
                  ) : null}
                  <label className={values.message && "filled"}>MESSAGE</label>
                </div>
                <button className="btn btn-dark mt-3" type="submit">
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
