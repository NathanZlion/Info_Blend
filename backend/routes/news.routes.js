
import { newsController } from '../controllers/news.controller.js';
import express from "express";
import authMiddleware from "../middleware/auth.js";

const newsRouter = express.Router();

// auth middleware to check if user is logged in
newsRouter.use(authMiddleware);

newsRouter.get("/", newsController.getCuratedNews);
newsRouter.get("/search", newsController.searchTopic);
newsRouter.post("/compare", newsController.compareArticles);

export default newsRouter;