export default function PrimaryButton({
  title,
  onClick = () => {},
  type = 'button',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className='bg-[#eb7300] text-white px-[30px] py-[12px] rounded-[100px]'
    >
      {title}
    </button>
  )
}
