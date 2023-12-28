import PrimaryButton from '../../components/PrimaryButton'
import { useState } from 'react'
import { verifyCode } from '../../services/user'
import LoadingSpinner from '../../components/LoadingSpinner'

export default function VerifyCode({ email, next, back }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const verificationCode = e.target.code.value
    try {
      setIsLoading(true)
      const { token: signupToken } = await verifyCode({
        email,
        verificationCode,
      })
      next(signupToken)
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
        <h2 className='text-[30px] text-center mb-[30px]'>Confirm your code</h2>
        <div>
          <p>Verification Code</p>
          <input
            type='text'
            name='code'
            required
            className='w-full border rounded-[9px] p-3 mt-[10px]'
          />
        </div>

        <div className='flex justify-between'>
          {isLoading ? (
            <div className='flex items-center gap-3'>
              <LoadingSpinner />
              <p>Checking Verification Code</p>
            </div>
          ) : (
            <>
              <PrimaryButton title={'Back'} onClick={back} />
              <PrimaryButton title={'Next'} type='submit' />
            </>
          )}
        </div>
      </form>
    </section>
  )
}
