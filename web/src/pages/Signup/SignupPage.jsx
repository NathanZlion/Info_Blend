import OutNavbar from '../../components/OutNavbar'
import PrimaryButton from '../../components/PrimaryButton'
import { useState } from 'react'
import Checkbox from '../../components/Checkbox'
import {
  interests as allInterests,
  countries,
} from '../../utils/country-and-interests'

function SendCode({ next }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.email.value)

    next()
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
            // required
            className='w-full border rounded-[9px] p-3 mt-[10px]'
          />
        </div>

        <div className='flex justify-end'>
          <PrimaryButton title={'Send Verfification Code'} type='submit' />
        </div>
      </form>
    </section>
  )
}

function VerifyCode({ next, back }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.code.value)

    next()
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
            // required
            className='w-full border rounded-[9px] p-3 mt-[10px]'
          />
        </div>

        <div className='flex justify-between'>
          <PrimaryButton title={'Back'} onClick={back} />
          <PrimaryButton title={'Next'} type='submit' />
        </div>
      </form>
    </section>
  )
}

function Regester({ email, code }) {
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

const Signup = () => {
  const [step, setStep] = useState(1)

  return (
    <main className='bg-[#F5F5F5] min-h-screen'>
      <OutNavbar />
      {step === 1 && <SendCode next={() => setStep(2)} />}
      {step === 2 && (
        <VerifyCode next={() => setStep(3)} back={() => setStep(1)} />
      )}
      {step === 3 && <Regester />}
    </main>
  )
}

export default Signup
