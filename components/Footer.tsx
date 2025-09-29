import ig from '@/assets/ig.svg'
import tiktok from '@/assets/tiktok.svg'
import x from '@/assets/x.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center py-4 gap-4">
        <Link href={'/'}>Contact Us</Link>
        <Link href={'/'}>About</Link>

        <div className="flex justify-center items-center gap-4">
          Social Media
          <Link href={'/'}>
            <Image src={ig} alt="ig" />
          </Link>
          <Link href={'/'}>
            <Image src={x} alt="x" />
          </Link>
          <Link href={'/'}>
            <Image src={tiktok} alt="tiktok" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
