'use client'

import { LocationTypes } from '@/types/location'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Dot } from 'lucide-react'
import { useState } from 'react'

// Variants for city content animation
const branchesVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 }
}

// Variants for each branch item (staggered)
const branchItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3 }
  })
}

export default function Accordion({ location }: { location: LocationTypes }) {
  const [openCity, setOpenCity] = useState<string | null>('Jakarta')

  const toggleCity = (city: string) => {
    setOpenCity(openCity === city ? null : city)
  }

  const isOpen = openCity === location.city

  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      <div className="border-b">
        {/* City button */}
        <button
          className="w-full flex items-center gap-2 font-semibold text-lg py-3 cursor-pointer"
          onClick={() => toggleCity(location.city)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight />
          </motion.div>
          <span>{location.city}</span>
        </button>

        {/* Branch list */}
        <AnimatePresence initial={false}>
          {isOpen && location.branches && (
            <motion.div
              key="branches"
              variants={branchesVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="ml-2 space-y-3 pl-4 pb-4 text-sm text-gray-700 overflow-hidden"
            >
              {location.branches.map((branch, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={branchItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <div className="flex items-center">
                    <Dot />
                    <p className="font-semibold">{branch.name}</p>
                  </div>
                  <div className="pl-6">
                    <p>{branch.address}</p>
                    <div className="flex">
                      <p>Phone: </p>
                      <p className="underline">&nbsp;{branch.phone}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
