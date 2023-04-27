import Link from 'next/link'
import { useState } from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { GiTrumpetFlag } from 'react-icons/gi'
import { IoMenu } from 'react-icons/io5'

export default function Nav () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

    return (
  <div>
      <div className="navbar bg-transparent">
        {/* Primary Nav */}
        <div className="flex-1 px-6">
          <div className='md:hidden flex items-center'>
            <button className='mobile-menu-button' onClick={toggleMobileMenu}>
              <IoMenu />
            </button>
          </div>
          <div className='flex btn btn-ghost'>
            <Link href="/"><GiTrumpetFlag className='text-xl'/></Link>
            <Link href="/" className="normal-case text-2xl text-primary font-bold px-4">Robert Collins</Link>
          </div>
      </div>
      {/* Secondary Nav */}
      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1">
            <button className='px-2'>
                <BsFillSunFill className='hover:text-primary' />
            </button>
          <li><Link href='/bio/' className='font-thin hover:text-primary'>Bio</Link></li>
          <li tabIndex={0}>
            <a className='font-thin hover:text-primary'>
              Music
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul className="p-2 bg-black/25 z-10">
              <li><Link href="/recordings/" className='font-thin hover:text-primary py-2'>Recordings</Link></li>
              <li><Link href="/teaching/" className='font-thin hover:text-primary py-2'>Teaching</Link></li>
            </ul>
          </li>
          <li><Link href="/contact/" className='font-thin hover:text-primary'>Contact</Link></li>
        </ul>
      </div>
    </div>
    {/* Mobile Menu */}
      <div className={`flex flex-col items-center mobile-menu ${mobileMenuOpen ? 'flex' : 'hidden'} md:hidden`}>
        <Link href='/' className='btn-ghost font-thin block py-4 px-4 text-sm hover:text-primary text-center'>Home</Link>
        <Link href='/bio/' className='btn-ghost font-thin block py-4 px-4 text-sm hover:text-primary text-center'>Bio</Link>
        <Link href='/recordings/' className='btn-ghost font-thin block py-4 px-4 text-sm hover:text-primary text-center'>Recordings</Link>
        <Link href='/teaching/' className='btn-ghost font-thin block py-4 px-4 text-sm hover:text-primary text-center'>Teaching</Link>
        <Link href='/contact/' className='btn-ghost font-thin block py-4 px-4 text-sm hover:text-primary text-center'>Contact</Link>
      </div>
  </div>
    )
}