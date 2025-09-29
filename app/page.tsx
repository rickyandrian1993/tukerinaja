import Benefit from '@/components/Benefit'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default function TukerinAja() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-2 md:px-10">
        <Hero />
        <Benefit />
      </main>
    </>
  )
}

