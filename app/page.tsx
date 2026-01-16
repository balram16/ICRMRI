import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Tracks from "@/components/tracks"
import Timeline from "@/components/timeline"
import ComingSoon from "@/components/coming-soon"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <ComingSoon />
      <Footer />
    </main>
  )
}
