import { DummyNewsController } from '../controllers/dummy.news.controller';
import express, { Router } from "express";

const dummyNewsRouter: Router = express.Router();

dummyNewsRouter.get("/", DummyNewsController.getCuratedEvents);
dummyNewsRouter.get("/search", DummyNewsController.searchEventsByTopic);
dummyNewsRouter.post("/compare", DummyNewsController.compareArticles);
dummyNewsRouter.get("/:id", DummyNewsController.getEventDetail);
dummyNewsRouter.get("/articles/:id", DummyNewsController.getArticlesForEvent);

export default dummyNewsRouter;
