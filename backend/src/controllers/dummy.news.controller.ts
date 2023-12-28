import { Request, Response } from "express";
import { curatedEventsList, articlesComparision, eventDetail } from "../utils/fixtures/fixtures_barrel";
import { Article } from "../utils/remote-functions";
import { articlesList } from "../utils/fixtures/articlesList";

export class DummyNewsController {
    static async getCuratedEvents(req: Request, res: Response) {
        res.status(200).json(curatedEventsList);
    }

    static async searchEventsByTopic(req: Request, res: Response) {
        const topic: string = req.query.q as string;
        const events = [...curatedEventsList.events];

        //shuffle
        for (let i = events.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [events[i], events[j]] = [events[j], events[i]];
        }

        res.status(200).json(
            {events, 
            "message": "Successfull searched topic",
             "query": topic
        });
    }

    static async getEventDetail(req: Request, res: Response) {
        res.status(200).json(eventDetail);
    }

    static async compareArticles(req: Request, res: Response) {
        try {
            const { article1, article2 }:
             { article1: string, article2: string } = req.body;            

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
    static async getArticlesForEvent ( req: Request, res: Response) {
        try {
            const eventUri = req.query.eventUri as string;
            res.status(200).json(articlesList);
        } catch (error) {
            res.status(500).json({ "message": "Some thing went wrong while getting event detail." });
        }
    }

}

