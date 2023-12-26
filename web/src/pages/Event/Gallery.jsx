import useEmblaCarousel from 'embla-carousel-react'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'

export default function Gallery({ imageUrls }) {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  return (
    <div className='flex flex-col gap-3'>
      <div ref={emblaRef} className='overflow-hidden'>
        <div className='flex gap-3 cursor-pointer'>
          {imageUrls.map((imageUrl, i) => (
            <img
              key={i}
              src={imageUrl}
              className='max-w-full h-[500px] object-cover rounded-3'
            />
          ))}
        </div>
      </div>

      <div className='flex justify-center gap-3'>
        <button onClick={() => emblaApi?.scrollPrev()}>
          <IoMdArrowBack />
        </button>
        <button onClick={() => emblaApi?.scrollNext()}>
          <IoMdArrowForward />
        </button>
      </div>
    </div>
  )
}
