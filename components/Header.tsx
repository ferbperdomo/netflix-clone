import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (

        <header className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Inicio </li>
                    <li className="headerLink">Series TV</li>
                    <li className="headerLink">Películas</li>
                    <li className="headerLink">Novedades más vistas</li>
                    <li className="headerLink">Mi lista</li>
                </ul>
            </div>
            <div className='flex items-center space-x-4 text-sm font-light'>
                <SearchIcon className='hidden h-6 w-6 sm:inline' />
                <p className='hidden  lg:inline'>Cristian</p>
                <BellIcon className='h-6 w-6' />
                <Link href="/">
                    <img
                        src="https://rb.gy/g1pwyx"
                        alt=""
                        className="cursor-pointer rounded"
                    />
                </Link>
            </div>

        </header>
    )
}
export default Header