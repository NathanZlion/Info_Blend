import { useState } from 'react'

export default function Checkbox({ title, group, value, defaultChecked, onChanged }) {

  return (
    <div className=''>
      <label>
        <input
          type='checkbox'
          name={group}
          value={value}
          checked={defaultChecked}
          className='scale-[1.2]'
          onChange={() => onChanged(value)}
        />
        <span className='pl-2'>{title}</span>
      </label>
    </div>
  )
}
