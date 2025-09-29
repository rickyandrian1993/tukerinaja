'use client'

import Logo from '@/assets/logo.svg'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { navItems } from '@/utils/constants'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const sectionIds = navItems.map((item) => item.id)
  const activeId = useScrollSpy(sectionIds)

  const [menuOpen, setMenuOpen] = useState(false)

  const generateMenu = () => {
    return navItems.map((item) => (
      <Link
        key={item.id}
        href={`#${item.id}`}
        className={`transition ${
          activeId === item.id
            ? 'text-green-600 font-semibold'
            : 'text-gray-700 hover:text-green-500'
        }`}
        onClick={() => setMenuOpen(false)}
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
          className="md:hidden flex flex-col space-y-1 cursor-pointer relative z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <motion.span
            className="w-6 h-0.5 bg-gray-700"
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-gray-700"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-gray-700"
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 md:hidden bg-white border-t border-gray-200 shadow-md flex flex-col items-center py-4 space-y-4"
          >
            {generateMenu()}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
