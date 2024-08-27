import { Router } from "express";
import {
	addToCart,
	clearCart,
	removeFromCart,
	sendCart,
	updateCart,
} from "../controllers/cart-controllers.js";

const cartRoutes = Router();

cartRoutes.get("/", sendCart); //domain/api/v1/cart/
cartRoutes.post("/add", addToCart); //domain/api/v1/cart/add
cartRoutes.delete("/remove", removeFromCart); //domain/api/v1/cart/remove
cartRoutes.delete("/", clearCart); //domain/api/v1/cart/remove-all
cartRoutes.patch("/update", updateCart); //domain/api/v1/cart/

export default cartRoutes;
