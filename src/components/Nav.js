import Link from 'next/link'
import { BsFillSunFill } from 'react-icons/bs'
import { GiTrumpetFlag } from 'react-icons/gi'

export default function Nav () {


    return (
        <div className="navbar bg-base-100">
  <div className="flex-1 px-6">
    <div className='flex items-center btn btn-ghost'>
    <Link href="/"><GiTrumpetFlag className='text-xl'/></Link>
    <Link href="/" className="normal-case text-2xl text-primary font-bold px-4"> Robbie Collins</Link>
    </div>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
        <button className='px-2'>
            <BsFillSunFill className='hover:text-primary' />
        </button>
      <li><Link href='/bio/' className='hover:text-primary'>Bio</Link></li>
      <li tabIndex={0}>
        <a className='hover:text-primary'>
          Music
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><Link href="/recordings/" className='hover:text-primary'>Recordings</Link></li>
          <li><Link href="/teaching/" className='hover:text-primary'>Teaching</Link></li>
        </ul>
      </li>
      <li><Link href="/contact/" className='hover:text-primary'>Contact</Link></li>
    </ul>
  </div>
</div>
    )

}