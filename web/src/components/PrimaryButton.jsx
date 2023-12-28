export default function PrimaryButton({
  title,
  onClick = () => {},
  leadingIcon = null,
  type = 'button',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className='bg-[#eb7300] text-white px-[30px] py-[12px] rounded-[100px] flex flex-row justify-center items-center gap-[10px]'
    >
      {leadingIcon}
      {title}
    </button>
  )
}
