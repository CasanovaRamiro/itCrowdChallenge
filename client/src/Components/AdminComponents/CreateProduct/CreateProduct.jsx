import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { productValidationSchema } from "../../../ValidationSchemas/productCreateValidationSchema";
import axios from "axios";
import useAllBrands from "../../../Hooks/useAllBrands";
import css from "./CreateProduct.module.css";

function CreateProduct() {
  const navigate = useNavigate();
  const brands = useAllBrands();

  const createSubmit = (values) => {
    axios.post(`/products`, values);
    navigate("/admin");
  };
  return (
    <div className={css.container}>
      <h1>Create Product</h1>
      <Formik
        initialValues={{
          name: "",
          image_url: "",
          price: "",
          description: "",
          brandName: "",
        }}
        validationSchema={productValidationSchema}
        onSubmit={(values) => {
          createSubmit(values);
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
                component={() => (
                  <div className={css.error}>{errors.price}</div>
                )}
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
                // className={css.error}
                component={() => (
                  <div className={css.error}>{errors.image_url}</div>
                )}
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
              <label htmlFor="brandName">Brand</label>
              <Field as="select" name="brandName">
                <option value="">Select Brand</option>
                {brands?.map((e) => {
                  return (
                    <option key={e.id} value={e.name}>
                      {e.name}
                    </option>
                  );
                })}
              </Field>
              <ErrorMessage
                name="brandName"
                component={() => (
                  <div className={css.error}>{errors.brandName}</div>
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
{
  /*  */
}
export default CreateProduct;
