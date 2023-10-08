import { DummyNewsController } from '../controllers/dummy.news.controller';
import express, { Router } from "express";

const dummyNewsRouter: Router = express.Router();

dummyNewsRouter.get("/", DummyNewsController.getCuratedEvents);
dummyNewsRouter.get("/search", DummyNewsController.searchEventsByTopic);
dummyNewsRouter.get("/compare", DummyNewsController.compareArticles);
dummyNewsRouter.get("/:id", DummyNewsController.getEventDetail);

export default dummyNewsRouter;
