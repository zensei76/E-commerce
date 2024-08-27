import "./App.css";
import { Header } from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Footer } from "./component/Footer";
import { useEffect, useState } from "react";
import { getCategories, getProducts } from "./api/products";
import Cart from "./pages/Cart";
import Product from "./pages/Product";


function App() {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const productsData = await getProducts();
				const categoriesData = await getCategories();
				setProducts(productsData);
				setCategories(categoriesData);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	const filteredProducts =
		selectedCategory === "all"
			? products
			: products.filter((product) => product.category === selectedCategory);

	return (
		<div className='flex flex-col min-h-screen'>
			<Header
				categories={categories}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<main className='flex-grow'>
				<Routes>
					<Route
						path='/'
						element={
							<Home products={filteredProducts} isLoading={isLoading} />
						}
					/>
					<Route path='/cart' element={<Cart />} />
					<Route path='/product/:id' element={<Product />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
