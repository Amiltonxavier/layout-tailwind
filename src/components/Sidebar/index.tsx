import { Cog, LifeBuoy, LogOut, Search } from 'lucide-react'
import React from 'react'
import { MainNavItem } from './MainNavItem'
import { NavItem } from './NavItem'
import { InputControl, InputIcon, InputRoot } from '../Input'

export function Sidebar() {
    return (
        <>
            <aside className="flex flex-col gap-6 border border-r-zinc-200 pt-4 px-5 py-8 shadow-">
                <strong className='text-xl font-bold text-zinc-800 text-left'>Amilton <span className='text-violet-500'>UI</span></strong>
                <InputRoot>
                    <InputIcon>
                        <Search className='text-zinc-500 size-5' />
                    </InputIcon>
                    <InputControl placeholder='Search' />
                </InputRoot>
                <MainNavItem />
                <div className='mt-auto flex flex-col gap-6'>
                    <nav className='space-y-0.5'>
                        <NavItem title='Suport' icon={LifeBuoy} />
                        <NavItem title='Settings' icon={Cog} />
                    </nav>

                    <div className='flex flex-col gap-4 bg-violet-100 px-3 py-2 rounded-lg'>
                        <div className='space-y-1'>
                            <span className='text-sm/5 font-medium text-violet-700'>Used space</span>
                            <p className='text-sm/5 text-violet-500'>Your team has used 80% of your avaaible space. Need more?</p>
                        </div>

                        <div className='h-2 bg-violet-200 rounded-full'>
                            <div className='h-2 w-4/5 rounded-full bg-violet-600' />
                        </div>
                        <div className='space-x-3'>
                            <button className='text-violet-500 text-sm font-medium'>Dismiss</button>
                            <button className='text-violet-700 text-sm font-medium'>Update Plan</button>
                        </div>

                    </div>
                    <div className='flex gap-3'>
                        <img className='size-10 rounded-full' src="https://avatars.githubusercontent.com/u/70951606?v=4" alt="" />
                        <div className='truncate flex flex-col'>
                            <span className='font-semibold text-sm text-zinc-700'>Amilton Xavier</span>
                            <span className='truncate text-sm text-zinc-500'>amiltonxavier1999@gmail.com</span>
                        </div>
                        <button type="button" className='p-2 rounded-md hover:text-violet-400'>
                            <LogOut className='size-5 ml-auto text-zinc-500' />
                        </button>

                    </div>
                </div>

            </aside>
        </>
    )
}
