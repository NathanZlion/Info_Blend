import OutNavbar from '../../components/OutNavbar'
import PrimaryButton from '../../components/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/user'
import { useState } from 'react'
import LoadingSpinner from '../../components/LoadingSpinner'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const onSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    try {
      setIsLoading(true)
      await login({email, password})
      navigate('/feed')
    } catch (err) {
      alert(err.message)
    } finally {
      setIsLoading(false)
    }

    //go to home page
  }
  return (
    <main className='bg-[#F5F5F5] min-h-screen'>
      <OutNavbar />
      <section className='px-[2rem]'>
        <form
          onSubmit={onSubmit}
          className='max-w-[500px] m-auto flex flex-col gap-[50px] py-[54px]'
        >
          <h2 className='text-[30px] text-center mb-[30px]'>Login</h2>
          <div>
            <p>Email</p>
            <input
              type='email'
              name='email'
              // required
              className='w-full border rounded-[9px] p-3 mt-[10px]'
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type='password'
              name='password'
              // required
              className='w-full border rounded-[9px] p-3 mt-[10px]'
            />
          </div>

          <div className='flex justify-end'>
            {isLoading ? (
              <div className='flex items-center gap-3'>
                <LoadingSpinner />
                <p>Loggin In</p>
              </div>
            ) : (
              <PrimaryButton title={'Login'} type='submit' />
            )}
          </div>
        </form>
      </section>
    </main>
  )
}

export default Login
