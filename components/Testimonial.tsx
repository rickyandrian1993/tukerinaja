'use client'

import testi from '@/assets/testi.png'
import { testimonialItems } from '@/utils/constants'
import { motion, useAnimation } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Counter } from './Counter'
import TitleContent from './TitleContent'

export default function Testimonial() {
  const controls = useAnimation()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: [0, '-50%'],
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear'
        }
      })
    } else {
      controls.stop()
    }
  }, [isHovered, controls])

  return (
    <motion.section
      id="testimonial"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      className="px-4 py-8 sm:px-0 md:py-16"
    >
      <div className="max-w-7xl mx-auto">
        <TitleContent text="Testimonial" />

        {/* Header with background image */}
        <div className="relative w-full h-auto md:h-[350px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={testi}
            alt="testimonial background"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-lime-400/90 to-green-500/80">
            <div className="h-full max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-0 flex flex-col md:flex-row items-start md:items-center">
              {/* Left: heading + text + stats */}
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Apa Kata Mereka?
                </h2>
                <p className="max-w-xl text-lg mb-6">
                  Lihat pengalaman nyata dari pelanggan yang sudah tukerin
                  gadget mereka bersama kami.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 gap-4 sm:gap-0 mb-6">
                  <div>
                    <p className="text-2xl font-bold">
                      <Counter to={2000} duration={2} suffix="+" />
                    </p>
                    <p className="text-sm">Gadget berhasil dijual</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      <Counter to={98} duration={2.5} suffix="%" />
                    </p>
                    <p className="text-sm">Pelanggan Puas</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      <Counter to={5} duration={1.5} suffix="min" />
                    </p>
                    <p className="text-sm">Proses cepat</p>
                  </div>
                </div>
              </div>

              {/* CTA buttons: appear on right for desktop, below stats on mobile */}
              <div className="w-full md:w-1/3 flex flex-col gap-3 md:items-end">
                <button className="bg-[#C8F502] text-black px-6 py-2 rounded-full font-semibold shadow-md hover:bg-lime-400 transition">
                  Mulai Tanya Fortuna
                </button>
                <Link
                  href="#location"
                  className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-100 transition text-center"
                >
                  Cek Lokasi Toko iColor
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative sm:mt-12 w-full overflow-hidden pb-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div className="flex space-x-6 w-max" animate={controls}>
            {testimonialItems.concat(testimonialItems).map((item, index) => (
              <div
                key={index}
                className="w-[300px] sm:w-[400px] bg-white shadow-md rounded-2xl p-6 flex-shrink-0"
              >
                <p className="mb-4 text-gray-700 italic break-words">
                  {item.text}
                </p>
                <h3 className="font-bold text-black">{item.name}</h3>
                <div className="flex mt-3 text-lime-500">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C8F502]" />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
