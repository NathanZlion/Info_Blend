import { EventRegistry, QueryEventsIter, QueryItems, ReturnInfo } from "eventregistry";

/**
 * A class to handle all todo related controllers
 */
export class newsController {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns a list of curated news for the user.
    */
    static async getCuratedNews(req, res) {
        try {
            const er = new EventRegistry({ apiKey: process.env.EVENT_REGISTRY_API_KEY });
            console.log(process.env.EVENT_REGISTRY_API_KEY);
            const user = req.user;

            // LOCATION PERSONALIZATION
            const locationUrl = `https://en.wikipedia.org/wiki/${user.country}`;

            // INTEREST PERSONALIZATION
            const categoryUris = user.interests.map(interest => `dmoz/${interest}`);

            // DATE PERSONALIZATION
            const lastMonth = new Date();
            // limited to 1 month because the free api being used limits to 1 month for free plans
            // Subtract one month from the current date
            lastMonth.setMonth(lastMonth.getMonth() - 1);
            console.log(lastMonth);
            console.log(user.lastChecked);
            const dateStart = new Date(Math.max(user.lastChecked, lastMonth));
            console.log(dateStart);

            // Build the request body for the Event Registry API
            const requestBody = {
                returnInfo: new ReturnInfo(),
                resultType: "events",
                conceptUri: QueryItems.OR(categoryUris),
                locationUri: locationUrl,
                dateStart: dateStart.toISOString(),
                apiKey: process.env.EVENT_REGISTRY_API_KEY,
                lang: "eng",
                minArticlesInEvent: 3,
                eventsSortBy: "socialScore",
                eventsCount: 15,
            };


            const usage = ((await er.getUsageInfo()));
            console.log(usage);

            // const q = new QueryEventsIter(er, {
            //     returnInfo: new ReturnInfo(),
            //     resultType: "events",
            //     conceptUri: QueryItems.OR(categoryUris),
            //     locationUri: locationUrl,
            //     dateStart: dateStart.toISOString(),
            //     apiKey: process.env.EVENT_REGISTRY_API_KEY,
            //     lang: "eng",
            //     minArticlesInEvent: 3,
            //     eventsSortBy: "socialScore",
            //     eventsCount: 15,
            // });

            // q.execQuery((event_) => {
            //     console.info(event_);
            // });

            // res.status(200).json({ message: "Curated news retrieved successfully", events: [] });

            // res.status(200).json({ message: "Won't curate news for your piece of shit" });

            // Make the API request to the Event Registry API
            // const response = await fetch("http://eventregistry.org/api/v1/event/getEvents", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(requestBody)
            // });

            // // Handle the response from the API
            // const data = await response.json();
            // // Process the data as needed and return the curated news to the client

            // res.status(200).json({ message: "Curated news retrieved successfully", curatedNews });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Something went wrong while retrieving curated news." });
        }
    }

    static async searchTopic(req, res) {

        try {
            const user = req.user;
            // try to use the newtork util to search for event based off 
            res.status(200).json({ message: "Todo created successfully", newTodo });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Something went wrong while creating todo." });
        }
    }

    static async compareArticles(req, res) {

        try {
            const user = req.user;
            // try to use the newtork util to search for event based off 
            res.status(200).json({ message: "Todo created successfully", newTodo });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Something went wrong while creating todo." });
        }
    }
}
