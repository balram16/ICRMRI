import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Tracks from "@/components/tracks"
import RegistrationFee from "@/components/registration-fee"
import Timeline from "@/components/timeline"
import ComingSoon from "@/components/coming-soon"
import ContactUs from "@/components/contact-us"
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
      <RegistrationFee />
      <ContactUs />
      <Footer />
    </main>
  )
}
