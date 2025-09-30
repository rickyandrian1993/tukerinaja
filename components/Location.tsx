'use client'

import { locationItems } from '@/utils/constants'
import { motion } from 'framer-motion'
import Accordion from './Accordion'
import TitleContent from './TitleContent'

export default function Location() {
  return (
    <motion.section
      id="location"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="px-4 py-8 sm:px-0"
    >
      <div className="max-w-7xl mx-auto">
        <TitleContent text="Temukan Toko Kami" />

        <div className="px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {/* Map (sticky on larger screens) */}
          <div className="col-span-3 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.327406375735!2d106.78868623424613!3d-6.176942660525057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7557d3ac8e5%3A0xaf9c92c0d6e79931!2siColor%20Service%20Central%20Park%20-%20Jakarta%20Barat!5e0!3m2!1sen!2sid!4v1759138027923!5m2!1sen!2sid"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] md:h-[400px] border border-gray-200 rounded-xl shadow-lg sticky top-24"
            />
          </div>

          {/* Accordion list */}
          <div className="col-span-2">
            <div className="w-full max-w-md mx-auto space-y-2">
              {locationItems.map((loc, index) => (
                <Accordion key={index} location={loc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
