import { ChevronDown } from 'lucide-react'
import React, { ComponentProps, ElementType } from 'react'

type ChevronIconProps = ComponentProps<'div'> & {
    icon: ElementType
}

export function ChevronIcon({icon: Icon, ...props}: ChevronIconProps) {
  return (
    <div {...props} className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
    <Icon className="size-8" />
   
    </div>
  )
}
