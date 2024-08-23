import { Router } from "express";
import { sendCart, sendProduct, sendProducts } from "../controllers/product-controllers.js";



const cartRoutes = Router()



cartRoutes.get("/", sendProducts);//domain/api/v1/cart/
cartRoutes.get("/", sendProducts);//domain/api/v1/cart/
cartRoutes.get("/", sendProducts);//domain/api/v1/cart/


export default cartRoutes;