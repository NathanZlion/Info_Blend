import LoadingSpinner from '../../../components/LoadingSpinner'
import ArticleComparisonContent from './ArticleComparisonContent'
import ComparisonLoading from './ComparisonLoading'
import ComparisonPlaceHolder from './ComparisonPlaceHolder'

export default function ArticleComparison({ isLoading, comparison }) {
  return isLoading ? (
    <ComparisonLoading />
  ) : (
    (() => {
      if (comparison) {
        return <ArticleComparisonContent comparison={comparison} />
      } else {
        return <ComparisonPlaceHolder />
      }
    })()
  )
}
