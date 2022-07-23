import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProductById from "../../Hooks/useProductById";
import css from "./ProductDetail.module.css";
import { AiOutlineCloseSquare } from "react-icons/ai";
function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const detail = useProductById(id);

  return (
    <div className={css.container}>
      <div className={css.overlay} onClick={() => navigate("/")}></div>
      <div className={css.detailContainer}>
        <div className={css.close} onClick={() => navigate("/")}>
          <AiOutlineCloseSquare />
        </div>
        <div className={css.containerImg}>
          <img src={detail.image_url} alt="Product Img" className={css.img} />
          <img
            src={detail.brands && detail.brands[0].logo_url}
            alt="Logo Img"
            className={css.logoImg}
          />
        </div>
        <div className={css.price}>
          <h3>Price: ${detail.price}</h3>
          <h4 className={css.title}>
            Brand: {detail.brands && detail.brands[0].name}
          </h4>
        </div>
        <div className={css.price}>
          <h4 className={css.title}>Name: {detail.name}</h4>
          
        </div>
        <div className={css.description}>
        <h4 className={css.title}>Description</h4>
        <h5 className={css.title}>{detail.description}</h5>
        </div>
        
      </div>
    </div>
  );
}

export default ProductDetail;
