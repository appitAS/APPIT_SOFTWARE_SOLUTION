// Metadata is defined as a JavaScript object

import Header from '@/components/home/Header';
import BlogHero from '@/components/blog/BlogHero';
import BlogCards from '@/components/blog/BlogCards';
import AboveFooterSection from '@/components/home/AboveFooterSection';
import Footer from '@/components/home/Footer';

export const metadata = {
  title: 'Blog | AppIT Solutions',
  description: 'Stay ahead with industry perspectives and insights on emerging tech trends.',
};

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <BlogHero />
      <BlogCards />
      <AboveFooterSection />
      <Footer />
    </main>
  );
}
