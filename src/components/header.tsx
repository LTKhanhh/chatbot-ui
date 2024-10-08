import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import Info from './info'


export default function Header() {
    return (
        <div >
            <ul className='flex space-x-4 items-center justify-end pt-[4px] pr-[20px]'>
                <li>
                    <Info></Info>
                </li>
                <li>
                    <ModeToggle />
                </li>
            </ul>
        </div>
    )
}
