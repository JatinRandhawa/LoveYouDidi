import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { playJingleSound, playGiftOpenSound } from '../utils/sounds';

const GIFT_ITEMS = [
  { icon: '💄', label: 'Charm' },
  { icon: '👛', label: 'Grace' },
  { icon: '💍', label: 'Sparkle' },
  { icon: '🌸', label: 'Softness' },
  { icon: '👑', label: 'Queenliness' },
  { icon: '✨', label: 'Magic' },
];

export default function GiftSection() {
  const [phase, setPhase] = useState('idle'); // idle -> flying -> landed -> opened
  const flyTimeout = useRef(null);

  const sendSanta = () => {
    if (phase !== 'idle') return;
    setPhase('flying');
    playJingleSound();
    flyTimeout.current = setTimeout(() => {
      setPhase('landed');
    }, 6000);
  };

  const openGift = () => {
    if (phase !== 'landed') return;
    setPhase('opened');
    playGiftOpenSound();

    // shiny golden sparkle burst right where the gift is
    const burst = () =>
      confetti({
        particleCount: 70,
        spread: 360,
        startVelocity: 28,
        gravity: 0.6,
        scalar: 0.9,
        ticks: 200,
        origin: { x: 0.5, y: 0.65 },
        colors: ['#fbbf24', '#f472b6', '#a78bfa', '#ffffff', '#2dd4bf'],
        shapes: ['circle', 'square'],
      });
    burst();
    setTimeout(burst, 300);
  };

  return (
    <section className="relative px-6 py-24 min-h-[70vh] flex flex-col items-center overflow-hidden">
      <p className="uppercase tracking-[0.3em] text-gold/80 text-xs sm:text-sm mb-3">
        One more thing, Didi
      </p>
      <h3 className="font-display text-3xl sm:text-4xl text-glow mb-4 text-center">
        A little delivery from the North Star 🎅
      </h3>
      <p className="text-white/70 mb-10 text-center max-w-md font-light">
        Someone special agreed to fly this one over just for you.
      </p>

      {phase === 'idle' && (
        <button
          onClick={sendSanta}
          className="px-9 py-4 rounded-full font-display text-lg sm:text-xl font-bold text-midnight
                     bg-gradient-to-r from-gold via-aurora3 to-aurora2 shadow-2xl
                     hover:scale-105 active:scale-95 transition-transform duration-200"
        >
          🎁 Send the Gift
        </button>
      )}

      {/* Sky stage for santa + gift */}
      <div className="relative w-full max-w-2xl h-64 mt-6">
        {phase === 'flying' && (
          <div className="absolute top-6 left-0 text-5xl sm:text-6xl whitespace-nowrap animate-flySled select-none">
            🦌🦌🛷🎅
          </div>
        )}

        {(phase === 'landed' || phase === 'opened') && (
          <div className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center">
            <div
              className={`text-7xl sm:text-8xl select-none ${phase === 'landed' ? 'animate-fallGift cursor-pointer hover:scale-110 transition-transform' : ''}`}
              style={phase === 'opened' ? { transform: 'translateY(130px) scale(0.9)' } : {}}
              onClick={openGift}
              role="button"
              aria-label="Open your gift"
            >
              {phase === 'opened' ? '📦' : '🎁'}
            </div>
            {phase === 'landed' && (
              <p className="mt-2 text-aurora1 text-sm animate-floatY">tap to open ↑</p>
            )}
          </div>
        )}

        {phase === 'opened' && (
          <div className="absolute left-1/2 -translate-x-1/2 top-20 w-full flex flex-wrap justify-center gap-4 sm:gap-6">
            {GIFT_ITEMS.map((item, i) => (
              <div
                key={item.label}
                className="flex flex-col items-center animate-popOut"
                style={{ animationDelay: `${i * 0.12}s`, opacity: 0 }}
              >
                <span
                  className="text-4xl sm:text-5xl drop-shadow-[0_0_14px_rgba(251,191,36,0.7)]"
                >
                  {item.icon}
                </span>
                <span className="mt-1 text-xs sm:text-sm text-white/70 font-light">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {phase === 'opened' && (
        <div
          className="mt-16 sm:mt-10 max-w-md card-glass rounded-3xl px-7 py-6 text-center shadow-2xl animate-fadeInUp border border-white/20"
        >
          <p className="text-2xl mb-2">💌✨</p>
          <p className="font-display text-lg sm:text-xl text-glow">
            Every bit of charm, softness and sparkle in this box —
          </p>
          <p className="text-white/80 mt-2 font-light">
            is just a small reflection of what you already carry, Nanne Didi.
            Happy Birthday. 🌌
          </p>
        </div>
      )}
    </section>
  );
}
