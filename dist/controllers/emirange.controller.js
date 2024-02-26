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
exports.fetchEmiRangeByAmount = exports.deleteEmiRange = exports.editEmiRange = exports.fetchEmiRanges = exports.createEmiRange = void 0;
const emirange_model_1 = require("../models/emirange.model");
const createEmiRange = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { amountMin, amountMax, rateofintrest, months } = req.body;
    try {
        let emi = yield checkExisting(amountMin, amountMax);
        if (emi) {
            return res.status(300).json({
                message: "Amount of this range is already exists",
                success: false
            });
        }
        let newemi = yield emirange_model_1.EmiRangeModel.create({ amountMax, amountMin, rateofintrest, months });
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
exports.createEmiRange = createEmiRange;
const fetchEmiRanges = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let emiRanges = yield emirange_model_1.EmiRangeModel.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, result: emiRanges });
});
exports.fetchEmiRanges = fetchEmiRanges;
const editEmiRange = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id, amountMin, amountMax, rateofintrest, months } = req.body;
    try {
        let newemi = yield emirange_model_1.EmiRangeModel.findByIdAndUpdate(id, { amountMax, amountMin, rateofintrest, months }, { new: true, runValidators: true });
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
exports.editEmiRange = editEmiRange;
function checkExisting(amountMin, amountMax) {
    return __awaiter(this, void 0, void 0, function* () {
        let emi = yield emirange_model_1.EmiRangeModel.findOne({
            $and: [
                { $or: [{ amountMin: { $gte: amountMin }, amountMax: { $lte: amountMax } }] },
                { $or: [{ amountMin: { $lte: amountMin }, amountMax: { $gte: amountMax } }] },
            ],
        });
        return emi ? true : false;
    });
}
const deleteEmiRange = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    try {
        let newemi = yield emirange_model_1.EmiRangeModel.findByIdAndDelete(id);
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
exports.deleteEmiRange = deleteEmiRange;
const fetchEmiRangeByAmount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let amount = req.params.amount;
    try {
        let emi = yield emirange_model_1.EmiRangeModel.findOne({ amountMin: { $lte: amount }, amountMax: { $gte: amount } });
        return res.status(200).json({
            success: true,
            result: emi
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
exports.fetchEmiRangeByAmount = fetchEmiRangeByAmount;
