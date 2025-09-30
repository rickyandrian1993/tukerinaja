'use client'

import { benefitItems } from '@/utils/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import TitleContent from './TitleContent'

export default function Benefit() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="px-4 py-8 sm:px-0 md:py-16"
    >
      <div className="max-w-7xl mx-auto">
        <TitleContent text="Benefit" />

        <div className="px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {benefitItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group aspect-square md:aspect-5/6"
            >
              <Image
                fill
                src={item.image}
                alt={item.title}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#C8F502] via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-2 z-30">
                <div className="md:px-2 md:py-2">
                  <h3 className="text-gray-900 font-bold text-base md:text-2xl leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
