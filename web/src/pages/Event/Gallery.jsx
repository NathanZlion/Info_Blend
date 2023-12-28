import useEmblaCarousel from 'embla-carousel-react'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'

export default function Gallery({ imageUrls }) {
  const noImage = imageUrls.length === 0
  const oneImage = imageUrls.length === 1
  const manyImages = imageUrls.length > 1

  const [emblaRef, emblaApi] = useEmblaCarousel()
  return (
    <div className='flex flex-col gap-3'>
      {noImage && <hr/>}

      {oneImage && (
        <img
          src={imageUrls[0]}
          className='max-w-full h-[500px] object-cover rounded-3'
        />
      )}

      {manyImages && (
        <>
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
        </>
      )}
    </div>
  )
}
