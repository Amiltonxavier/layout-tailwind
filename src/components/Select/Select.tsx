import React, { ComponentProps, createContext, useState } from 'react'

type SelectProps = ComponentProps<'select'>;



export function Trigger(props: SelectProps) {

  return (

    <select {...props} className="h-12 w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none" />

  )
}
