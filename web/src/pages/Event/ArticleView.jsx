import { FaExternalLinkAlt } from 'react-icons/fa'
import SideBar from './SideBar'
import BottomDrawer from './BottomDrawer'

export default function ArticleView({
  articleIndex,
  articles,
  onSelectArticle,
}) {
  const article = articles[articleIndex]
  const { sourceName, title, url, body, date } = article
  return (
    <section>
      <p className='text-[#E47500] font-bold pb-3'>
        {sourceName.toUpperCase()}
      </p>

      <div className='md:flex gap-[6rem]'>
        <div className='flex-[2] flex flex-col gap-3'>
          <h2 className='font-semibold text-2xl'>{title}</h2>

          <a
            className='flex gap-[0.5rem] items-center font-light'
            href={url}
            target='_blank'
          >
            Read on {sourceName} <FaExternalLinkAlt className='h-[0.8rem]' />
          </a>

          <p className='font-light'>{new Date(date).toDateString()}</p>

          <p> {body}</p>
        </div>

        <div className='flex-1 hidden md:block'>
          <SideBar
            article={article}
            articles={articles}
            onSelectArticle={onSelectArticle}
          />
        </div>
      </div>
      <div className='md:hidden pb-12 md:pb-0'>
        <BottomDrawer
          article={article}
          articles={articles}
          onSelectArticle={onSelectArticle}
        />
      </div>
    </section>
  )
}
