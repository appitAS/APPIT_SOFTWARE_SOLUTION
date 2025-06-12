import Header from '@/components/home/Header'
import AboveFooterSection from '@/components/home/AboveFooterSection'
import AboutHero from '@/components/about/AboutHero'
import GrowBusiness from '@/components/about/GrowBusiness'
import CompanyInfo from '@/components/about/CompanyInfo'
import CompanyStats from '@/components/about/CompanyStats'
import OurPromise from '@/components/about/OurPromise'
import VisionaryLeader from '@/components/about/VisionaryLeader'
import OurHistory from '@/components/about/OurHistory'
import OurAdvisor from '@/components/about/OurAdvisor'
import TeamSection from '@/components/about/TeamSection'
// import Testimonials from '@/components/about/ClientTestimonials'
import Testimonials from '@/components/home/Testimonials'
import Footer from '@/components/home/Footer'
import ScrollToTopButton from '@/components/home/ScrollToTopButton'



export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <GrowBusiness />
        <CompanyInfo />
        <CompanyStats />
         <OurPromise />
        <VisionaryLeader />
        <OurHistory />
       <OurAdvisor />
        <TeamSection />
        <Testimonials />
      </main>
      <AboveFooterSection />
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
