import React from 'react';
import AuroraBackground from './components/AuroraBackground';
import Hero from './components/Hero';
import MessageSection from './components/MessageSection';
import CakeSection from './components/CakeSection';
import CelebrationButton from './components/CelebrationButton';
import GiftSection from './components/GiftSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen font-body">
      <AuroraBackground />
      <main className="relative z-10">
        <Hero />
        <MessageSection />
        <CakeSection />
        <CelebrationButton />
        <GiftSection />
        <Footer />
      </main>
    </div>
  );
}
