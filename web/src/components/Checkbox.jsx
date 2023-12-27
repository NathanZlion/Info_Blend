export default function Checkbox({ title, group, value, checked }) {
  return (
    <div className=''>
      <label>
        <input
          type='checkbox'
          name={group}
          value={value}
          defaultChecked={checked}
          className='scale-[1.2]'
        />
        <span className='pl-2'>{title}</span>
      </label>
    </div>
  )
}
