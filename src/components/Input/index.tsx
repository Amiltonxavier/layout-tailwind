import React, { ComponentProps } from 'react'

type InputControlProps = ComponentProps<'input'>
type InputContainerProps = ComponentProps<'div'>
type InputIconsProps = ComponentProps<'div'>



export function InputRoot(props: InputContainerProps) {
  return (
    <div {...props} className='flex gap-1 items-center border border-zinc-300 shadow-sm px-3 py-2 rounded-lg' />
  )
}

export function InputIcon(props: InputIconsProps) {
  return (
    <div {...props} className='h-5 w-5 text-zinc-500' />
  )
}

export function InputControl(props: InputControlProps) {
  return (
    <input {...props}
      className='flex-1 w-full outline-none focus-visible:border-blue-500 placeholder-zinc-600 text-zinc-900'
      placeholder='Search'
    />
  )
}
