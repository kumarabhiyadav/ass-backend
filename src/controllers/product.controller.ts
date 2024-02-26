import { Request, Response } from "express";
import { ProductModel } from "../models/product.model";

export const createProduct = async (req: Request, res: Response) => {

    let { name, price } = req.body;

    try {






        let newemi = await ProductModel.create({ name, price });
        return res.status(200).json({
            success: true,
            result: newemi
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        })

    }

};




export const fetchProduct = async (req: Request, res: Response) => {

    let emiRanges = await ProductModel.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, result: emiRanges });


};


export const editProduct = async (req: Request, res: Response) => {

    let { id, name,price } = req.body;

    try {

        // let emi = await checkExisting(amountMin, amountMax);
        // if (emi) {
        //     return res.status(300).json({
        //         message: "Amount of this range is already exists",
        //         success: false
        //     })
        // }
        let product = await ProductModel.findByIdAndUpdate(id, { name, price }, { new: true, runValidators: true });
        return res.status(200).json({
            success: true,
            result: product
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }

};









export const deleteProduct = async (req: Request, res: Response) => {

    let id = req.params.id;

    try {
        let product = await ProductModel.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            result: product
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }

};