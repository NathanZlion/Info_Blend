import PrimaryButton from '../../components/PrimaryButton'
import { sendVerificationCode } from '../../services/user'
import { useState } from 'react'
import LoadingSpinner from '../../components/LoadingSpinner'

export default function SendCode({ next }) {
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    try {
      setIsLoading(true)
      await sendVerificationCode(email)
      next(email)
    } catch (error) {
      alert(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <section className='px-[2rem]'>
      <form
        onSubmit={handleSubmit}
        className='max-w-[500px] m-auto flex flex-col gap-[50px] py-[54px]'
      >
        <h2 className='text-[30px] text-center mb-[30px]'>
          Let's send you a code
        </h2>
        <div>
          <p>Email</p>
          <input
            type='email'
            name='email'
            required
            className='w-full border rounded-[9px] p-3 mt-[10px]'
          />
        </div>

        <div className='flex justify-end'>
          {isLoading ? (
            <div className='flex items-center gap-3'>
              <LoadingSpinner />
              <p>Sending Email</p>
            </div>
          ) : (
            <PrimaryButton title={'Send Verfification Code'} type='submit' />
          )}
        </div>
      </form>
    </section>
  )
}
