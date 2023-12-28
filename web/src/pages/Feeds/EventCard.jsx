import PrimaryButton from '../../components/PrimaryButton'
import timeAgo from '../../utils/time-ago'
import { Link } from 'react-router-dom'

export default function EventCard({ uri, title, summary, date, imageUrls }) {
  return (
    <div className='flex flex-col md:flex-row gap-6 '>
      <div className=' lg:h-[295px] lg:flex lg:gap-3 md:flex-1 '>
        <img
          src={imageUrls[0]}
          alt={title + 'picture'}
          className='min-h-[225px]  min-w-0 lg:flex-[2] rounded-3  object-cover'
        />

        {imageUrls.length >= 3 && (
          <div className='hidden flex-[1] lg:flex flex-col gap-3'>
            <img
              src={imageUrls[1]}
              className='min-h-0  min-w-0 flex-1 rounded-3  object-cover'
            />

            <img
              src={imageUrls[2]}
              className='min-h-0  min-w-0 flex-1 rounded-3 object-cover'
            />
          </div>
        )}
      </div>
      <div className='flex flex-col gap-3 md:flex-1'>
        <h3 className='font-semibold px-2 lg:text-2xl'>{title}</h3>
        <p className='hidden md:flex flex-1 px-2'>
          {' '}
          {summary.slice(0, 100)} ...
        </p>
        <div className='flex justify-between px-2 lg:items-end'>
          <p>{timeAgo.format(new Date(date))}</p>
          <Link to={'/events/'+uri}>
            <PrimaryButton title={'Read More'} />
          </Link>
        </div>
      </div>
    </div>
  )
}
