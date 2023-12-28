import PrimaryButton from '../../components/PrimaryButton'
import InNavbar from '../../components/InNavbar'
import Checkbox from '../../components/Checkbox'
import {
  interests as allInterests,
  countries,
} from '../../utils/country-and-interests'
import { getProfile, updateProfile } from '../../services/user'
import LoadingSpinner from '../../components/LoadingSpinner'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Preferences = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [interests, setInterests] = useState([])
  const [country, setCountry] = useState('')

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsFetching(true)
        const { name, email, password, interests, country } = await getProfile()
        setName(name)
        setEmail(email)
        setPassword(password)
        setInterests(interests)
        setCountry(country)
      } catch (error) {
        alert(error.message)
      } finally {
        setIsFetching(false)
      }
    }
    fetchProfile()
  }, [])


  const handleChangeInterest = (value) => {
    if (interests.includes(value)) {
      setInterests(interests.filter((interest) => interest != value))
    } else {
      setInterests([ ... interests, value])
    }
  }

  const handleChangeCountry = (value) => {
    setCountry(value);
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const userName = formData.get('name')
    const password = formData.get('password')
    const interests = formData.getAll('interests')
    const country = formData.get('country')

    console.log(password)
    const newProfile = { userName, interests, country, password }

    try {
      setIsUpdating(true)
      await updateProfile(newProfile)
    } catch (error) {
      alert(error.message)
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className='bg-[#F5F5F5]'>
      <InNavbar />
      <main className='min-h-screen'>
        <section className='px-[2rem] py-12'>
          <form
            onSubmit={onSubmit}
            className='max-w-[500px] m-auto flex flex-col gap-6'
          >
            {isFetching && <LoadingSpinner />}
            <h2 className='text-[30px] text-center mb-[30px]'>
              Your Info and Preferences
            </h2>
            <div className='flex flex-col gap-3'>
              <p>Email</p>

              <input
                type='email'
                name='email'
                // required
                disabled
                className='w-full border rounded-[9px] p-2 text-[grey]'
                defaultValue={email}
              />
            </div>
            <div className='flex flex-col gap-3'>
              <p>Name</p>
              <input
                type='text'
                name='name'
                // required
                className='w-full border rounded-[9px] p-2'
                defaultValue={name}
              />
            </div>
            <div className='flex flex-col gap-3'>
              <p>Password</p>
              <input
                type='text'
                name='password'
                // required
                placeholder='Enter new password to replace'
                className='w-full border rounded-[9px] p-2'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <p>Interests</p>

              <div className='flex flex-wrap gap-3'>
                {allInterests.map(({ title, name }, i) => (
                  <Checkbox
                    key={name}
                    title={title}
                    group={'interests'}
                    value={name}
                    onChanged = {handleChangeInterest}
                    defaultChecked={interests.includes(name)}
                  />
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <p>Country</p>
              <select name='country' className='p-3' value={country} onChange={(e) => {handleChangeCountry(e.target.value)}} >
                {countries.map(({ title, name }, i) => {
                  return (
                    <option key={i} value={name}>
                      {title}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className='flex justify-end'>
              {isUpdating ? (
                <div className='flex items-center gap-3'>
                  <LoadingSpinner />
                  <p>Saving</p>
                </div>
              ) : (
                <PrimaryButton title={'Save'} type='submit' />
              )}
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Preferences
