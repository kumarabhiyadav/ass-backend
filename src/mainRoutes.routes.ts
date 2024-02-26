import express, { Router } from "express";
import { EmiRangeRoutes } from "./routes/emirang.routes";
import { ProductRoutes } from "./routes/product.routes";

const app = express();

app.use("/emi", EmiRangeRoutes);
app.use("/product", ProductRoutes);


export default app;
