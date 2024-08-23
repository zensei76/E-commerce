import { useState } from "react";
import { useCart } from "../context/cartContext.js";

export default function AddToCartButton({ product, variant = "default" }) {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log("buttonclicked")
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); 
  };

  const buttonStyles = {
    default: `bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-500 transition-colors ${
      isAdded ? "bg-green-800" : "bg-gray-800"
    }`,
    fullWidth: `mt-4 w-full z-10 ${
      isAdded ? "bg-green-800" : "bg-gray-800"
    } border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`,
  };

  return (
    <button onClick={handleAddToCart} className={buttonStyles[variant]}>
      {isAdded ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}