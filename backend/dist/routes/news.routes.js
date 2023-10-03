"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const news_controller_js_1 = require("../controllers/news.controller.js");
const express_1 = __importDefault(require("express"));
const auth_js_1 = __importDefault(require("../../middleware/auth.js"));
const newsRouter = express_1.default.Router();
// auth middleware to authenticated the user
newsRouter.use(auth_js_1.default);
newsRouter.get("/", news_controller_js_1.newsController.getCuratedEvents);
newsRouter.get("/search", news_controller_js_1.newsController.searchEventsByTopic);
newsRouter.get("/compare", news_controller_js_1.newsController.compareArticles);
newsRouter.get("/:id", news_controller_js_1.newsController.getEventDetail);
exports.default = newsRouter;
