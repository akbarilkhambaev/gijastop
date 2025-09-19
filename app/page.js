'use client';
import React, { useState, useEffect } from 'react';
// import Header from '@/components/Header';
import PreLoader from '@/components/PreLoader';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Benefits from '@/components/Benefits';
import Composition from '@/components/Composition';
import HowItWorks from '@/components/HowItWorks';
import Reviews from '@/components/Reviews';
import Instructions from '@/components/Instructions';
import Certificates from '@/components/Certificates';
import Faq from '@/components/Faq';
import Price from '@/components/Price';
import Footer from '@/components/Footer';
import SectionNav from '@/components/SectionNav';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const sections = [
    // 'header',
    'hero',
    'problem',
    'benefits',
    'composition',
    'howitworks',
    'reviews',
    'instructions',
    'certificates',
    'footer',
  ];

  useEffect(() => {
    // Ждём 1.5 сек, потом запускаем fade-out
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Убираем прелоадер из DOM через 0.7 сек
      setTimeout(() => setLoading(false), 700);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {loading ? (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Фон с плавным градиентом */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-green-200 to-emerald-100 animate-gradient" />

          {/* Прелоадер по центру */}
          <PreLoader />
        </div>
      ) : (
        <>
          <main className="pl-9">
            <Hero id="hero" />
            <Problem id="problem" />
            <Benefits id="benefits" />
            <Composition id="composition" />
            <HowItWorks id="howitworks" />
            <Reviews id="reviews" />
            <Instructions id="instructions" />
            <Certificates id="certificates" />
            <Footer id="footer" />
            <SectionNav sections={sections} />
          </main>
        </>
      )}
    </section>
  );
}
