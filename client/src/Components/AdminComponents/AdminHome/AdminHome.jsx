import {useState, useEffect} from 'react'
import axios from 'axios'
import AdminProductCards from './AdminProductCards/AdminProductCards'
import css from './AdminHome.module.css'
import { useNavigate } from 'react-router-dom'
function AdminHome() {
    const navigate = useNavigate()
    const[render, setRender]=useState(true)
    
    const [products, setProducts] = useState([]);

    const reRender = ()=>{
        setRender(!render)
    }

    const getAllProducts = async () => {
      const { data } = await axios.get("/products");
      setProducts(data);
    };

    useEffect(() => {
      getAllProducts();
    }, [render]);
    
  return (
    <div className={css.container}>
        <h1>Admin Menu</h1>
        <button className={css.btn} onClick={()=>navigate('/admin/createproduct')}>Crate Product</button>
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
  )
}

export default AdminHome