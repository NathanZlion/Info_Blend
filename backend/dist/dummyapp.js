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
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const user_routes_js_1 = __importDefault(require("./routes/user.routes.js"));
const dummy_news_routes_js_1 = __importDefault(require("./routes/dummy.news.routes.js"));
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
app.use("/api/v1/news", dummy_news_routes_js_1.default);
// any origin can access this server
app.use((0, cors_1.default)({ origin: "*" }));
function startListening() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(`trying to open port ${process.env.PORT}...`);
            app.listen(process.env.PORT);
            console.log(`- listening through port ${process.env.PORT}`);
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield startListening();
            console.log("✔ Dummy Server Started ✔");
            console.warn(`!!! This is a dummy server and will not provide real data. For test purpose only---`);
        }
        catch (error) {
            console.log(error.message);
        }
    });
}
startServer();
