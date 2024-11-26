'use client'

import { Squash as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react'
import { WhyteInkTrap } from '../fonts/font'

export default function NavBar() {
    const [isOpen, setOpen] = useState(false)
    const [navColor, setNavColor] = useState('bg-none')
    const [scrollDirection, setScrollDirection] = useState('up')

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setScrollDirection('down')
            } else {
                setScrollDirection('up')
            }
            lastScrollY = window.scrollY

            if (window.scrollY > 10) {
                setNavColor('bg-background')
            } else {
                setNavColor('bg-none')
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleLinkClick = () => {
        setOpen(false)
    }

    return (
        <>
            <div className={`${navColor} ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'} sticky top-0 left-0 right-0 py-2 px-2 flex justify-between items-center transition-transform duration-300 z-50 md:px-5 lg:px-8 lg:py-5 `}>
                <div className='flex items-center gap-2'>
                    <div className='relative after:absolute after:inset-1 after:border-2 after:rounded-full after:border-foreground after:-z-10 w-fit lg:hidden'>
                        <Hamburger size={18} toggled={isOpen} toggle={setOpen} hideOutline={false} />
                    </div>

                    <div className='hidden lg:flex gap-4'>
                        <a href='#shop' className='py-1 px-5 rounded-full border-2 border-foreground font-semibold text-sm uppercase'>Shop</a>
                        <a href='' className='py-1 px-5 rounded-full border-2 border-foreground font-semibold text-sm uppercase'>About</a>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
                </div>

                <h1 className='font-black text-center absolute left-1/2 -translate-x-1/2'>
                    THE FIGMA STORE
                </h1>

                <div className='flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>

                    <div className='py-1 px-5 rounded-full border-2 border-foreground flex items-center gap-2'>
                        <span className='text-sm font-semibold hidden md:block'>BAG</span>
                        <span className='font-bold text-sm'>0</span>
                    </div>
                </div>
            </div>

            <div className={`${isOpen && scrollDirection === 'up' ? 'translate-y-0' : '-translate-y-full'} fixed top-0 left-0 right-0 bottom-0 bg-background transition-transform duration-300 pt-16 px-2 lg:hidden`}>
                <nav className='flex flex-col'>
                    <a href='#shop' className={`${WhyteInkTrap.className} text-5xl mb-5`} onClick={handleLinkClick}>Shop</a>
                    <a href='#about' className={`${WhyteInkTrap.className} text-5xl`} onClick={handleLinkClick}>About</a>
                    <div className='mt-14 flex flex-col gap-4 text-lg'>
                        <a href="" onClick={handleLinkClick}>FAQ</a>
                        <a href="" onClick={handleLinkClick}>Contact Us</a>
                        <a href="" onClick={handleLinkClick}>Privacy Policy</a>
                        <a href="" onClick={handleLinkClick}>Terms of Service</a>
                        <a href="" onClick={handleLinkClick}>Account</a>
                    </div>
                </nav>
            </div>
        </>
    )
}