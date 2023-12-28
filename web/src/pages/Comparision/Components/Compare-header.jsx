import { useEffect } from 'react'
import PrimaryButton from '../../../components/PrimaryButton'
import { fetchComparison } from '../../../services/business'
import { FaCodeCompare } from 'react-icons/fa6'

export default function CompareHeader({
  article1,
  article2,
  changeNewsSource1,
  changeNewsSource2,
  setComparison,
  setIsLoading,
  articleOptions,
}) {
  return (
    <section className='flex flex-row items-center justify-center gap-3'>
      <div className='flex flex-col lg:flex-row gap-3 '>
        <Dropdown
          title='Article 1'
          changeNewsSource={changeNewsSource1}
          articleOptions={articleOptions}
          selfArticleUri={article1}
          otherArticleUri={article2}
        />
        <Dropdown
          title='Article 2'
          changeNewsSource={changeNewsSource2}
          articleOptions={articleOptions}
          selfArticleUri={article2}
          otherArticleUri={article1}
        />
      </div>

      <div className='flex-none'>
        <PrimaryButton
          title={'Compare'}
          leadingIcon={<FaCodeCompare />}
          onClick={async () => {
            if (!article1 || !article2) {
              alert('Please select two articles to compare')
              return
            }
            setIsLoading(true)
            try {
              const comparison = await fetchComparison({ article1, article2 })
              setComparison(comparison)
            } catch (e) {
              alert(e.message)
            } finally {
              setIsLoading(false)
            }
          }}
        />
      </div>
    </section>
  )
}

function Dropdown({
  title,
  changeNewsSource,
  articleOptions,
  selfArticleUri,
  otherArticleUri,
}) {
  return (
    <div>
      <select
        className='border p-2 rounded-full flex-1 w-full'
        onChange={(e) => changeNewsSource(e.target.value)}
        value={selfArticleUri || ''}
      >
        <option value={null}>Select {title}</option>
        {articleOptions &&
          articleOptions
            .filter((a) => a.uri !== otherArticleUri)
            .map((article) => (
              <option value={article.uri} key={article.uri}>
                {article.sourceName}
              </option>
            ))}
      </select>
    </div>
  )
}
