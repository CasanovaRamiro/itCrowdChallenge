import { useParams, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { productValidationSchema } from "../../../ValidationSchemas/productUpdateValidationSchema";
import axios from "axios";
import css from "./UpdateProduct.module.css";

function UpdateForm({ productName, price, description, image_url }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const updateSubmit = async (values) => {
    await axios.put(`/products/${id}`, values);
    navigate("/admin");
  };
  return (
    <Formik
      initialValues={{
        name: productName,
        image_url: image_url,
        price: price,
        description: description,
      }}
      validationSchema={productValidationSchema}
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
              placeholder="Product name"
            />
            <ErrorMessage
              name="name"
              component={() => <div className={css.error}>{errors.name}</div>}
            />
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="price">Price</label>
            <Field
              type="number"
              id="price"
              name="price"
              placeholder="Product price"
            />
            <ErrorMessage
              name="price"
              component={() => <div className={css.error}>{errors.price}</div>}
            />
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="image_url">Image</label>
            <Field
              type="text"
              id="image_url"
              name="image_url"
              placeholder="Product url image"
            />
            <ErrorMessage
              name="image_url"
              component={() => <div className={css.error}>{errors.image_url}</div>}
            />
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="description">Description</label>
            <Field
              as="textarea"
              id="description"
              name="description"
              placeholder="Product description"
            />
            <ErrorMessage
              name="description"
              component={() => (
                <div className={css.error}>{errors.description}</div>
              )}
            />
          </div>
          <div className={css.inputContainer}>
            <button  className={css.submit} type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default UpdateForm;
