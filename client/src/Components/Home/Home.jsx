import React from "react";
import { NavLink } from "react-router-dom";
import css from './Home.module.css'

import useAllProducts from "../../Hooks/useAllProducts";
import Cards from "../Cards/Cards";

function Home() {
  const products = useAllProducts();
  return (
    <div className={css.container}>
      <h1 >Products</h1>
      <div className={css.cardContainer}>
      {products?.map((e) => {
        return (
          <div key={e.id}>
            <NavLink
              to={`/detail/${e.id}`}
              style={{ textDecoration: "none" }}
            >
              <Cards 
              name={e.name} 
              image_url={e.image_url} 
              price={e.price} 
              brands = {e.brands}
              />
            </NavLink>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default Home;
