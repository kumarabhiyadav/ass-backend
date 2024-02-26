"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
exports.ProductRoutes = express_1.default.Router();
exports.ProductRoutes.get("/fetchProduct", product_controller_1.fetchProduct);
exports.ProductRoutes.post("/createProduct", product_controller_1.createProduct);
exports.ProductRoutes.put("/editProduct", product_controller_1.editProduct);
exports.ProductRoutes.delete("/deleteProduct/:id", product_controller_1.deleteProduct);
