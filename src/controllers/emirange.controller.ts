import { Request, Response } from "express";
import { EmiRange, EmiRangeModel } from "../models/emirange.model";

export const createEmiRange = async (req: Request, res: Response) => {

    let { amountMin, amountMax, rateofintrest, months } = req.body;

    try {


        let emi = await checkExisting(amountMin, amountMax);

        if (emi) {
            return res.status(300).json({
                message: "Amount of this range is already exists",
                success: false
            })
        }

        let newemi = await EmiRangeModel.create({ amountMax, amountMin, rateofintrest, months });
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




export const fetchEmiRanges = async (req: Request, res: Response) => {

    let emiRanges = await EmiRangeModel.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, result: emiRanges });


};


export const editEmiRange = async (req: Request, res: Response) => {

    let { id, amountMin, amountMax, rateofintrest, months } = req.body;

    try {

        // let emi = await checkExisting(amountMin, amountMax);
        // if (emi) {
        //     return res.status(300).json({
        //         message: "Amount of this range is already exists",
        //         success: false
        //     })
        // }
        let newemi = await EmiRangeModel.findByIdAndUpdate(id, { amountMax, amountMin, rateofintrest, months }, { new: true, runValidators: true });
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


async function checkExisting(amountMin: number, amountMax: number): Promise<boolean> {
    let emi = await EmiRangeModel.findOne(
        {
            $and: [
                { $or: [{ amountMin: { $gte: amountMin }, amountMax: { $lte: amountMax } }] },
                { $or: [{ amountMin: { $lte: amountMin }, amountMax: { $gte: amountMax } }] },
            ],
        }
    )
    return emi ? true : false;
}






export const deleteEmiRange = async (req: Request, res: Response) => {

    let id = req.params.id;

    try {
        let newemi = await EmiRangeModel.findByIdAndDelete(id);
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



export const fetchEmiRangeByAmount = async (req: Request, res: Response) => {

    let  amount = req.params.amount;
    try {
        let emi = await EmiRangeModel.findOne({ amountMin: { $lte: amount }, amountMax: { $gte: amount } }, // amount falls within a range
        );
        return res.status(200).json({
            success: true,
            result: emi
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }

};