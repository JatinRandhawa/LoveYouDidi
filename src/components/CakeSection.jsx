import React from 'react';

function Candle({ x, delay }) {
  return (
    <g transform={`translate(${x}, 0)`}>
      <rect x="-3" y="18" width="6" height="26" rx="2" fill="#fef3c7" />
      <rect x="-3" y="18" width="6" height="26" rx="2" fill="url(#candleStripe)" opacity="0.5" />
      <g style={{ transformOrigin: '0px 14px' }} className="animate-flicker" >
        <path d="M0 0 C 6 8, 6 14, 0 18 C -6 14, -6 8, 0 0 Z" fill="#fbbf24" />
        <path d="M0 4 C 3 9, 3 13, 0 15 C -3 13, -3 9, 0 4 Z" fill="#fde68a" />
      </g>
    </g>
  );
}

export default function CakeSection() {
  const candleXs = [-40, -24, -8, 8, 24, 40];

  return (
    <section className="relative px-6 py-24 flex flex-col items-center">
      <p className="uppercase tracking-[0.3em] text-aurora3/80 text-xs sm:text-sm mb-3">
        A little something on the side table
      </p>
      <h3 className="font-display text-3xl sm:text-4xl text-glow mb-12 text-center">
        Make a wish, Didi 🎂
      </h3>

      <div className="relative">
        {/* table */}
        <div className="w-80 sm:w-[26rem] h-6 rounded-full bg-gradient-to-b from-[#3b2f2f] to-[#241c1c] shadow-2xl mt-8" />
        <div className="w-72 sm:w-96 h-3 mx-auto rounded-b-full bg-[#1a1414]/70 -mt-1" />

        {/* cake */}
        <svg
          viewBox="-120 -70 240 200"
          className="absolute left-1/2 -translate-x-1/2 -top-40 sm:-top-48 w-64 sm:w-80"
        >
          <defs>
            <linearGradient id="candleStripe" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <linearGradient id="tierTop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbcfe8" />
              <stop offset="100%" stopColor="#f9a8d4" />
            </linearGradient>
            <linearGradient id="tierBottom" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ddd6fe" />
              <stop offset="100%" stopColor="#c4b5fd" />
            </linearGradient>
          </defs>

          {/* bottom tier */}
          <rect x="-100" y="40" width="200" height="55" rx="14" fill="url(#tierBottom)" />
          <rect x="-100" y="40" width="200" height="14" rx="7" fill="#ede9fe" opacity="0.7" />
          {/* drip */}
          {[-80, -50, -20, 10, 40, 70].map((x, i) => (
            <path key={i} d={`M${x} 52 q 8 20 0 34 q -8 -14 0 -34`} fill="#a78bfa" opacity="0.55" />
          ))}

          {/* top tier */}
          <rect x="-65" y="0" width="130" height="45" rx="12" fill="url(#tierTop)" />
          <rect x="-65" y="0" width="130" height="12" rx="6" fill="#fce7f3" opacity="0.8" />
          {[-45, -20, 5, 30] .map((x, i) => (
            <path key={i} d={`M${x} 10 q 6 16 0 28 q -6 -12 0 -28`} fill="#f472b6" opacity="0.5" />
          ))}

          {/* candles */}
          {candleXs.map((x, i) => (
            <Candle key={i} x={x} delay={i * 0.1} />
          ))}

          {/* sprinkles */}
          {Array.from({ length: 14 }).map((_, i) => (
            <circle
              key={i}
              cx={-90 + (i * 14)}
              cy={65 + ((i % 3) * 8)}
              r="2.4"
              fill={i % 2 === 0 ? '#fbbf24' : '#2dd4bf'}
            />
          ))}
        </svg>
      </div>

      <p className="mt-8 text-white/70 max-w-md text-center font-light">
        One candle for every reason you make this family brighter — and a few
        extra, just because you deserve them. 🕯️
      </p>
    </section>
  );
}
