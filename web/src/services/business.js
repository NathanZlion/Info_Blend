import serverPath from './server-path'
import errorIfNotOk from './error-if-not-ok'
import { getJwt, storeJwt, removeJwt } from './jwt'

export async function fetchArticlesByEventId(id) {
  const endPoint = `${serverPath}/news/articles/${id}`
  const response = await fetch(endPoint)

  await errorIfNotOk(response)

  // uri, url, title, body, date, time, sourceName, sourceLogoUrl
  const { articles } = await response.json()
  return articles
}

export async function fetchComparison({ article1, article2 }) {
  const endPoint = `${serverPath}/news/compare`
  const response = await fetch(endPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getJwt()}`,
    },
    body: JSON.stringify({ article1, article2 }),
  })

  await errorIfNotOk(response)

  const { comparison } = await response.json()
  return comparison
}

export async function fetchFeedEvents() {
  const endPoint = `${serverPath}/news`
  const response = await fetch(endPoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getJwt()}`,
    },
  })

  await errorIfNotOk(response)

  const { events } = await response.json()
  //uri, titie, summary, date as string, imageUrls
  return events
}

export async function searchEvents(searchString) {
  const endPoint = `${serverPath}/news/search?q=${searchString}`
  const response = await fetch(endPoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getJwt()}`,
    },
  })

  await errorIfNotOk(response)

  const { message, query, events } = await response.json()
  //uri, title, summary, date as string, imageUrls
  return events
}

export async function fetchEvent(id) {
  const endPoint = `${serverPath}/news/${id}`
  const response = await fetch(endPoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getJwt()}`,
    },
  })

  await errorIfNotOk(response)
  const { event, articles } = await response.json()
  //event has title, summary, date as string, imageUrls
  //articles uri, url, title, body, date, time, sourceName, sourceLogoUrl

  return { event, articles }
}
