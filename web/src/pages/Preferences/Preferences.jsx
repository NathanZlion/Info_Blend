import PrimaryButton from '../../components/PrimaryButton'
import InNavbar from '../../components/InNavbar'
import Checkbox from '../../components/Checkbox'
import {
  interests as allInterests,
  countries,
} from '../../utils/country-and-interests'

const Preferences = () => {
  const email = 'abebe@gmail.com'
  const name = 'Abebe'
  const password = '123456'
  const interestNames = allInterests.slice(0, 3).map(({ name }) => name)
  const country = 'Ethiopia'

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const name = formData.get('name')
    const password = formData.get('password')
    const interests = formData.getAll('interests')
    const country = formData.get('country')

    alert(JSON.stringify({ email, name, password, interests, country }))
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
                type='password'
                name='password'
                // required
                className='w-full border rounded-[9px] p-2'
                defaultValue={password}
              />
            </div>

            <div className='flex flex-col gap-3'>
              <p>Interests</p>

              <div className='flex flex-wrap gap-3'>
                {allInterests.map(({ title, name }, i) => (
                  <Checkbox
                    key={i}
                    title={title}
                    group={'interests'}
                    value={name}
                    checked={interestNames.includes(name)}
                  />
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <p>Country</p>
              <select name='country' className='p-3' defaultValue={country}>
                {countries.map(({ title, name }, i) => (
                  <option key={i} value={name}>
                    {title}
                  </option>
                ))}
              </select>
            </div>

            <div className='flex justify-end'>
              <PrimaryButton title={'Save'} type='submit' />
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Preferences
