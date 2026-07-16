import React, { useMemo } from 'react';

const FLOWERS = ['🌸', '🌷', '✿', '❀', '🌼'];

function seededItems(count, seedBase) {
  return Array.from({ length: count }, (_, i) => {
    const left = (i * 137.5) % 100; // golden-angle spread for even distribution
    const delay = ((i * 3.7 + seedBase) % 18);
    const duration = 14 + ((i * 5) % 10);
    const size = 0.6 + ((i * 13) % 10) / 10;
    return { left, delay, duration, size };
  });
}

export default function AuroraBackground() {
  const stars = useMemo(() => Array.from({ length: 70 }, (_, i) => ({
    left: (i * 53.7) % 100,
    top: (i * 29.3) % 100,
    delay: (i % 10) * 0.3,
    size: 1 + (i % 3),
  })), []);

  const flowers = useMemo(() => seededItems(16, 5), []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-midnight">
      {/* Aurora blobs */}
      <div className="absolute -top-1/4 left-1/4 w-[70vw] h-[70vw] rounded-full bg-aurora1/20 blur-[110px] animate-auroraMove" />
      <div className="absolute top-1/3 -left-1/4 w-[60vw] h-[60vw] rounded-full bg-aurora2/25 blur-[110px] animate-auroraMove" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 right-0 w-[65vw] h-[65vw] rounded-full bg-aurora3/20 blur-[120px] animate-auroraMove" style={{ animationDelay: '4s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight/40 to-midnight" />

      {/* Stars */}
      {stars.map((s, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* Drifting flowers */}
      {flowers.map((f, i) => (
        <div
          key={`flower-${i}`}
          className="absolute select-none animate-drift"
          style={{
            left: `${f.left}%`,
            top: 0,
            fontSize: `${f.size + 0.8}rem`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            opacity: 0.75,
            filter: 'drop-shadow(0 0 6px rgba(244,114,182,0.4))',
          }}
        >
          {FLOWERS[i % FLOWERS.length]}
        </div>
      ))}
    </div>
  );
}
