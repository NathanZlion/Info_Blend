import {
  EventRegistry,
  QueryEventsIter,
  QueryItems,
  ReturnInfo,
  QueryEventArticlesIter,
} from 'eventregistry'

import { config } from 'dotenv'
config()

function toEvents(rawEvents) {
  const events = rawEvents.map((event) => ({
    uri: event.uri,
    title: event.title.eng,
    summary: event.summary.eng,
    date: event.eventDate,
    imageUrls: event.images,
  }))

  return events
}

async function searchForEvents(searchString) {
  const eventRegistry = new EventRegistry({
    apiKey: process.env.EVENT_REGISTRY_API_KEY,
  })

  const conceptUris = await Promise.all(
    searchString.split(' ').map((word) => eventRegistry.getConceptUri(word))
  )

  const queryEventsIter = new QueryEventsIter(eventRegistry, {
    sortBy: 'rel',
    lang: 'eng',
    returnInfo: new ReturnInfo(),
    maxItems: 7,
    conceptUri: QueryItems.OR(conceptUris),
  })

  const rawEvents = await new Promise((res, rej) => {
    const events = []
    queryEventsIter.execQuery(
      (event) => events.push(event),
      () => res(events)
    )
  })

  return toEvents(rawEvents)
}

async function getEventFeed({ categories, country }) {
  const eventRegistry = new EventRegistry({
    apiKey: process.env.EVENT_REGISTRY_API_KEY,
  })

  const categoryUris = await Promise.all(
    categories.map((name) => eventRegistry.getCategoryUri(name))
  )

  const countryUri = await eventRegistry.getLocationUri(country)

  const queryEventsIter = new QueryEventsIter(eventRegistry, {
    sortBy: 'rel',
    returnInfo: new ReturnInfo(),
    lang: 'eng',
    minArticlesInEvent: 5,
    locationUri: countryUri,
    categoryUri: QueryItems.OR(categoryUris),
  })

  const rawEvents = await new Promise((res, rej) => {
    const rawEvents = []
    queryEventsIter.execQuery(
      (event) => rawEvents.push(event),
      () => res(rawEvents)
    )
  })

  return toEvents(rawEvents)
}

// getEventFeed({categories: ['politics'], country:'Ethiopia'}).then(a=>console.log(a))

async function getArticles(eventUri) {
  const eventRegistry = new EventRegistry({
    apiKey: process.env.EVENT_REGISTRY_API_KEY,
  })

  const queryEventArticlesIter = new QueryEventArticlesIter(
    eventRegistry,
    eventUri,
    {
      lang: 'eng',
      sortBy: 'cosSim',
      articleBatchSize: 5,
      returnInfo: new ReturnInfo(),
    }
  )

  let rawArticles = await new Promise((res, rej) => {
    const rawArticles = []
    queryEventArticlesIter.execQuery(
      (article) => rawArticles.push(article),
      () => res(rawArticles)
    )
  })

  const sourcesSet = new Set()
  rawArticles = rawArticles.filter((article) => {
    const title = article.source.title
    if (sourcesSet.has(title)) {
      return false
    } else {
      sourcesSet.add(title)
      return true
    }
  })

  const articles = rawArticles.map((article) => ({
    uri: article.uri,
    url: article.url,
    title: article.title,
    body: article.body,
    date: article.date,
    time: article.time,
    sourceName: article.source.title,
    sourceLogoUrl: article.source.thumbImage,
  }))

  return articles
}
getArticles('eng-8837729').then(a=>console.log(a))

async function searchNews(searchString) {
  const events = await searchForEvents(searchString)
  const newsPromises = events.map(async (event) => {
    const articles = await getArticles(event.uri)
    const news = { event, articles }
    return news
  })
  const newsList = await Promise.all(newsPromises)
  return newsList
}

async function getNewsFeed({ categories, country }) {
  const events = await getEventFeed({ categories, country })
  const newsPromises = events.map(async (event) => {
    const articles = await getArticles(event.uri)
    const news = { event, articles }
    return news
  })
  const newsList = await Promise.all(newsPromises)
  return newsList
}

export { searchNews, getNewsFeed }

// searchNews('ukraine war').then((n) => console.log(n))
// getNewsFeed({ categories: ['politics', 'sport'], country: 'Ethiopia' }).then(
//   (n) => console.log(n)
// )
