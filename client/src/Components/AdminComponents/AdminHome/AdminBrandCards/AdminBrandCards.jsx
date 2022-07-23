import css from "./AdminBrandCards.module.css";


import { FaRegEdit } from "react-icons/fa";

import { useNavigate } from "react-router-dom";



function AdminBrandCards({logo_url, name, id , reRender}) {
   const navigate = useNavigate()
  return (
    
    
        <div className={css.container}>
      <div className={css.containerImg}>
        <img src={logo_url} alt="Product Img" className={css.img} />
      </div>
      <div className={css.titleContainer}>
        <h4 className={css.title}>{name}</h4>
      </div>
    
      <div className={css.edit} onClick={() => navigate(`/admin/updatebrand/${id}`)}>
        <FaRegEdit />
      </div>
    
    </div>
    
  )
}

export default AdminBrandCards