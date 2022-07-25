import { ErrorMessage, Field, Form, Formik } from "formik";

import { brandValidationSchema } from "../../../ValidationSchemas/brandValidationSchema";
import axios from "axios";
import css from "./UpdateBrand.module.css";
import { useNavigate } from "react-router-dom";

function UpdateBrand({ id, logo_url, name }) {
  const navigate = useNavigate();
  const updateSubmit = async (values) => {
    const update = await axios.put(`/brands/${id}`, values);
    if( update.data){
      navigate("/admin");
    }
  };
  return (
    <div className={css.continer}>
      <Formik
        initialValues={{
          name: name,
          logo_url: logo_url,
        }}
        validationSchema={brandValidationSchema}
        onSubmit={(values) => {
          updateSubmit(values);
        }}
      >
        {({ errors }) => (
          <Form className={css.formContainer}>
            <div className={css.inputContainer}>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Brand name"
              />
              <ErrorMessage
                name="name"
                component={() => <div className={css.error}>{errors.name}</div>}
              />
            </div>

            <div className={css.inputContainer}>
              <label htmlFor="logo_url">Logo Image</label>
              <Field
                type="text"
                id="logo_url"
                name="logo_url"
                placeholder="Brand url logo"
              />
              <ErrorMessage
                name="logo_url"
                component={() => (
                  <div className={css.error}>{errors.logo_url}</div>
                )}
              />
            </div>

            <div className={css.inputContainer}>
              <button className={css.submit} type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UpdateBrand;
