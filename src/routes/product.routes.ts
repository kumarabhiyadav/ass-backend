import express, { Router } from "express";
import { fetchProduct,createProduct,editProduct,deleteProduct } from "../controllers/product.controller";
export const ProductRoutes: Router = express.Router();


// /api/auth/ 

ProductRoutes.get("/fetchProduct", fetchProduct);
ProductRoutes.post("/createProduct", createProduct);
ProductRoutes.put("/editProduct", editProduct);
ProductRoutes.delete("/deleteProduct/:id", deleteProduct);
