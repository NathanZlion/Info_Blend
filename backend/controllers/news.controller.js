
/**
 * A class to handle all todo related controllers
 */
export class newsController {
    /**
     * @param {*} req 
     * @param {*} res 
     * @returns a list of curated events for the user based on the user's profile.
    */
    static async getCuratedEvents(req, res) {
        res.status(200).json({ "message": "success" });
    }

    /**
     * @param {*} req 
     * @param {*} res
     * @returns a list of events that match the topic search that is passed in as a
     * query inside the request topic
     */
    static async searchEventsByTopic(req, res) {
        const topic = req.query.topic;
        res.status(200).json({ "message": `Search topic = ${topic}` })
    }

    /**
     * @param {*} req 
     * @param {*} res 
     * @returns a comparision between 2 articles passed into is as requests.
     */
    static async compareArticles(req, res) {
        res.status(200).json({"message":"comparing articles"})
    }

    /**
     * @param {*} req 
     * @param {*} res 
     * @returns returns a detail about the event and the articles it has too with their content
     */
    static async getEventDetail(req, res) {
        res.status(200).json({ "message": `search result for id = ${req.params.id}` })
    }
}
