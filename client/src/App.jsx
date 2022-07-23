import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Components/Home/Home';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import NavBar from './Components/NavBar/NavBar';
import LogIn from './Components/LogIn/LogIn';
import AdminHome from './Components/AdminComponents/AdminHome/AdminHome';
import UpdateProduct from './Components/AdminComponents/UpdateProduct/UpdateProduct';
import CreateProduct from './Components/AdminComponents/CreateProduct/CreateProduct';

function App() {
	return (
		<BrowserRouter>
		<NavBar/>
			<Routes>
				
				<Route path={"/"} element={<Home />} />
				<Route path={"/detail/:id"} element={<ProductDetail />} />
				<Route path={"/login"} element={<LogIn />} />
				<Route path={"/admin"} element={<AdminHome />} />
				<Route path={"/admin/update/:id"} element={<UpdateProduct />} />
				<Route path={"/admin/createproduct"} element={<CreateProduct />} />
				
			</Routes>
		</BrowserRouter>
	);
}

export default App
