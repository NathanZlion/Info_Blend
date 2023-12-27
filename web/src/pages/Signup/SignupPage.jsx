import OutNavbar from '../../components/OutNavbar'
import { useState } from 'react'

import SendCode from './SendCode'
import VerifyCode from './VerifyCode'
import Regester from './Regester'

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
