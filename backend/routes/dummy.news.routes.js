import { DummyNewsController } from '../controllers/dummy.news.controller.js';
import express from "express";

const dummyNewsRouter = express.Router();

dummyNewsRouter.get("/", DummyNewsController.getCuratedEvents);
dummyNewsRouter.get("/search", DummyNewsController.searchEventsByTopic);
dummyNewsRouter.get("/compare", DummyNewsController.compareArticles);
dummyNewsRouter.get("/:id", DummyNewsController.getEventDetail);

export default dummyNewsRouter;
