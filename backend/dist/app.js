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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const user_routes_js_1 = __importDefault(require("./routes/user.routes.js"));
const news_routes_js_1 = __importDefault(require("./routes/news.routes.js"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
// MIDDLEWARES, PARSERS TO USE JSON
app.use(express_1.default.json());
// SET HEADERS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});
// ROUTES
app.use("/api/v1/user", user_routes_js_1.default);
app.use("/api/v1/news", news_routes_js_1.default);
// any origin can access this server
app.use((0, cors_1.default)({
    origin: "*",
}));
mongoose_1.default.set('strictQuery', false);
function connectToDb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(`trying to Connect to database...`);
            yield mongoose_1.default.connect(process.env.MONGODBURL, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log(`✔ Connected to database successfully`);
        }
        catch (error) {
            throw new Error(`Database Error: ${error.message}`);
        }
    });
}
function startListening() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(`trying to open port ${process.env.PORT}...`);
            app.listen(process.env.PORT);
            console.log(`✔ Server listening through port ${process.env.PORT}`);
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connectToDb();
            yield startListening();
            console.warn(`-- ✔ Server started successfully ✔ --`);
        }
        catch (error) {
            console.log(error.message);
        }
    });
}
startServer();
