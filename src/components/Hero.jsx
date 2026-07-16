import React from 'react';
import sisterPhoto from '../assets/sister.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 text-center">
      <p className="uppercase tracking-[0.35em] text-aurora1/80 text-xs sm:text-sm font-medium animate-fadeInUp">
        A little corner of the cosmos, just for you
      </p>

      <h1
        className="font-display italic text-4xl sm:text-6xl md:text-7xl mt-4 text-glow bg-gradient-to-r from-aurora1 via-aurora2 to-aurora3 bg-clip-text text-transparent animate-fadeInUp"
        style={{ animationDelay: '0.15s', opacity: 0 }}
      >
        Happy Birthday,
      </h1>
      <h2
        className="font-display text-5xl sm:text-7xl md:text-8xl font-bold mt-1 text-glow text-white animate-fadeInUp"
        style={{ animationDelay: '0.3s', opacity: 0 }}
      >
        Nanne Didi ✨
      </h2>

      {/* Superwoman portrait card */}
      <div
        className="relative mt-14 animate-fadeInUp"
        style={{ animationDelay: '0.5s', opacity: 0 }}
      >
        {/* glow ring */}
        <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-aurora1 via-aurora2 to-aurora3 blur-2xl opacity-50 animate-glow" />

        {/* cape */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 -bottom-6 -z-0"
          width="280" height="230" viewBox="0 0 280 230"
        >
          <defs>
            <linearGradient id="capeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <path
            d="M40 20 Q140 -10 240 20 L270 220 Q140 190 10 220 Z"
            fill="url(#capeGrad)"
            opacity="0.85"
          />
        </svg>

        {/* star emblem */}
        <div className="absolute -top-4 -right-4 sm:-right-6 z-20 text-3xl sm:text-4xl animate-floatY drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]">
          ⭐
        </div>
        <div className="absolute -top-2 -left-6 z-20 text-2xl animate-floatY drop-shadow-[0_0_10px_rgba(45,212,191,0.8)]" style={{ animationDelay: '1s' }}>
          🌟
        </div>

        {/* portrait */}
        <div className="relative z-10 w-56 h-72 sm:w-64 sm:h-80 rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-[0_0_60px_rgba(167,139,250,0.5)]">
          <img
            src={sisterPhoto}
            alt="Nanne Didi — birthday superwoman"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigoDeep/60 via-transparent to-transparent" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-xs sm:text-sm font-semibold tracking-wide">
            Our Everyday Superwoman 🦸‍♀️
          </div>
        </div>
      </div>

      <p
        className="max-w-xl mt-10 text-base sm:text-lg text-white/80 font-light animate-fadeInUp"
        style={{ animationDelay: '0.7s', opacity: 0 }}
      >
        Turning another year more radiant, more fierce, more you. Scroll down —
        the whole galaxy came out to celebrate.
      </p>

      <div className="mt-10 text-2xl animate-floatY" style={{ opacity: 0.8 }}>
        ↓
      </div>
    </section>
  );
}
