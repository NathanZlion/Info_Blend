import PrimaryButton from '../../components/PrimaryButton'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function SideBar({ article, articles, onSelectArticle }) {
  const { id } = useParams()
  return (
    <div className='flex flex-col gap-3 '>
      <p className='font-semibold text-2xl'>Choose Article</p>
      <div className='py-3 flex flex-col gap-3 items-start '>
        {articles.map((ithArticle, i) => (
          <button
            key={i}
            onClick={() => onSelectArticle(i)}
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

      <div>
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
    </div>
  )
}
