import React from 'react';

export default function MessageSection() {
  return (
    <section className="relative px-6 py-24 flex justify-center">
      <div className="max-w-2xl w-full card-glass rounded-[2rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 text-8xl opacity-10 select-none">🌸</div>
        <div className="absolute -bottom-10 -left-10 text-8xl opacity-10 select-none">✨</div>

        <p className="text-center text-aurora1 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">
          For the most loveable, most charming
        </p>
        <h3 className="text-center font-display text-2xl sm:text-3xl text-glow mb-8">
          Nanne Didi, this world got so lucky the day you arrived.
        </h3>

        <div className="space-y-5 text-white/85 text-base sm:text-lg leading-relaxed font-light">
          <p>
            Of all the sisters in all the corners of this dirt ball we call home,
            none come close to you — the most loveable, most charming, most
            impossibly you person I know. You make ordinary days feel like
            something worth celebrating.
          </p>
          <p>
            Thank you for keeping our father alive around me, and the child alive
            inside me. In the way you laugh, the way you fuss over me, the way
            you carry all of us with you wherever you go — you keep the best
            parts of our story going.
          </p>
          <p className="text-glow font-medium text-aurora2">
            Happy Birthday, Nanne Didi. Here's to you — always the star of this
            little galaxy. 🌌
          </p>
        </div>

        <p className="mt-10 text-right italic text-white/60 text-sm sm:text-base">
          — with all my love, Jatin
        </p>
      </div>
    </section>
  );
}
