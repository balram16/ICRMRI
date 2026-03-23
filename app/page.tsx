import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Tracks from "@/components/tracks"
import RegistrationFee from "@/components/registration-fee"
import Timeline from "@/components/timeline"
import ComingSoon from "@/components/coming-soon"
import ContactUs from "@/components/contact-us"
import Footer from "@/components/footer"
import OrganizedBy from "@/components/organized-by"

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <About />
      <OrganizedBy />
      <Tracks />
      <Timeline />
      <ComingSoon />
      <RegistrationFee />
      <ContactUs />
      <Footer />
    </main>
  )
}
