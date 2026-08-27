import { useMemo } from 'react';

/** Deterministic 32-bit hash from a string (FNV-1a). */
function hashString(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/**
 * A "reading" for a project specimen: a smooth instrument trace generated
 * deterministically from the project's title, drawn in recorded-data
 * Prussian on frosted glass. Every project gets its own artifact.
 */
const InstrumentReading = ({ title, className = '' }) => {
  const { points, area, seed } = useMemo(() => {
    const h = hashString(title);
    const rnd = () => {
      let x = h + Math.sin((h + 1) * 12.9898) * 43758.5453;
      return x - Math.floor(x);
    };

    const a1 = 0.75 + rnd() * 2.1;
    const a2 = 1.9 + rnd() * 3.4;
    const a3 = 3.6 + rnd() * 5.2;
    const p1 = rnd() * Math.PI * 2;
    const p2 = rnd() * Math.PI * 2;
    const p3 = rnd() * Math.PI * 2;
    const w1 = 0.55 + rnd() * 0.25;
    const w2 = 0.28 + rnd() * 0.18;
    const w3 = 0.14 + rnd() * 0.1;
    const lift = 0.1 + rnd() * 0.12;

    const W = 320;
    const H = 120;
    const N = 40;
    const pts = [];
    for (let i = 0; i <= N; i++) {
      const t = (i / N) * Math.PI * 2;
      const v =
        w1 * Math.sin(a1 * t + p1) +
        w2 * Math.sin(a2 * t + p2) +
        w3 * Math.sin(a3 * t + p3);
      const x = (i / N) * W;
      const y = H / 2 - v * (H * 0.34) + lift * H * Math.sin(t);
      pts.push([x.toFixed(1), y.toFixed(1)]);
    }
    const areaPath =
      `M${pts[0][0]},${H} ` +
      pts.map(([x, y]) => `L${x},${y}`).join(' ') +
      ` L${W},${H} Z`;
    return { points: pts, area: areaPath, seed: (h % 1000).toString().padStart(3, '0') };
  }, [title]);

  return (
    <div className={`rounded-xl border border-white/10 bg-white/[0.03] p-4 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="eyebrow">PROJECT SIGNAL</span>
        <span className="eyebrow text-prussian">R-{seed}</span>
      </div>
      <svg viewBox="0 0 320 120" className="w-full h-auto block" aria-hidden="true">
        {/* faint field + ticks */}
        <line x1="0" y1="60" x2="320" y2="60" stroke="rgba(233,230,223,0.12)" strokeWidth="1" strokeDasharray="2 4" />
        {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((x) => (
          <g key={x}>
            <line x1={x} y1="8" x2={x} y2="112" stroke="rgba(233,230,223,0.06)" strokeWidth="0.5" />
            <line x1={x} y1="0" x2={x} y2="6" stroke="rgba(154,164,176,0.5)" strokeWidth="1" />
          </g>
        ))}
        <path d={area} fill="var(--prussian)" opacity="0.12" />
        <polyline
          points={points.map(([x, y]) => `${x},${y}`).join(' ')}
          fill="none"
          stroke="var(--prussian)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 0 6px rgba(91,143,188,0.5))' }}
        />
      </svg>
      <div className="flex justify-between mt-2">
        <span className="eyebrow">40 SAMPLES · AUTO</span>
        <span className="eyebrow">SCALE 1:1</span>
      </div>
    </div>
  );
};

export default InstrumentReading;
