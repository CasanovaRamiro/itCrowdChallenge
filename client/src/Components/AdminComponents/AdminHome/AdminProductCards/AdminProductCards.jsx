import css from "./AdminProductCards.module.css";
import axios from 'axios'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import {useNavigate } from "react-router-dom";

function AdminProductCards({ name, image_url, price, id , reRender}) {
    const navigate = useNavigate()
    const deleteProduct = async (id)=> {
        await axios.delete(`/products/${id}`)
        reRender()
    }
  return (
    <div className={css.container}>
      <div className={css.containerImg}>
        <img src={image_url} alt="Product Img" className={css.img} />
      </div>
      <div className={css.price}>
        <h4 className={css.title}>{name}</h4>
        <h4>${price}</h4>
      </div>
      <div className={css.delete} onClick={() => deleteProduct(id)}>
        <RiDeleteBin6Line />
      </div>
      <div className={css.edit} onClick={() => navigate(`/admin/update/${id}`)}>
        <FaRegEdit />
      </div>
    </div>
  );
}

export default AdminProductCards;
