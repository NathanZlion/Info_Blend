
import { newsController } from '../controllers/news.controller';
import express, { Router } from "express";
import authMiddleware from "../middleware/auth";

const newsRouter: Router = express.Router();

// auth middleware to authenticated the user
newsRouter.use(authMiddleware);

newsRouter.get("/", newsController.getCuratedEvents);
newsRouter.get("/search", newsController.searchEventsByTopic);
newsRouter.get("/compare", newsController.compareArticles);
newsRouter.get("/:id", newsController.getEventDetail);

export default newsRouter;