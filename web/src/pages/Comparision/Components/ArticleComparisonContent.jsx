export default function ArticleComparisonContent({ comparison }) {
  const [article1, article2] = comparison

  const minLength = Math.min(article1.content.length, article2.content.length)

  let chunks = []
  for (let i = 0; i < minLength; i++) {
    chunks.push([article1.content[i], article2.content[i]])
  }

  return (
    <div>
      {chunks.map(([chunk1, chunk2]) => {
        return (
          <div>
            <ArticleChunk
              direction='Left'
              chunkContent={chunk1}
              imgLogoUrl={article1.sourceLogoUrl}
            />
            <ArticleChunk
              direction='Right'
              chunkContent={chunk2}
              imgLogoUrl={article2.sourceLogoUrl}
            />
          </div>
        )
      })}
    </div>
  )
}

function ArticleChunk({ direction = 'Left', chunkContent, imgLogoUrl }) {
  const { sentence, conflicts } = chunkContent
  let textColor = 'white'
  if (conflicts === 'true') {
    textColor = 'red'
  } else if (conflicts === 'false') {
    // a very bright green
    textColor = '#00ff00'
    
  }

  if (!chunkContent.sentence) {
    return <></>
  }
  return (
    <div
      className='flex'
      style={{
        justifyContent: direction === 'Left' ? 'flex-start' : 'flex-end',
      }}
    >
      <div className='flex gap-3 my-2 mx-0.5 p-2.5 rounded-2xl bg-gray-900 w-[85%] md:w-[60%]'>
        <img
          className='w-10 md:w-12 h-10 md:h-12 rounded-full'
          src={imgLogoUrl}
          alt='news source logo'
        />
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center'>
            <div style={{ color: textColor }} className='text-lg'>
              {sentence}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
