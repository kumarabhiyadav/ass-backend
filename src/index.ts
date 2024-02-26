import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { mongoose } from "@typegoose/typegoose";
import fileUpload from "express-fileupload";
import cors from "cors";
dotenv.config();

import mainRoutes from "./mainRoutes.routes";

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: "*",
  }),
);

app.use(express.json({ limit: "500mb" }));
app.use(fileUpload());

// ############### === DB CONNECTION === ########################
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DATABASEURL ?? "")
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });

// ############### === DB CONNECTION END === ########################

app.use("/api", mainRoutes);

// Status Check
app.get("/", (req: Request, res: Response) => {
  res.send("Serving on port" + port);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
