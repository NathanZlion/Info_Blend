import PrimaryButton from '../../components/PrimaryButton'
import Checkbox from '../../components/Checkbox'
import {
  interests as allInterests,
  countries,
} from '../../utils/country-and-interests'



export default function Regester({ email, code }) {
  return (
    <section className='px-[2rem]'>
      <form className='max-w-[500px] m-auto flex flex-col gap-[50px] py-[54px]'>
        <h2 className='text-[30px] text-center mb-[30px]'>
          Fill your information
        </h2>
        <div>
          <p>Name</p>
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
          <PrimaryButton title={'Finish'} />
        </div>
      </form>
    </section>
  )
}
