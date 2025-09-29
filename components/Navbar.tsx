'use client'

import Logo from '@/assets/logo.svg'
import { navItems } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const generateMenu = () => {
    return navItems.map((item) => (
      <Link
        key={item.id}
        href={`#${item.id}`}
        className={`transition ${
          active === item.id
        } ? "text-green-600 font-semibold" : text-gray-700 hover:text-green-500`}
      >
        {item.label}
      </Link>
    ))
  }

  return (
    <header className="sticky border-b border-gray-200 top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-12 py-2">
        <Image src={Logo} alt="tukerin-aja" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium">
          {generateMenu()}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 right-0 md:hidden bg-white border-t border-gray-200 shadow-md flex flex-col items-center">
          {generateMenu()}
        </nav>
      )}
    </header>
  )
}
