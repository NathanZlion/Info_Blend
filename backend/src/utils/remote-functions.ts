import {
  EventRegistry,
  QueryEventsIter,
  QueryItems,
  ReturnInfo,
  QueryEventArticlesIter,
  QueryEvent,
  RequestEventInfo,
  EventInfoFlags,
  SourceInfoFlags
} from 'eventregistry'

import { config } from 'dotenv'
import { Data } from 'eventregistry/dist/data';

config()


async function searchForEvents(searchString: string) {
  const eventRegistry = new EventRegistry({
    apiKey: process.env.EVENT_REGISTRY_API_KEY,
  });

  const returnInfo = new ReturnInfo({
    eventInfo: new EventInfoFlags({ imageCount: 3 }),
  });

  const conceptUris = await Promise.all(
    searchString.split(' ').map((word) => eventRegistry.getConceptUri(word))
  );

  const queryEventsIter = new QueryEventsIter(eventRegistry, {
    sortBy: 'rel',
    lang: 'eng',
    returnInfo: returnInfo,
    maxItems: 7,
    conceptUri: QueryItems.OR(conceptUris),
  });

  const rawEvents = await new Promise((res, rej) => {
    const events: Data.Event[] = []
    queryEventsIter.execQuery(
      (event) => events.push(event),
      () => res(events)
    )
  });

  return toEvents(rawEvents);
}

async function getEventFeed({ categories, country }: { categories: string[], country: string }) {
  const eventRegistry = new EventRegistry({
    apiKey: process.env.EVENT_REGISTRY_API_KEY,
  });

  const returnInfo = new ReturnInfo({
    eventInfo: new EventInfoFlags({ imageCount: 3 }),
  });

  const categoryUris = await Promise.all(
    categories.map((name: string) => eventRegistry.getCategoryUri(name))
  );

  const countryUri = await eventRegistry.getLocationUri(country);

  const queryEventsIter = new QueryEventsIter(eventRegistry, {
    sortBy: 'rel',
    returnInfo: returnInfo,
    lang: 'eng',
    minArticlesInEvent: 5,
    locationUri: countryUri,
    categoryUri: QueryItems.OR(categoryUris),
  });

  const rawEvents = await new Promise((res, rej) => {
    const rawEvents: Data.Event[] = []
    queryEventsIter.execQuery(
      (event) => rawEvents.push(event),
      () => res(rawEvents)
    )
  });

  return toEvents(rawEvents);
}

async function getEvent(eventUri: string) {
  const eventRegistry = new EventRegistry({
    apiKey: process.env.EVENT_REGISTRY_API_KEY,
  });

  const returnInfo = new ReturnInfo({
    eventInfo: new EventInfoFlags({ imageCount: 3 }),
  });

  const queryEvent = new QueryEvent(eventUri);
  queryEvent.setRequestedResult(new RequestEventInfo(returnInfo));
  let result = await eventRegistry.execQuery(queryEvent);
  result = result[eventUri].info;

  return {
    uri: result.uri,
    title: result.title.eng,
    summary: result.summary.eng,
    date: result.eventDate,
    imageUrls: result.images,
  };
}


async function getArticles(eventUri: string) {
  const eventRegistry = new EventRegistry({
    apiKey: process.env.EVENT_REGISTRY_API_KEY,
  });

  const returnInfo = new ReturnInfo({
    sourceInfo: new SourceInfoFlags({ image: true }),
  });

  const queryEventArticlesIter = new QueryEventArticlesIter(
    eventRegistry,
    eventUri,
    {
      lang: 'eng',
      sortBy: 'cosSim',
      returnInfo: returnInfo,
      articleBatchSize: 5,
    }
  );

  let rawArticles: Data.Article[] = await new Promise((res, rej) => {
    const rawArticles: Data.Article[] = []
    queryEventArticlesIter.execQuery(
      (article) => rawArticles.push(article),
      () => res(rawArticles)
    )
  });

  const sourcesSet = new Set();
  rawArticles = rawArticles.filter((article) => {
    const title = article.source.title
    if (sourcesSet.has(title)) {
      return false;
    } else {
      sourcesSet.add(title)
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
}


async function getDetails(eventUri: string) {
  const [event, articles] = await Promise.all([
    await getEvent(eventUri),
    await getArticles(eventUri),
  ]);

  return { event, articles };
}


async function compareArticles(article1, article2) {
  // Not implemented yet
}

function toEvents(rawEvents: Data.Event[]) {
  const events = rawEvents.map((event) => ({
    uri: event.uri,
    title: event.title.eng,
    summary: event.summary.eng,
    date: event.eventDate,
    imageUrls: event.images,
  }))

  return events;
}

export { getEventFeed, searchForEvents, getDetails, compareArticles };
