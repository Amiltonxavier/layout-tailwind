import React, { ComponentProps } from 'react'

type OptgroupProps = ComponentProps<'optgroup'>

export function SelectGroup(props: OptgroupProps) {
  return (
    <optgroup className="p-2" {...props} />
  )
}
