import InNavbar from '../../components/InNavbar'
import Gallery from './Gallery'
import ArticleView from './ArticleView'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchEvent } from '../../services/business'
import LoadingSpinner from '../../components/LoadingSpinner'

const EventPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [eventDetail, setEventDetail] = useState(null)
  const [articleIndex, setArticleIndex] = useState(0)
  const { id } = useParams()

  useEffect(() => {
    const loadEvent = async () => {
      try {
        setIsLoading(true)
        const {event, articles} = await fetchEvent(id)
        await new Promise((resolve) => setTimeout(resolve, 100))
        setEventDetail({event, articles})
      } catch (err) {
        alert(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadEvent()
  },[])

  const event = eventDetail?.event
  const articles = eventDetail?.articles

  return (
    <>
      <InNavbar />
      <main className='py-12'>
        <div className='px-[2rem]'>
          {isLoading && (
            <div className='min-h-[50vh] flex justify-center items-center'>
              <LoadingSpinner />
            </div>
          )}

          {eventDetail && (
            <div className='max-w-[1200px] m-auto'>
              {/* intro  */}
              <div className='flex flex-col gap-3'>
                <h2 className='text-4xl font-semibold'>{event.title}</h2>
                <p>{event.summary}</p>
              </div>
              <div className=' py-12 '>
                <Gallery imageUrls={event.imageUrls} />
              </div>

              <ArticleView
                articleIndex={articleIndex}
                articles={articles}
                onSelectArticle={(i) => setArticleIndex(i)}
              />
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default EventPage
