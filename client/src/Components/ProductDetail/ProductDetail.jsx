import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProductById from "../../Hooks/useProductById";
import css from "./ProductDetail.module.css";
import {AiOutlineCloseSquare} from 'react-icons/ai'
function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate()
  const detail = useProductById(id);


  return (
    <div  className={css.container}>
        <div className={css.overlay} onClick={()=>navigate('/')}></div>
      <div className={css.detailContainer}>
        <div className={css.close} onClick={()=>navigate('/')}><AiOutlineCloseSquare/></div> 
        <img src={detail.image_url} alt="Product Img" />
        <div className={css.price}>
          <h3>${detail.price}</h3>
        </div>
        <h4 className={css.title}>{detail.name}</h4>
        <h5>{detail.description}</h5>
      </div>
    </div>
  );
}

export default ProductDetail;
