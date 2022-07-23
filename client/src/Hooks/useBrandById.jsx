import {useState, useEffect} from 'react';
import axios from 'axios'

 const useBrandById = (id) => {
  const [brands, setBrands] = useState([]);
  const getAllBrands = async () => {
    const { data } = await axios.get(`/brands/${id}`);
    setBrands(data);
  };
  useEffect(() => {
    getAllBrands();
  }, []);
  return brands;
};
export default useBrandById