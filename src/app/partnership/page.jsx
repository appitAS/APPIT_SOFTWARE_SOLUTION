'use client';
import { useEffect } from 'react';
import Header from '@/components/home/Header';
import PartnershipHero from '@/components/partnership/PartnershipHero';
import PartnershipServices from '@/components/partnership/PartnershipServices';
import PartnershipFeatures from '@/components/partnership/PartnershipFeatures';
import PartnershipBenefits from '@/components/partnership/PartnershipBenefits';
import ChatWithAI from '@/components/platform/ChatWithAI';
import AboveFooterSection from '@/components/home/AboveFooterSection';
import Footer from '@/components/home/Footer';
import useSmoothScroll from '@/hooks/useSmoothScroll';

// Note: metadata is exported from metadata.js

export default function Partnership() {
  // Initialize smooth scrolling behavior
  useSmoothScroll();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <PartnershipHero />
      <PartnershipServices />
      <PartnershipFeatures />
      <PartnershipBenefits />
      <ChatWithAI />
      <AboveFooterSection />
      <Footer />
    </main>
  );
}
