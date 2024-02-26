"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const typegoose_1 = require("@typegoose/typegoose");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const mainRoutes_routes_1 = __importDefault(require("./mainRoutes.routes"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(express_1.default.json({ limit: "500mb" }));
app.use((0, express_fileupload_1.default)());
typegoose_1.mongoose.set("strictQuery", true);
typegoose_1.mongoose
    .connect((_a = process.env.DATABASEURL) !== null && _a !== void 0 ? _a : "")
    .then(() => {
    console.log("Connected to database!");
})
    .catch((error) => {
    console.log("Connection failed!", error);
});
app.use("/api", mainRoutes_routes_1.default);
app.get("/", (req, res) => {
    res.send("Serving on port" + port);
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
