import {useState, useEffect} from 'react';
import axios from 'axios'

const useAllProducts = () => {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    const { data } = await axios.get("/products");
    setProducts(data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return products;
};

export default useAllProducts