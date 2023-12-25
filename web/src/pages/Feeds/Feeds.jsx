import InNavbar from '../../components/InNavbar'
import searchImg from './assets/search.svg'
import PrimaryButton from '../../components/PrimaryButton'
import timeAgo from '../../utils/time-ago'

function SearchBar({ onFetch }) {
  return (
    <form className='flex flex-col gap-3 items-center lg:flex-row lg:justify-center'>
      <div className='relative'>
        <input
          type='text'
          className='pl-[4rem] py-3 min-w-[400px] rounded-[100px] bg-[#f1f1f1]'
          placeholder='Search For Events'
        />
        <img
          src={searchImg}
          className='absolute top-[50%] left-[2rem] transform -translate-y-[50%]'
          alt=''
        />
      </div>
      <div>
        <PrimaryButton title={'Search'} onClick={() => {}} />
      </div>
    </form>
  )
}

function EventCard({ uri, title, summary, date, imageUrls }) {
  return (
    <div className='flex flex-col md:flex-row gap-3 '>
      <div className=' lg:h-[295px] lg:flex lg:gap-4 md:flex-1 '>
        <img
          src={imageUrls[0]}
          alt={title + 'picture'}
          className='min-h-[225px]  min-w-0 lg:flex-[2] rounded-4  object-cover'
        />

        {imageUrls.length >= 3 && (
          <div className='hidden flex-[1] lg:flex flex-col gap-4'>
            <img
              src={imageUrls[1]}
              className='min-h-0  min-w-0 flex-1 rounded-4  object-cover'
            />

            <img
              src={imageUrls[2]}
              className='min-h-0  min-w-0 flex-1 rounded-4 object-cover'
            />
          </div>
        )}
      </div>
      <div className='flex flex-col gap-3 md:flex-1'>
        <h3 className='font-semibold px-2 lg:text-2xl'>{title}</h3>
        <p className='hidden md:block px-2'> {summary.slice(0, 100)} ...</p>
        <div className='md:flex-1'></div>
        <div className='flex justify-between px-2 lg:items-end'>
          <p>{timeAgo.format(new Date(date))}</p>
          <PrimaryButton title={'Read More'} />
        </div>
      </div>
    </div>
  )
}

const FeedPage = () => {
  const results = [
    {
      uri: 'eng-8875046',
      title: 'Russia attacks Ukraine grain port ahead of Putin-Erdogan talks',
      summary:
        "Blasts reported near Ukraine's Izmail port on the Danube River as Russian and Turkish leaders prepare to hold talks on Ukrainian grain exports.\n" +
        '\n' +
        "Russia has launched an air attack on one of Ukraine's biggest grain exporting ports, hours before Russian President Vladimir Putin and his Turkish counterpart, Recep Tayyip Erdogan, were due to hold talks.\n" +
        '\n' +
        "Ukraine's Air Force on Monday urged residents of Izmail port, one of Ukraine's two major grain-exporting ports on the Danube River in the Odesa regio",
      date: '2023-09-03',
      imageUrls: [
        'https://assets.zerohedge.com/s3fs-public/styles/16_9_max_700/public/2023-09/putinerdsochi1.jpg?h=7dd2c90c&itok=ZccNo_l-',
        'https://d3i6fh83elv35t.cloudfront.net/static/2023/09/2022-09-16T143106Z_1689410715_RC2EIW9OM3U5_RTRMADP_3_UZBEKISTAN-SCO-ERDOGAN-PUTIN-1024x714.jpg',
        'https://media.breitbart.com/media/2023/09/GettyImages-1205321049-2.jpg',
      ],
    },
    {
      uri: 'eng-8843184',
      title:
        'The Netherlands and Denmark will give F-16 fighter jets to Ukraine, the Dutch prime minister says',
      summary:
        "EINDHOVEN, Netherlands (AP) -- The Netherlands and Denmark announced Sunday they will give F-16 warplanes to Ukraine, in a long-awaited announcement that Ukrainian President Volodymyr Zelenskyy called an important motivation for his country's forces that are embroiled in a difficult counteroffensive against Russia.\n The timeline depends on how soon Ukrainian crews and infrastructure are ready for the powerful U.S.-made jets, Dutch Prime Minister Mark Rutte told Zelenskyy as the two visited a Dutc",
      date: '2023-08-21',
      imageUrls: [
        'https://dims.apnews.com/dims4/default/d4ca6c7/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F89%2Fe6%2Fd34b82eb521d8908b37b2cd7de28%2Fdc4b4a5602f84c79aad9e65fed21fc7c',
        'https://media.breitbart.com/media/2023/08/GettyImages-1610888815-e1692720714209.jpg',
        'https://assets.zerohedge.com/s3fs-public/styles/16_9_max_700/public/2023-08/zdn.jpg?itok=aJ8ej_G1',
      ],
    },
    {
      uri: 'eng-8838895',
      title:
        "In Anne Frank's Amsterdam, Ukrainian children's war diaries go on...",
      summary:
        'AMSTERDAM (AP) - The city where Anne Frank wrote her World War II diary while hiding with her family from the brutal Nazi occupation is hosting an exhibition about the Ukraine war with grim echoes of her plight more than three quarters of a century later.\n' +
        'The exhibition that opened at Amsterdam City Hall on Thursday offers a vision of the war in Ukraine as experienced by children caught in the devastating conflict.\n' +
        `"This exhibition is about the pain through the children's eyes," Khrystyna Khran`,
      date: '2023-08-17',
      imageUrls: [
        'https://bloximages.newyork1.vip.townnews.com/newsadvance.com/content/tncms/assets/v3/editorial/9/89/9890d356-4045-5839-8c8d-60287e95bdae/64df8f9ea2e40.preview.jpg?crop=1919%2C1007%2C0%2C36&resize=438%2C230&order=crop%2Cresize',
        'https://bloximages.chicago2.vip.townnews.com/lacrossetribune.com/content/tncms/assets/v3/editorial/c/21/c21d093a-9149-5803-9fd4-ec76e0ca0e94/64df8f9b03bd4.preview.jpg?crop=1919%2C1007%2C0%2C36&resize=438%2C230&order=crop%2Cresize',
        'https://bloximages.newyork1.vip.townnews.com/journalnow.com/content/tncms/assets/v3/editorial/4/41/4414cc2f-2d32-56ca-9a1a-8089e6780fa9/64df8f997b042.preview.jpg?crop=1919%2C1007%2C0%2C36&resize=438%2C230&order=crop%2Cresize',
      ],
    },
  ]

  return (
    <main>
      <InNavbar />
      <section className='py-10 px-[2rem]'>
        <div className='flex flex-col gap-3 max-w-[1200px] m-auto'>

          {/* search bar  */}
          <div className='flex flex-col gap-3 md:py-[90px]'>
            <h2 className='text-4xl font-semibold text-center'>
              What is On Your Mind?
            </h2>
            <SearchBar />
          </div>

          {/* cards  */}
          <div className='py-12 flex flex-col gap-10'>
            {results.map((result, i) => (
              <>
                <EventCard key={i} {...result} />
                {i !== results.length - 1 && <hr />}
              </>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default FeedPage
