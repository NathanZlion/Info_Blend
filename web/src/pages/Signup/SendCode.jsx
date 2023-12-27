import PrimaryButton from '../../components/PrimaryButton'

export default function SendCode({ next }) {
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
