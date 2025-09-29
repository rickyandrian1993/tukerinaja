import Poster from '@/assets/poster.png'

import Image from 'next/image'
import Benefit from './Benefit'

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-white">
      <Image
        src={Poster}
        alt="Poster-Image"
        className="object-cover md:object-cover"
        priority
      />

      <Benefit />
    </section>
  )
}
