"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsController = void 0;
const remote_functions_1 = require("../utils/remote-functions");
/**
 * A class to handle all news related controllers.
 */
class newsController {
    /**
     * @param {*} req
     * @param {*} res
     * @returns a list of curated events for the user based on the user's profile.
    */
    static getCuratedEvents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = res.locals.user;
            const categories = user.interests;
            const country = user.country;
            try {
                const events = yield (0, remote_functions_1.getEventFeed)({ categories, country });
                res.status(200).json({ "message": "success", "events": events });
            }
            catch (error) {
                res.status(500)
                    .json({ "message": "Something wrong while preparing curated news for you." });
            }
        });
    }
    /**
     * @param {*} req
     * @param {*} res
     * @returns a list of events that match the topic search that is passed in as a
     * query inside the request topic
     */
    static searchEventsByTopic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const topic = req.query.q;
            try {
                const events = yield (0, remote_functions_1.searchForEvents)(topic);
                res.status(200).
                    json({ "message": "Successfull searched topic", "query": topic, "events": events });
            }
            catch (error) {
                res.status(500)
                    .json({ "message": "Some thing went wrong while searching for the topic." });
            }
        });
    }
    /**
     * @param {*} req
     * @param {*} res
     * @returns returns a detail about the event and the articles it has too with their content
     */
    static getEventDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventUri = req.query.eventUri;
            try {
                const { event, articles } = yield (0, remote_functions_1.getDetails)(eventUri);
                res.status(200)
                    .json({
                    "message": "Successfully got event detail",
                    "event": event,
                    "articles": articles
                });
            }
            catch (error) {
                res.status(500)
                    .json({ "message": "Some thing went wrong while getting event detail." });
            }
        });
    }
    /**
     * @param {*} req
     * @param {*} res
     * @returns a comparision between 2 articles passed into is as requests.
     */
    static compareArticles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { article1, article2 } = req.body;
            try {
                const comparison = yield (0, remote_functions_1.compareArticles)(article1, article2);
                res.status(200).
                    json({ "message": "Successfully compared articles.", "comparison": comparison });
            }
            catch (error) {
                res.status(500)
                    .json({ "message": "Some thing went wrong while making article comparison." });
            }
        });
    }
}
exports.newsController = newsController;
