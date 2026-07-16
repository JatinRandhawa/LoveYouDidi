import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { playCelebrationSound } from '../utils/sounds';

const MESSAGES = [
  "You are pure magic, Nanne Didi! 🎉",
  "Certified: Most loveable sister on this dirt ball 🌍💫",
  "The universe is lucky you exist! ✨",
  "Charm level: Nanne Didi. Unbeatable. 👑",
];

export default function CelebrationButton() {
  const [message, setMessage] = useState(null);
  const timeoutRef = useRef(null);

  const firePartyPoppers = () => {
    const duration = 1500;
    const end = Date.now() + duration;

    // two "party poppers" from bottom corners
    const shoot = (originX) => {
      confetti({
        particleCount: 60,
        angle: originX < 0.5 ? 60 : 120,
        spread: 65,
        startVelocity: 55,
        origin: { x: originX, y: 1 },
        colors: ['#2dd4bf', '#a78bfa', '#f472b6', '#fbbf24', '#ffffff'],
        scalar: 1,
      });
    };

    shoot(0.05);
    shoot(0.95);

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }
      confetti({
        particleCount: 25,
        angle: 90,
        spread: 100,
        startVelocity: 35,
        origin: { x: Math.random(), y: 0.1 },
        colors: ['#2dd4bf', '#a78bfa', '#f472b6', '#fbbf24'],
      });
    }, 300);

    // a final big burst from center
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 100,
        startVelocity: 45,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#2dd4bf', '#a78bfa', '#f472b6', '#fbbf24', '#ffffff'],
      });
    }, 200);
  };

  const handleCelebrate = () => {
    firePartyPoppers();
    playCelebrationSound();
    const msg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    setMessage(msg);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setMessage(null), 3200);
  };

  return (
    <section className="relative px-6 py-24 flex flex-col items-center">
      <h3 className="font-display text-3xl sm:text-4xl text-glow mb-6 text-center">
        Ready for the party? 🎊
      </h3>
      <p className="text-white/70 mb-10 text-center max-w-md font-light">
        Tap the button and let the whole galaxy throw you a party.
      </p>

      <button
        onClick={handleCelebrate}
        className="relative px-10 py-5 rounded-full font-display text-xl sm:text-2xl font-bold text-midnight
                   bg-gradient-to-r from-aurora1 via-aurora2 to-aurora3 shadow-2xl
                   hover:scale-105 active:scale-95 transition-transform duration-200 animate-glow"
      >
        🎉 Celebrate!
      </button>

      {message && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-6">
          <div className="card-glass rounded-3xl px-8 py-6 shadow-2xl animate-fadeInUp border border-white/20 max-w-sm text-center">
            <p className="font-display text-xl sm:text-2xl text-glow text-white">
              {message}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
