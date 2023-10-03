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
exports.compareArticles = exports.getDetails = exports.searchForEvents = exports.getEventFeed = void 0;
const eventregistry_1 = require("eventregistry");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
function searchForEvents(searchString) {
    return __awaiter(this, void 0, void 0, function* () {
        const eventRegistry = new eventregistry_1.EventRegistry({
            apiKey: process.env.EVENT_REGISTRY_API_KEY,
        });
        const returnInfo = new eventregistry_1.ReturnInfo({
            eventInfo: new eventregistry_1.EventInfoFlags({ imageCount: 3 }),
        });
        const conceptUris = yield Promise.all(searchString.split(' ').map((word) => eventRegistry.getConceptUri(word)));
        const queryEventsIter = new eventregistry_1.QueryEventsIter(eventRegistry, {
            sortBy: 'rel',
            lang: 'eng',
            returnInfo: returnInfo,
            maxItems: 7,
            conceptUri: eventregistry_1.QueryItems.OR(conceptUris),
        });
        const rawEvents = yield new Promise((res, rej) => {
            const events = [];
            queryEventsIter.execQuery((event) => events.push(event), () => res(events));
        });
        return toEvents(rawEvents);
    });
}
exports.searchForEvents = searchForEvents;
function getEventFeed({ categories, country }) {
    return __awaiter(this, void 0, void 0, function* () {
        const eventRegistry = new eventregistry_1.EventRegistry({
            apiKey: process.env.EVENT_REGISTRY_API_KEY,
        });
        const returnInfo = new eventregistry_1.ReturnInfo({
            eventInfo: new eventregistry_1.EventInfoFlags({ imageCount: 3 }),
        });
        const categoryUris = yield Promise.all(categories.map((name) => eventRegistry.getCategoryUri(name)));
        const countryUri = yield eventRegistry.getLocationUri(country);
        const queryEventsIter = new eventregistry_1.QueryEventsIter(eventRegistry, {
            sortBy: 'rel',
            returnInfo: returnInfo,
            lang: 'eng',
            minArticlesInEvent: 5,
            locationUri: countryUri,
            categoryUri: eventregistry_1.QueryItems.OR(categoryUris),
        });
        const rawEvents = yield new Promise((res, rej) => {
            const rawEvents = [];
            queryEventsIter.execQuery((event) => rawEvents.push(event), () => res(rawEvents));
        });
        return toEvents(rawEvents);
    });
}
exports.getEventFeed = getEventFeed;
function getEvent(eventUri) {
    return __awaiter(this, void 0, void 0, function* () {
        const eventRegistry = new eventregistry_1.EventRegistry({
            apiKey: process.env.EVENT_REGISTRY_API_KEY,
        });
        const returnInfo = new eventregistry_1.ReturnInfo({
            eventInfo: new eventregistry_1.EventInfoFlags({ imageCount: 3 }),
        });
        const queryEvent = new eventregistry_1.QueryEvent(eventUri);
        queryEvent.setRequestedResult(new eventregistry_1.RequestEventInfo(returnInfo));
        let result = yield eventRegistry.execQuery(queryEvent);
        result = result[eventUri].info;
        return {
            uri: result.uri,
            title: result.title.eng,
            summary: result.summary.eng,
            date: result.eventDate,
            imageUrls: result.images,
        };
    });
}
function getArticles(eventUri) {
    return __awaiter(this, void 0, void 0, function* () {
        const eventRegistry = new eventregistry_1.EventRegistry({
            apiKey: process.env.EVENT_REGISTRY_API_KEY,
        });
        const returnInfo = new eventregistry_1.ReturnInfo({
            sourceInfo: new eventregistry_1.SourceInfoFlags({ image: true }),
        });
        const queryEventArticlesIter = new eventregistry_1.QueryEventArticlesIter(eventRegistry, eventUri, {
            lang: 'eng',
            sortBy: 'cosSim',
            returnInfo: returnInfo,
            articleBatchSize: 5,
        });
        let rawArticles = yield new Promise((res, rej) => {
            const rawArticles = [];
            queryEventArticlesIter.execQuery((article) => rawArticles.push(article), () => res(rawArticles));
        });
        const sourcesSet = new Set();
        rawArticles = rawArticles.filter((article) => {
            const title = article.source.title;
            if (sourcesSet.has(title)) {
                return false;
            }
            else {
                sourcesSet.add(title);
                return true;
            }
        });
        const articles = rawArticles.map((article) => ({
            uri: article.uri,
            url: article.url,
            title: article.title,
            body: article.body,
            date: article.date,
            time: article.time,
            sourceName: article.source.title,
            sourceLogoUrl: article.source.thumbImage,
        }));
        return articles;
    });
}
function getDetails(eventUri) {
    return __awaiter(this, void 0, void 0, function* () {
        const [event, articles] = yield Promise.all([
            yield getEvent(eventUri),
            yield getArticles(eventUri),
        ]);
        return { event, articles };
    });
}
exports.getDetails = getDetails;
function compareArticles(article1, article2) {
    return __awaiter(this, void 0, void 0, function* () {
        // Not implemented yet
    });
}
exports.compareArticles = compareArticles;
function toEvents(rawEvents) {
    const events = rawEvents.map((event) => ({
        uri: event.uri,
        title: event.title.eng,
        summary: event.summary.eng,
        date: event.eventDate,
        imageUrls: event.images,
    }));
    return events;
}
