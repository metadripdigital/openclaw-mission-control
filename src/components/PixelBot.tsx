'use client';

interface PixelBotProps {
  color?: string;
  size?: 'sm' | 'md';
  delay?: number;
}

export default function PixelBot({ color = '#00ffcc', size = 'md', delay = 0 }: PixelBotProps) {
  const s = size === 'sm' ? 0.7 : 1;
  const w = Math.round(22 * s);
  const h = Math.round(34 * s);
  const style = delay ? { animationDelay: `${delay}s` } : {};

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 22 34"
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: 'pixelated', display: 'block', ...style }}
    >
      {/* Antenna */}
      <rect x="10" y="0" width="2" height="4" fill={color} opacity="0.7" />
      <rect x="8" y="0" width="6" height="2" rx="1" fill={color} className="anim-glow-pulse" />

      {/* Head */}
      <rect x="5" y="4" width="12" height="10" rx="1" fill={color} opacity="0.85" />

      {/* Eyes */}
      <rect x="7" y="7" width="3" height="3" rx="0.5" fill="#001510" />
      <rect x="8" y="7" width="1" height="1" fill={color} className="anim-blink" style={{ transformOrigin: '8.5px 7.5px' }} />
      <rect x="12" y="7" width="3" height="3" rx="0.5" fill="#001510" />
      <rect x="13" y="7" width="1" height="1" fill={color} className="anim-blink2" style={{ transformOrigin: '13.5px 7.5px' }} />

      {/* Mouth */}
      <rect x="8" y="12" width="6" height="1" fill={color} opacity="0.4" />

      {/* Neck */}
      <rect x="9" y="14" width="4" height="2" fill={color} opacity="0.6" />

      {/* Body */}
      <rect x="3" y="16" width="16" height="12" rx="1" fill={color} opacity="0.5" />

      {/* Chest display */}
      <rect x="6" y="18" width="10" height="7" rx="0.5" fill="#001a15" />
      <rect x="7" y="19" width="8" height="1" fill={color} opacity="0.9" />
      <rect x="7" y="21" width="5" height="1" fill={color} opacity="0.6" />
      <rect x="7" y="23" width="8" height="1" fill={color} opacity="0.7" />

      {/* Arms */}
      <rect x="0" y="17" width="3" height="8" rx="1" fill={color} opacity="0.5" className="anim-arm-l" style={{ transformOrigin: '1.5px 17px' }} />
      <rect x="19" y="17" width="3" height="8" rx="1" fill={color} opacity="0.5" className="anim-arm-r" style={{ transformOrigin: '20.5px 17px' }} />

      {/* Legs */}
      <rect x="5" y="28" width="5" height="6" rx="1" fill={color} opacity="0.6" className="anim-leg-l" style={{ transformOrigin: '7.5px 28px' }} />
      <rect x="12" y="28" width="5" height="6" rx="1" fill={color} opacity="0.6" className="anim-leg-r" style={{ transformOrigin: '14.5px 28px' }} />
    </svg>
  );
}
