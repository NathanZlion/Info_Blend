import { compareArticles, getDetails, getEventFeed, searchForEvents } from "../utils/remote-functions";
import { Request, Response } from 'express';

/**
 * A class to handle all news related controllers.
 */
export class newsController {
    /**
     * @param {*} req 
     * @param {*} res
     * @returns a list of curated events for the user based on the user's profile.
    */
    static async getCuratedEvents(req: Request, res: Response) {
        const user = res.locals.user;
        const categories = user!.interests;
        const country = user!.country;
        try {
            const events = await getEventFeed({ categories, country });
            res.status(200).json({ "message": "success", "events": events });
        } catch (error) {
            res.status(500)
                .json({ "message": "Something wrong while preparing curated news for you." });
        }
    }


    /**
     * @param {*} req 
     * @param {*} res
     * @returns a list of events that match the topic search that is passed in as a
     * query inside the request topic
     */
    static async searchEventsByTopic(req: Request, res: Response) {
        const topic: string = req.query.q as string;

        try {
            const events = await searchForEvents(topic);
            res.status(200).
                json({ "message": "Successfull searched topic", "query": topic, "events": events });
        } catch (error) {
            res.status(500)
                .json({ "message": "Some thing went wrong while searching for the topic." });
        }
    }


    /**
     * @param {*} req 
     * @param {*} res 
     * @returns returns a detail about the event and the articles it has too with their content
     */
    static async getEventDetail(req: Request, res: Response) {

        const eventUri = req.query.eventUri as string;
        try {
            const { event, articles } = await getDetails(eventUri);
            res.status(200)
                .json({
                    "message": "Successfully got event detail",
                    "event": event,
                    "articles": articles
                });
        } catch (error) {
            res.status(500)
                .json({ "message": "Some thing went wrong while getting event detail." });
        }
    }
    /**
     * @param {*} req 
     * @param {*} res 
     * @returns a comparision between 2 articles passed into is as requests.
     */
    static async compareArticles(req: Request, res: Response) {

        const { article1, article2 } = req.body;
        try {
            const comparison = await compareArticles(article1, article2);
            res.status(200).
                json({ "message": "Successfully compared articles.", "comparison": comparison });
        } catch (error) {
            res.status(500)
                .json({ "message": "Some thing went wrong while making article comparison." });
        }
    }
}
