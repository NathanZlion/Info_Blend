import InNavbar from '../../components/InNavbar'

import SearchBar from './SearchBar'
import EventCard from './EventCard'
import { useEffect, useState } from 'react'
import { fetchFeedEvents, searchEvents } from '../../services/business'
import LoadingSpinner from '../../components/LoadingSpinner'

const FeedPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true)
        const events = await fetchFeedEvents()
        setEvents(events)
      } catch (err) {
        alert(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchEvents()
  }, [])

  const onSearch = async (searchString) => {
    try {
      setIsLoading(true)
      const events = await searchEvents(searchString)
      setEvents(events)
    } catch (err) {
      alert(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main>
      <InNavbar />
      <section className='py-12 px-[2rem]'>
        <div className='flex flex-col gap-3 max-w-[1200px] m-auto'>
          {/* search bar  */}
          <div className='flex flex-col gap-3 md:py-[90px]'>
            <h2 className='text-4xl font-semibold text-center'>
              What is On Your Mind?
            </h2>
            <SearchBar onSearch={onSearch} />
          </div>

          {/* cards  */}
          {isLoading && (
            <div className='min-h-[50vh] flex justify-center items-center'>
              <LoadingSpinner />
            </div>
          )}
          <div className='py-12 flex flex-col gap-12'>
            {events.map((event, i) => (
              <>
                <EventCard key={i} {...event} />
                {i !== events.length - 1 && <hr />}
              </>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default FeedPage
