import { Request, Response } from "express";
import { curatedEventsList, articlesComparision, eventDetail } from "../utils/fixtures/fixtures_barrel";

export class DummyNewsController {
    static async getCuratedEvents(req:Request, res:Response) {
        res.status(200).json(curatedEventsList);
    }

    static async searchEventsByTopic(req:Request, res:Response) {
        res.status(200).json(curatedEventsList);
    }

    static async getEventDetail(req:Request, res:Response) {
        res.status(200).json(eventDetail);
    }

    static async compareArticles(req:Request, res:Response) {
        res.status(200).json(articlesComparision);
    }

}

