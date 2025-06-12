import ImageWithTextSection from "../../components/layout/image-text-section";
import ContactCTA from "../../components/pages/contact/contact-cta";
import ContactForm from "../../components/pages/contact/contact-form";
import ContactHero from "../../components/pages/contact/contact-hero";
import Locations from "../../components/pages/contact/locations";
import MapComponent from "../../components/pages/contact/map-component";
// import SocialSection from "../../components/pages/contact/social-sec";
import AboveFooterSection from "../../components/home/AboveFooterSection";
import Footer from "../../components/home/Footer";

const sectionsData = [
  {
    title: "Global Locations",
    para: `Global IT Services & Support  You can connect with Appit Software to explore our office space solutions. Our team is ready to assist you with finding the perfect workspace to meet your business needs. Reach out for inquiries, appointments, or any questions. We look forward to helping you create your ideal office environment!`,
    image: "/images/map.png",
    reverse: true,
  },
];

const Page = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactCTA />
      <ImageWithTextSection sectionsData={sectionsData} />
      <Locations />
      <MapComponent />
      
      {/* Spacer div for adding margin between MapComponent and AboveFooterSection */}
      <div className="my-16 md:my-24"></div>
      
      {/* <SocialSection /> */}
      <AboveFooterSection />
      <Footer />
    </>
  );
};

export default Page;