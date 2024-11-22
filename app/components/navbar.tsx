'use client'

import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'


export default function NavBar() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div className="bg-primary fixed top-0 left-0 right-0 py-2 px-6 flex justify-between items-center">
                <div className='flex items-center gap-2'>
                    <div className='relative after:absolute after:inset-1 after:border-2 after:rounded-full after:border-foreground after:-z-10 w-fit'>
                        <Hamburger size={18} toggled={isOpen} toggle={setOpen} hideOutline={false} />
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" ><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>

                </div>

                <h1 className='font-black'>
                    THE FIGMA STORE
                </h1>

                <div className='flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>

                    <div className='py-1 px-5 rounded-full border-2 border-foreground'>
                        <span className='font-bold text-sm'>0</span>
                    </div>

                </div>


            </div>
        </>
    )
}