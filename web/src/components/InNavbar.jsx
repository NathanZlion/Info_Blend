import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {logout} from '../services/user'

export default function InNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { page: 'Feed', link: '/feed' },
    { page: 'Preferences', link: '/preferences' },
    { page: 'Log Out', link: '/' },
  ]

  return (
    <>
      {/* place holder for the navbar */}
      <div className='w-5 h-[5rem]'></div>

      <div className={'fixed top-0 left-0 w-screen z-10 '}>
        {/* mobile  */}
        <div className='w-full md:hidden'>
          {/* menu closed  */}
          <div className=' grid grid-cols-3 gap-[2rem] bg-gradient-to-r from-[#E47500] to-[#DF7C14] text-white'>
            <button
              className='p-3 font-[500]'
              onClick={() => setIsMenuOpen(true)}
            >
              Menu
            </button>
            <div className='flex justify-center items-center'>
              <Link className='font-bold text-[25px]' to={'/'}>
                INFOBLENDER
              </Link>
            </div>
          </div>

          {/* menu open  */}
          <motion.div
            className='fixed top-0 left-0 w-screen z-20  flex'
            initial={{ x: '-100%' }}
            animate={{ x: isMenuOpen ? '-10%' : '-100%' }}
          >
            <div
              className={`
              flex-[3] h-screen text-white bg-[#E47500] shadow-2xl
              flex flex-col justify-between items-center py-[3rem]`}
            >
              <Link className='font-bold text-[25px]' to={'/'}>
                INFOBLENDER
              </Link>
              <nav>
                <ul className='flex flex-col gap-[60px] font-[600] text-[20px] list-disc'>
                  <Link to={'/feed'}>Feed</Link>
                  <Link to={'/preferences'}>Preferences</Link>
                  <Link onClick={logout} to={'/'}>Log Out</Link>
                </ul>
              </nav>
              <div></div>
            </div>
            <div className='flex-1' onClick={() => setIsMenuOpen(false)}></div>
          </motion.div>
        </div>
        <div className='hidden md:block  px-[2rem] py-[16px] bg-gradient-to-r from-[#E47500] to-[#DF7C14] text-white'>
          <nav className='flex flex-col gap-3 md:flex-row justify-between items-center max-w-[1300px] m-auto'>
            <Link className='font-bold text-[25px]' to={'/'}>
              INFOBLENDER
            </Link>
            <div className='flex gap-5 md:gap-[80px] items-center'>
              <Link to={'/feed'}>Feed</Link>
              <Link to={'/preferences'}>Preferences</Link>
              <Link onClick={logout} to={'/'}>Log Out</Link>
            </div>
          </nav>
        </div>

        <div></div>
      </div>
    </>
  )
}
