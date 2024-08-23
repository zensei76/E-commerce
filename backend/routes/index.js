import { Router } from "express";

import productRoutes from "./product-routes.js";

const appRouter = Router();

appRouter.use("/cart", ()=>{}); //domain/api/v1/cart
appRouter.use("/products", productRoutes); //domain/api/v1/products



export default appRouter;