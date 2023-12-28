import searchImg from './assets/search.svg'
import PrimaryButton from '../../components/PrimaryButton'

export default function SearchBar({ onSearch }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSearch(e.target.search.value)
      }}
      className='flex flex-col gap-3 items-center lg:flex-row lg:justify-center'
    >
      <div className='relative'>
        <input
          type='text'
          name='search'
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
        <PrimaryButton title={'Search'} type={'submit'} />
      </div>
    </form>
  )
}
