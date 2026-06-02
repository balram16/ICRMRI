import Navigation from "@/components/navigation"
import AnnouncementBar from "@/components/announcement-bar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Tracks from "@/components/tracks"
import PaperSubmission from "@/components/paper-submission"
import RegistrationFee from "@/components/registration-fee"
import Timeline from "@/components/timeline"
import ComingSoon from "@/components/coming-soon"
import ContactUs from "@/components/contact-us"
import Footer from "@/components/footer"
import OrganizedBy from "@/components/organized-by"

export default function Home() {
  return (
    <main className="w-full">
      <AnnouncementBar />
      <Navigation />
      <Hero />
      <About />
      <OrganizedBy />
      <Tracks />
      <PaperSubmission />
      <Timeline />
      <ComingSoon />
      <RegistrationFee />
      <ContactUs />
      <Footer />
    </main>
  )
}
