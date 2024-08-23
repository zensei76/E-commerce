import { productData, categoryData } from "../data/products.js";

const products = productData;
const categories = categoryData;
export const sendProducts = (req, res) => {
	try {
		res.json(products);
	} catch (error) {
		console.error("Error fetching products:", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};
export const sendCategories = (req, res) => {
	try {
		res.json(categories);
	} catch (error) {
		console.error("Error fetching categories:", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export const sendProduct = (req, res) => {
	const { id } = req.params;

	const product = products.find((p) => p.id === parseInt(id, 10));

	try {
		res.json(product);
	} catch (error) {
		console.error("Error fetching product:", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};
