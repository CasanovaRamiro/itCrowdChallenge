import { useState, useEffect } from "react";
import axios from "axios";
import AdminProductCards from "./AdminProductCards/AdminProductCards";
import css from "./AdminHome.module.css";
import { useNavigate } from "react-router-dom";
import AdminBrandCards from "./AdminBrandCards/AdminBrandCards";
function AdminHome() {
  const navigate = useNavigate();
  const [render, setRender] = useState(true);
  const [showProducts, setShowProducts] = useState(true);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  const reRender = () => {
    setRender(!render);
  };

  const getAllProducts = async () => {
    const { data } = await axios.get("/products");
    setProducts(data);
  };
  const getAllBrands = async () => {
    const { data } = await axios.get("/brands");
    setBrands(data);
  };

  useEffect(() => {
    getAllProducts();
    getAllBrands();
  }, [render]);

  return (
    <div className={css.container}>
      <h1>Admin Menu</h1>
      {showProducts ? (
        <div className={css.container}>
          <h2>Products</h2>
          <button
            className={css.btn}
            onClick={() => setShowProducts(!showProducts)}
          >
            Switch to Brands
          </button>
          <button
            className={css.btn}
            onClick={() => navigate("/admin/createproduct")}
          >
            Crate Product
          </button>
          <div className={css.cardContainer}>
            {products?.map((e) => {
              return (
                <div key={e.id}>
                  <AdminProductCards
                    name={e.name}
                    image_url={e.image_url}
                    price={e.price}
                    id={e.id}
                    reRender={reRender}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={css.container}>
          <h2>Brands</h2>
          <button
            className={css.btn}
            onClick={() => setShowProducts(!showProducts)}
          >
            Switch to Products
          </button>
          <button
            className={css.btn}
            onClick={() => navigate("/admin/createbrand")}
          >
            Crate Brand
          </button>
          <div className={css.cardContainer}>
            {brands?.map((e) => {
              return (
                <div key={e.id}>
                  <AdminBrandCards
                    name={e.name}
                    logo_url={e.logo_url}
                    id={e.id}
                    reRender={reRender}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminHome;
