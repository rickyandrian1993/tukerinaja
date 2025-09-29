'use client'

import { LocationTypes } from '@/types/location'
import { ChevronDown, ChevronRight, Dot } from 'lucide-react'
import { useState } from 'react'

export default function Accordion({ location }: { location: LocationTypes }) {
  const [openCity, setOpenCity] = useState<string | null>('Jakarta')

  const toggleCity = (city: string) => {
    setOpenCity(openCity === city ? null : city)
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      <div className="border-b">
        {/* City */}
        <button
          className="w-full flex items-center gap-2 font-semibold text-lg py-3 cursor-pointer"
          onClick={() => toggleCity(location.city)}
        >
          {openCity === location.city ? (
            <ChevronDown className="transition-transform duration-300" />
          ) : (
            <ChevronRight className="transition-transform duration-300" />
          )}
          <span>{location.city}</span>
        </button>

        {/* Branches with animation */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openCity === location.city
              ? 'max-h-[1000px] opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          {location.branches && (
            <div className="ml-2 space-y-3 pl-4 text-sm text-gray-700">
              {location.branches.map((branch, index) => (
                <div key={index}>
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
