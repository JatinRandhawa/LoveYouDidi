// All sound effects are synthesized live with the Web Audio API —
// no external audio files needed, so nothing ever plays until the user clicks.

let ctx;
function getCtx() {
  if (!ctx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    ctx = new AudioCtx();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function tone(context, { freq, start, dur, type = 'sine', gain = 0.25, freqEnd }) {
  const osc = context.createOscillator();
  const g = context.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  if (freqEnd) osc.frequency.exponentialRampToValueAtTime(freqEnd, start + dur);
  g.gain.setValueAtTime(0.0001, start);
  g.gain.exponentialRampToValueAtTime(gain, start + 0.03);
  g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  osc.connect(g).connect(context.destination);
  osc.start(start);
  osc.stop(start + dur + 0.05);
}

function noiseBurst(context, { start, dur, gain = 0.2, filterFreq = 1500 }) {
  const bufferSize = context.sampleRate * dur;
  const buffer = context.createBuffer(1, bufferSize, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }
  const noise = context.createBufferSource();
  noise.buffer = buffer;
  const filter = context.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = filterFreq;
  const g = context.createGain();
  g.gain.setValueAtTime(gain, start);
  g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  noise.connect(filter).connect(g).connect(context.destination);
  noise.start(start);
  noise.stop(start + dur);
}

// Party horn honk + cheer-ish sparkle, for the Celebrate button
export function playCelebrationSound() {
  const c = getCtx();
  const now = c.currentTime;
  // horn honk (two quick descending blasts)
  tone(c, { freq: 420, freqEnd: 260, start: now, dur: 0.35, type: 'sawtooth', gain: 0.22 });
  tone(c, { freq: 440, freqEnd: 280, start: now + 0.28, dur: 0.3, type: 'sawtooth', gain: 0.2 });
  // confetti pop noise bursts
  noiseBurst(c, { start: now + 0.02, dur: 0.15, gain: 0.3, filterFreq: 2200 });
  noiseBurst(c, { start: now + 0.5, dur: 0.12, gain: 0.25, filterFreq: 2600 });
  // little rising sparkle cheer
  [0, 1, 2, 3].forEach((i) => {
    tone(c, {
      freq: 500 + i * 130,
      start: now + 0.55 + i * 0.07,
      dur: 0.18,
      type: 'triangle',
      gain: 0.15,
    });
  });
}

// Gentle jingle-bell-ish sound for Santa flying by
export function playJingleSound() {
  const c = getCtx();
  const now = c.currentTime;
  for (let i = 0; i < 6; i++) {
    tone(c, {
      freq: 1200 + (i % 2) * 200,
      start: now + i * 0.16,
      dur: 0.12,
      type: 'sine',
      gain: 0.1,
    });
  }
}

// Shiny bell/chime arpeggio, for opening the gift
export function playGiftOpenSound() {
  const c = getCtx();
  const now = c.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5]; // C E G C E - bright & shiny
  notes.forEach((freq, i) => {
    tone(c, { freq, start: now + i * 0.09, dur: 0.5, type: 'sine', gain: 0.18 });
    tone(c, { freq: freq * 2, start: now + i * 0.09, dur: 0.35, type: 'sine', gain: 0.06 });
  });
  noiseBurst(c, { start: now, dur: 0.4, gain: 0.12, filterFreq: 4000 });
}
