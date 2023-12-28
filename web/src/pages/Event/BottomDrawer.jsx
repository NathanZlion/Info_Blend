import { IoMdArrowUp, IoMdArrowDown } from 'react-icons/io'
import PrimaryButton from '../../components/PrimaryButton'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'



export default function BottomDrawer({ article, articles, onSelectArticle }) {
  const [isOpen, setIsOpen] = useState(false)
  const { id } = useParams()

  return (
    <motion.div
    style={{boxShadow:'0 0 20px 0 rgba(0,0,0,0.2)'}}
      className={`
        fixed bottom-0 left-0 w-screen bg-white
        border rounded-5 z-10
      `}
      initial={{ y: 'calc(100% - 3rem)' }}
      animate={{ y: isOpen ? 'calc(22%)' : 'calc(94%)' }}
    >
      <button className=' p-3 w-full' onClick={() => setIsOpen(!isOpen)}>
        <div className='flex justify-center'>
          {isOpen ? <IoMdArrowDown /> : <IoMdArrowUp />}
        </div>
      </button>

      <div className='flex flex-col gap-3 '>
        <p className='font-semibold text-2xl text-center'>Choose Article</p>
        <div
          className={`
            py-3 flex flex-col gap-3 items-center 
            max-h-[50vh] overflow-y-scroll
            border-t border-b
          `}
        >
          {articles.map((ithArticle, i) => (
            <button
              key={i}
              onClick={() => {
                setIsOpen(false)
                onSelectArticle(i)
              }}
              className={`rounded text-start px-2 py-1  ${
                ithArticle.uri === article.uri
                  ? 'bg-[#E47500] text-white'
                  : ' font-light'
              }`}
            >
              {ithArticle.sourceName}
            </button>
          ))}
        </div>

        <div className='flex justify-center pb-3'>
        <Link to={'/compare/event/' + id}>
          <PrimaryButton
            title={
              <>
                <span>Compare Articles</span>{' '}
                <span className='pl-3 text-xs'>BETA</span>
              </>
            }
          />
        </Link>
        </div>

        <div className='h-[10rem]'></div>
      </div>
    </motion.div>
  )
}
