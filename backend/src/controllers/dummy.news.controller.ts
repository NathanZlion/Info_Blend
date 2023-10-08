import { Request, Response } from "express";
import { curatedEventsList, articlesComparision, eventDetail } from "../utils/fixtures/fixtures_barrel";
import { Article } from "../utils/remote-functions";

export class DummyNewsController {
    static async getCuratedEvents(req: Request, res: Response) {
        res.status(200).json(curatedEventsList);
    }

    static async searchEventsByTopic(req: Request, res: Response) {
        res.status(200).json(curatedEventsList);
    }

    static async getEventDetail(req: Request, res: Response) {
        res.status(200).json(eventDetail);
    }

    static async compareArticles(req: Request, res: Response) {
        try {
            const { article1, article2 }:
                { article1: Article, article2: Article } = req.body;

            if (!article1 || !article2) {
                 res.status(400).json({
                    "message": "Please provide two articles to compare."
                });
                return;
            }
            res.status(200).json(articlesComparision);
        } catch (error) {
            res.status(500).json({ "message": "Some thing went wrong while comparing articles." });
        }
    }

}

