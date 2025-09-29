import Poster from '@/assets/poster.png'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-gray-50">
      <Image
        src={Poster}
        alt="Poster-Image"
        className="object-cover md:object-cover"
        priority
      />
    </section>
  )
}
