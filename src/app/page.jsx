import Header from '@/components/home/Header'
import Hero from '@/components/home/Hero'
import StatsSection from '@/components/home/StatsSection'
import CoreServices from '@/components/home/CoreServices'
import Services from '@/components/home/Services'
import ServicesCarousel from '@/components/home/ServicesCarousel'
import WhyChoose from '@/components/home/WhyChoose'
import Process from '@/components/home/Process'
import Testimonials from '@/components/home/Testimonials'
import BlogSection from '@/components/home/BlogSection'
import ContactSection from '@/components/home/ContactSection'
import AboveFooterSection from '@/components/home/AboveFooterSection'
import Footer from '@/components/home/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CoreServices />
        <Services />
        {/* <ServicesCarousel /> */}
        <WhyChoose />
        <StatsSection />
        <Process />
        <Testimonials />
        <BlogSection />
        <ContactSection />
      </main>
      <AboveFooterSection />
      <Footer />
    </>
  )
}