'use client';
import { useEffect } from 'react';
import Header from '@/components/home/Header';
import PlatformHero from '@/components/platform/PlatformHero';
import PlatformFeatures from '@/components/platform/PlatformFeatures';
import PlatformAdvantages from '@/components/platform/PlatformAdvantages';
import PlatformAdditionalFeatures from '@/components/platform/PlatformAdditionalFeatures';
import AboveFooterSection from '@/components/home/AboveFooterSection';
import Footer from '@/components/home/Footer';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import ChatWithAI from '@/components/platform/ChatWithAI';

// Note: metadata is exported from metadata.js

export default function Platform() {
  // Initialize smooth scrolling behavior
  useSmoothScroll();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <PlatformHero />
      <PlatformFeatures />
      <PlatformAdvantages />
      <PlatformAdditionalFeatures />
      <ChatWithAI />
      <AboveFooterSection />
      <Footer />
    </main>
  );
}