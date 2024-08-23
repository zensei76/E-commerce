import { Router } from "express";
import { sendCategories, sendProduct, sendProducts } from "../controllers/product-controllers.js";



const productRoutes = Router()



productRoutes.get("/", sendProducts);//domain/api/v1/products/
productRoutes.get("/categories", sendCategories);//domain/api/v1/products/categories
productRoutes.get("/:id", sendProduct);//domain/api/v1/products/

export default productRoutes;