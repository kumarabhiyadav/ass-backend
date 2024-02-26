import express, { Router } from "express";
import { createEmiRange, fetchEmiRanges,editEmiRange, deleteEmiRange, fetchEmiRangeByAmount } from "../controllers/emirange.controller";
export const EmiRangeRoutes: Router = express.Router();


// /api/auth/ 

EmiRangeRoutes.post("/createEmiRange", createEmiRange);
EmiRangeRoutes.get("/fetchEmiRange", fetchEmiRanges);
EmiRangeRoutes.put("/editEmiRange", editEmiRange);
EmiRangeRoutes.delete("/deleteEmiRange/:id", deleteEmiRange);
EmiRangeRoutes.get("/fetchEmiRangeByAmount/:amount", fetchEmiRangeByAmount);























