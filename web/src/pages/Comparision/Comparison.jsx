import { useEffect, useState } from 'react'
import InNavbar from '../../components/InNavbar'
import ArticleComparison from './Components/ArticleComparison'
import CompareHeader from './Components/Compare-header'
import WarningFooter from './Components/WarningFooter'
import { useParams } from 'react-router-dom'
import { fetchArticlesByEventId } from '../../services/business'

export default function Comparison() {
  const [article1, setArticle1] = useState(null)
  const [article2, setArticle2] = useState(null)
  const [articleOptions, setArticleOptions] = useState(null)
  const [comparison, setComparison] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchArticlesByEventId(id)
      setArticleOptions(response)
    }

    fetch()
  }, [])

  return (
    <main className='min-h-screen container-sm flex flex-col gap-6'>
      <InNavbar />
      <h2 className='text-4xl font-semibold text-center'>Compare Articles</h2>

      {/* The selection bar where you select news sources in a dropdown*/}
      <div>
        <CompareHeader
          article1={article1}
          article2={article2}
          changeNewsSource1={setArticle1}
          changeNewsSource2={setArticle2}
          setComparison={setComparison}
          setIsLoading={setIsLoading}
          articleOptions={articleOptions}
        />
      </div>

      <div className='flex-1 flex flex-col border rounded-3xl overflow-hidden'>
        <ArticleComparison isLoading={isLoading} comparison={comparison} />
      </div>

      <WarningFooter />
    </main>
  )
}
