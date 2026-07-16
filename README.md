# Happy Birthday, Nanne Didi 🌌

A single-page birthday website, built with React + Tailwind CSS.

## Features
- Aurora/cosmic animated background with twinkling stars and drifting flowers
- Hero section with a "superwoman" portrait card (her photo + cape + glow)
- A personal birthday message section
- An animated birthday cake with flickering candles
- **Celebrate button** — fires party-popper confetti from both corners + center,
  plays a synthesized party-horn/cheer sound (no external audio files), and
  pops up a random loving message
- **Gift button** — Santa flies across on his sleigh with reindeer (with a jingle
  sound), drops a gift box which falls and lands; clicking the gift box opens
  it with a shiny confetti burst, a chime sound, and a set of "girlish gift"
  icons (charm, sparkle, grace, etc.) floating out, plus a personal note

All sound effects are synthesized live in the browser with the Web Audio API,
so nothing plays until you actually click a button.

## Running it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Building for production

```bash
npm run build
```

This outputs a static site into the `dist/` folder, which you can deploy
anywhere (Netlify, Vercel, GitHub Pages), or preview it locally with:

```bash
npm run preview
```

## Customizing
- Her photo: `src/assets/sister.jpg`
- The birthday message: `src/components/MessageSection.jsx`
- Gift items / labels: `src/components/GiftSection.jsx` (`GIFT_ITEMS` array)
- Colors & animation timings: `tailwind.config.js`
- Signature at the bottom: `src/components/Footer.jsx` and `MessageSection.jsx`

Happy Birthday! 🎉🎂✨
