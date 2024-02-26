"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emirang_routes_1 = require("./routes/emirang.routes");
const product_routes_1 = require("./routes/product.routes");
const app = (0, express_1.default)();
app.use("/emi", emirang_routes_1.EmiRangeRoutes);
app.use("/product", product_routes_1.ProductRoutes);
exports.default = app;
