import {useState, useEffect} from 'react';
import axios from 'axios'

 const useProductById = (id) => {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    const { data } = await axios.get(`/products/${id}`);
    setProducts(data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return products;
};
export default useProductById