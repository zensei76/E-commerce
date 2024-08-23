import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export const getProducts = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/products`);

		return response.data;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
};
export const getProduct = async (id) => {
	try {
		const response = await axios.get(`${BASE_URL}/products/${id}`);

		return response.data;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
};

export const getCategories = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/products/categories`);
		return response.data;
	} catch (error) {
		console.error("Error fetching categories:", error);
		throw error;
	}
};

export const getProductById = async (id) => {
	try {
		const response = await axios.get(`${BASE_URL}/products/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching product with id ${id}:`, error);
		throw error;
	}
};
