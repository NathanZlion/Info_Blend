import PrimaryButton from '../../components/PrimaryButton'
import Checkbox from '../../components/Checkbox'
import LoadingSpinner from '../../components/LoadingSpinner'
import {
  interests as allInterests,
  countries,
} from '../../utils/country-and-interests'
import { useState } from 'react'
import { regester } from '../../services/user'
import { useNavigate } from 'react-router-dom'

export default function Regester({ email, signupToken }) {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const userName = formData.get('name')
    const password = formData.get('password')
    const country = formData.get('country')
    const interests = formData.getAll('interests')

    try {
      setIsLoading(true)
      await regester({
        userName,
        password,
        country,
        interests,
        email,
        signupToken,
      })
      navigate('/feed')
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
          Fill your information
        </h2>
        <div>
          <p>Name</p>
          <input
            type='text'
            name='name'
            required
            className='w-full border rounded-[9px] p-3 mt-[10px]'
          />
        </div>

        <div>
          <p>Password</p>
          <input
            type='password'
            name='password'
            required
            className='w-full border rounded-[9px] p-3 mt-[10px]'
          />
        </div>
        <div>
          <p className='pb-3'>Interests</p>

          <div className='flex flex-wrap gap-3'>
            {allInterests.map(({ title, name }, i) => (
              <Checkbox
                key={i}
                title={title}
                group={'interests'}
                value={name}
              />
            ))}
          </div>
        </div>

        <div>
          <p className='pb-3'>Country</p>
          <select name='country' className='py-2 px-5'>
            {countries.map(({ title, name }, i) => (
              <option key={i} value={name}>
                {title}
              </option>
            ))}
          </select>
        </div>

        <div className='flex justify-end'>
          {isLoading ? (
            <div className='flex items-center gap-3'>
              <LoadingSpinner />
              <p>Signing you up!</p>
            </div>
          ) : (
            <PrimaryButton title={'Finish'} type='submit' />
          )}
        </div>
      </form>
    </section>
  )
}
