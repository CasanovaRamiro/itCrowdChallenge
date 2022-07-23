import React from "react";
import { useNavigate } from "react-router-dom";

import { ErrorMessage, Field, Form, Formik } from "formik";

import { productValidationSchema } from "../../../ValidationSchemas/productCreateValidationSchema";
import axios from "axios";
import useAllBrands from "../../../Hooks/useAllBrands";
function CreateProduct() {
  const navigate = useNavigate();
  const brands = useAllBrands();
  
  const createSubmit = (values) => {
    axios.post(`/products`, values);
    navigate("/admin");
  };
  return (
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
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Product name"
            />
            <ErrorMessage
              name="name"
              component={() => <div className="error">{errors.name}</div>}
            />
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <Field
              type="number"
              id="price"
              name="price"
              placeholder="Product price"
            />
            <ErrorMessage
              name="price"
              component={() => <div className="error">{errors.price}</div>}
            />
          </div>

          <div>
            <label htmlFor="image_url">Image</label>
            <Field
              type="text"
              id="image_url"
              name="image_url"
              placeholder="Product url image"
            />
            <ErrorMessage
              name="image_url"
              component={() => <div className="error">{errors.image_url}</div>}
            />
          </div>

          <div>
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
                <div className="error">{errors.description}</div>
              )}
            />
          </div>
          <div>
            <Field
              as="select"
              name="brandName"
            >
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
                <div className="error">{errors.brandName}</div>
              )}
            />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
{
  /*  */
}
export default CreateProduct;
