import {useState, useEffect} from 'react';
import axios from 'axios'

const useAllBrands = () => {
  const [brands, setBrands] = useState([]);
  const getAllBrands = async () => {
    const { data } = await axios.get("/brands");
    setBrands(data);
  };
  useEffect(() => {
    getAllBrands();
  }, []);
  return brands;
};

export default useAllBrands