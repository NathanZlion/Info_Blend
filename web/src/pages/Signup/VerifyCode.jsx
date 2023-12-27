import PrimaryButton from '../../components/PrimaryButton'

export default function VerifyCode({ next, back }) {
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
