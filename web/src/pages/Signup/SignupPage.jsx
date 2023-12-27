import OutNavbar from '../../components/OutNavbar'
import { useState } from 'react'

import SendCode from './SendCode'
import VerifyCode from './VerifyCode'
import Regester from './Regester'

const Signup = () => {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState(null)
  const [signupToken, setSignupToken] = useState(null)

  const sendCodeNext = (email) => {
    setEmail(email)
    setStep(2)
  }

  const verifyCodeNext = (signupToken) => {
    setSignupToken(signupToken)
    setStep(3)
  }

  return (
    <main className='bg-[#F5F5F5] min-h-screen'>
      <OutNavbar />
      {step === 1 && <SendCode next={sendCodeNext} />}
      {step === 2 && (
        <VerifyCode
          email={email}
          next={verifyCodeNext}
          back={() => setStep(1)}
        />
      )}
      {step === 3 && <Regester email={email} signupToken={signupToken} />}
    </main>
  )
}

export default Signup
