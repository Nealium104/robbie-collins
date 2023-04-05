import Link from 'next/link'

export default function Nav () {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Robbie Collins</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href='/bio/'>Bio</Link></li>
      <li tabIndex={0}>
        <a>
          Music
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><Link href="/recordings/">Recordings</Link></li>
          <li><Link href="/teaching/">Teaching</Link></li>
        </ul>
      </li>
      <li><Link href="/contact/">Contact</Link></li>
    </ul>
  </div>
</div>
    )

}