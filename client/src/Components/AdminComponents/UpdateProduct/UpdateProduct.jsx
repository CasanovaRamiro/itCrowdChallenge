import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProductById from "../../../Hooks/useProductById";


import { productValidationSchema } from "../../../ValidationSchemas/productUpdateValidationSchema";
import axios from "axios";
import UpdateForm from "./UpdateForm";
function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const productToUpdate = useProductById(id);
 
  const updateSubmit = (values) => {
    axios.put(`/products/${id}`, values);
    navigate("/admin");
  };
  return (
    <div>
        {productToUpdate.name &&
        <UpdateForm
        productName={productToUpdate.name}
        price={productToUpdate.price}
        image_url={productToUpdate.image_url}
        description={productToUpdate.description}
        />}
    </div>
  );
}

export default UpdateProduct;
