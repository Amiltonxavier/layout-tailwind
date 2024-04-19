import { BarChart, CheckSquare, Flag, Home, SquareStack, Users } from 'lucide-react'
import React from 'react'
import { NavItem } from './NavItem'

export function MainNavItem() {
    return (
        <nav className='space-y-0.5'>
            <NavItem title='Home' icon={Home}  />
            <NavItem title='Dashboard' icon={BarChart}  />
            <NavItem title='Project' icon={SquareStack}  />
            <NavItem title='Tasks' icon={CheckSquare}  />
            <NavItem title='Reports' icon={Flag}  />
            <NavItem title='Users' icon={Users}  />
        </nav>
    )
}
