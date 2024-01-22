import Link from "next/link";
import { useState } from "react";
import {
  BsGripVertical,
  BsFillHouseFill,
  BsRocketFill,
  BsMusicNote,
  BsMortarboardFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { GiTrumpetFlag } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky z-20 w-full md:relative">
      <div className="navbar bg-base-100">
        {/* Primary Nav */}
        <div className="flex-1 px-6">
          <div className="flex items-center md:hidden">
            <button onClick={toggleMobileMenu}>
              <IoMenu />
            </button>
          </div>
          <div className="flex btn btn-ghost">
            <Link href="/">
              <GiTrumpetFlag className="text-xl" />
            </Link>
            <Link
              href="/"
              className="px-4 text-2xl font-bold normal-case text-primary"
            >
              Robert Collins
            </Link>
          </div>
        </div>
        {/* Secondary Nav */}
        <div className="flex-none hidden md:flex">
          <ul className="px-1 menu menu-horizontal">
            <button className="px-2">
              <BsGripVertical />
            </button>
            <li>
              <Link
                scroll
                href="/bio/"
                className="font-thin hover:text-primary"
              >
                Bio
              </Link>
            </li>
            <li tabIndex={0}>
              <a className="font-thin hover:text-primary">
                Music
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="z-10 bg-black/75">
                <li>
                  <Link
                    href="/recordings/"
                    className="font-thin hover:text-primary"
                  >
                    Recordings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/teaching/"
                    className="py-2 font-thin hover:text-primary"
                  >
                    Teaching
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact/" className="font-thin hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`absolute w-full flex flex-col items-center gap-5 bg-black/75 py-4 ${
          mobileMenuOpen ? "flex" : "hidden"
        } md:hidden`}
      >
        <div>
          <Link
            href="/"
            className="block text-sm font-thin text-center btn-ghost hover:text-primary"
          >
            <BsFillHouseFill className="mx-auto" />
            <span>Home</span>
          </Link>
        </div>
        <div>
          <Link
            href="/bio/"
            className="block py-1 text-sm font-thin text-center btn-ghost hover:text-primary"
          >
            <BsRocketFill className="mx-auto" />
            <span>Bio</span>
          </Link>
        </div>
        <div>
          <Link
            href="/recordings/"
            className="block py-1 text-sm font-thin text-center btn-ghost hover:text-primary"
          >
            <BsMusicNote className="mx-auto" />
            <span>Recordings</span>
          </Link>
        </div>
        <div>
          <Link
            href="/teaching/"
            className="block py-1 text-sm font-thin text-center btn-ghost hover:text-primary"
          >
            <BsMortarboardFill className="mx-auto" />
            <span>Teaching</span>
          </Link>
        </div>
        <div>
          <Link
            href="/contact/"
            className="block py-1 text-sm font-thin text-center btn-ghost hover:text-primary"
          >
            <BsFillEnvelopeFill className="mx-auto" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
