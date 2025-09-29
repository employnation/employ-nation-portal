import { Suspense } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedJobs } from '@/components/home/FeaturedJobs';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Statistics } from '@/components/home/Statistics';
import { Testimonials } from '@/components/home/Testimonials';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
        <Statistics />
        <FeaturedJobs />
        <HowItWorks />
        <Testimonials />
      </Suspense>
      
      <Footer />
    </main>
  );
}
