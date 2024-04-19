import React, { ComponentProps } from 'react'

type OptionProps = ComponentProps<'option'>


export function SelectItem(props: OptionProps) {
  return (
    <option {...props} className='hover:bg-gray-100' />
  )
}
