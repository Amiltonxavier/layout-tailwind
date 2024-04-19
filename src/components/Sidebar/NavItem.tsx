import { ChevronDown, Home } from 'lucide-react'
import React, { ComponentProps, ElementType } from 'react'

interface NavItemProps extends ComponentProps<'a'> {
    title: string,
    icon: ElementType
}

export function NavItem({ title, icon: Icon, ...props }: NavItemProps) {
    return (
        <a href="#" {...props} className='group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-violet-100'>
            <Icon className='size-5 text-zinc-500' />
            <span className='font-medium text-zinc-700 group-hover:text-violet-500'>{title}</span>
            <ChevronDown className='size-5 ml-auto text-zinc-400 group-hover:text-violet-300' />
        </a>
    )
}
