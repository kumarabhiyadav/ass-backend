"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmiRangeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const emirange_controller_1 = require("../controllers/emirange.controller");
exports.EmiRangeRoutes = express_1.default.Router();
exports.EmiRangeRoutes.post("/createEmiRange", emirange_controller_1.createEmiRange);
exports.EmiRangeRoutes.get("/fetchEmiRange", emirange_controller_1.fetchEmiRanges);
exports.EmiRangeRoutes.put("/editEmiRange", emirange_controller_1.editEmiRange);
exports.EmiRangeRoutes.delete("/deleteEmiRange/:id", emirange_controller_1.deleteEmiRange);
exports.EmiRangeRoutes.get("/fetchEmiRangeByAmount/:amount", emirange_controller_1.fetchEmiRangeByAmount);
