import { useParams, useNavigate } from "react-router-dom";
import useProductById from "../../../Hooks/useProductById";
import css from './UpdateProduct.module.css'

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
    <div className={css.container}>
      <h1>Update Product</h1>
        {productToUpdate.name &&
        <UpdateForm
        productName={productToUpdate.name}
        price={productToUpdate.price}
        image_url={productToUpdate.image_url}
        description={productToUpdate.description}
        brandName={productToUpdate.brands}
        />}
    </div>
  );
}

export default UpdateProduct;
