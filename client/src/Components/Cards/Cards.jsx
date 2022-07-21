import React from 'react'
import css from './Cards.module.css'
function Cards({
    name,
    image_url,
    price
  }) {
  return (
    <div className={css.container}>
      <div className={css.containerImg}>
        <img src={image_url} alt="Product Img" className={css.img}/>
        <img src={image_url} alt="Product Img" className={css.logoImg}/>
      </div>
    
    <div className={css.price}>
      <h3>${price}</h3>
    </div>
    <h4 className={css.title}>{name}</h4>
    
  </div>
  )
}

export default Cards