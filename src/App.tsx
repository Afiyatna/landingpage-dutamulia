import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TestimoniSection from './components/TestimoniSection';
import StatistikSection from './components/StatistikSection';
import FormKonsultasi from './components/FormKonsultasi';
import TentangKami from './components/TentangKami';
import KeunggulanSection from './components/KeunggulanSection';
import FAQSection from './components/FAQSection';
import GaleriSection from './components/GaleriSection';
import CounterSection from './components/CounterSection';
import SouvenirSection from './components/SouvenirSection';
import PaketSection from './components/PaketSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TestimoniSection />
      <StatistikSection />
      <FormKonsultasi />
      <TentangKami />
      <KeunggulanSection />
      <FAQSection />
      <GaleriSection />
      <CounterSection />
      <SouvenirSection />
      <PaketSection />
      <Footer />
    </div>
  );
}

export default App;