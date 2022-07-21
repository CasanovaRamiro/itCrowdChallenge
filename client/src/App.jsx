import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Components/Home/Home';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import NavBar from './Components/NavBar/NavBar';

function App() {
	return (
		<BrowserRouter>
		<NavBar/>
			<Routes>
				
				<Route path={"/"} element={<Home />} />
				<Route path={"/home"} element={<Home />} />
				{/* <Route path={"/admin/*"} element={<Admin />} /> */}
				<Route path={"/detail/:id"} element={<ProductDetail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App
