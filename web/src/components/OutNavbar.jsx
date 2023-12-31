import { Link } from 'react-router-dom'

export default function OutNavbar() {
  return (
    <div className='px-[2rem] py-[16px] bg-gradient-to-r from-[#E47500] to-[#DF7C14] text-white'>
      <nav className='flex flex-col gap-3 md:flex-row justify-between items-center max-w-[1300px] m-auto'>
        <Link className='font-bold text-[25px]' to={'/'}>
          INFOBLENDER
        </Link>
        <div className='flex gap-5 md:gap-[80px] items-center'>
          <Link to={'/signup'}>Sign Up</Link>
          <Link
            className='text-[#DC7000] bg-[white] px-[28px] py-[10px] rounded'
            to={'/login'}
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  )
}
