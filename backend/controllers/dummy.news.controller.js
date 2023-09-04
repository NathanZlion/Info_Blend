import { curatedEventsList, articlesComparision, eventDetail } from "../utils/fixtures/fixtures_barrel.js";

export class DummyNewsController {
    static async getCuratedEvents(req, res) {
        res.status(200).json(curatedEventsList);
    }

    static async searchEventsByTopic(req, res) {
        res.status(200).json(curatedEventsList);
    }

    static async getEventDetail(req, res) {
        res.status(200).json(eventDetail);
    }

    static async compareArticles(req, res) {
        res.status(200).json(articlesComparision);
    }

}

