// Metadata is defined as a JavaScript object

import Header from '@/components/home/Header';
import IndustryHero from '@/components/industry/IndustryHero';
import IndustryDescription from '@/components/industry/IndustryDescription';
import IndustryFeatures from '@/components/industry/IndustryFeatures';
import IndustryBenefits from '@/components/industry/IndustryBenefits';
import IndustryFAQ from '@/components/industry/IndustryFAQ';
import AboveFooterSection from '@/components/home/AboveFooterSection';
import Footer from '@/components/home/Footer';

export const metadata = {
  title: 'Industry Solutions | AppIT Solutions',
  description: 'Empowering the Oil and Gas IT Solutions with Oracle EBS R12 Customizations',
};

export default function Industry() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <IndustryHero />
      <IndustryDescription />
      <IndustryFeatures />
      <IndustryBenefits />
      <IndustryFAQ />
      <AboveFooterSection />
      <Footer />
    </main>
  );
}
