"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.editProduct = exports.fetchProduct = exports.createProduct = void 0;
const product_model_1 = require("../models/product.model");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { name, price } = req.body;
    try {
        let newemi = yield product_model_1.ProductModel.create({ name, price });
        return res.status(200).json({
            success: true,
            result: newemi
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
exports.createProduct = createProduct;
const fetchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let emiRanges = yield product_model_1.ProductModel.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, result: emiRanges });
});
exports.fetchProduct = fetchProduct;
const editProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id, name, price } = req.body;
    try {
        let product = yield product_model_1.ProductModel.findByIdAndUpdate(id, { name, price }, { new: true, runValidators: true });
        return res.status(200).json({
            success: true,
            result: product
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
exports.editProduct = editProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    try {
        let product = yield product_model_1.ProductModel.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            result: product
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
exports.deleteProduct = deleteProduct;
