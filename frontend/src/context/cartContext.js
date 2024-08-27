import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../constants";
import { toast } from "sonner";

const CartContext = createContext(undefined);

const BASE_URL = SERVER_URL || "http://localhost:5000/api/v1";

export function CartProvider({ children }) {
    const [cart, setCart] = useState({ items: [], totalItems: 0, totalPrice: 0 });

    const fetchCart = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/cart`);
            setCart(response.data);
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const addToCart = async (product) => {
        try {
            const response = await axios.post(`${BASE_URL}/cart/add`, product);
            setCart(response.data);
        } catch (error) {
            console.error("Error adding to cart:", error);
            toast.error("Failed to add item to cart. Please try again.");
        }
    };

    const removeFromCart = async (productId) => {
        try {
            const response = await axios.delete(`${BASE_URL}/cart/remove`, { data: { id: productId } });
            setCart(response.data);
        } catch (error) {
            console.error("Error removing from cart:", error);
        }
    };

    const updateQuantity = async (productId, newQuantity) => {
        try {
            const response = await axios.patch(`${BASE_URL}/cart/update`, { id: productId, quantity: newQuantity });
            setCart(response.data);
        } catch (error) {
            console.error("Error updating cart:", error);
        }
    };

    const clearCart = async () => {
        try {
            const response = await axios.delete(`${BASE_URL}/cart`);
            setCart(response.data);
        } catch (error) {
            console.error("Error clearing cart:", error);
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}