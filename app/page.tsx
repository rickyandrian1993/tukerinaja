import Benefit from '@/components/Benefit'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Location from '@/components/Location'
import Navbar from '@/components/Navbar'

export default function TukerinAja() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white md:px-10">
        <Hero />

        <Benefit />

        <Location />
      </main>
      <Footer />
    </>
  )
}

