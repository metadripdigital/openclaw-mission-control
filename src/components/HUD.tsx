'use client';

import { useEffect, useState } from 'react';

export default function HUD() {
  const [time, setTime] = useState('');
  const [speed, setSpeed] = useState('AUTO');

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const speeds = ['1×', '2×', '5×', 'AUTO'];

  return (
    <header
      className="flex items-center gap-4 px-4 font-mono flex-shrink-0"
      style={{
        height: '44px',
        background: 'rgba(2,5,15,0.98)',
        borderBottom: '1px solid #00ffcc33',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Logo */}
      <div className="tracking-[3px]" style={{ color: '#00ffcc', textShadow: '0 0 12px #00ffcc' }}>
        OPENCLAW
      </div>
      <span style={{ color: '#0d1f2d' }}>|</span>
      <span className="text-sm tracking-[2px]" style={{ color: '#667788' }}>THE BRIDGE</span>

      {/* Divider */}
      <div style={{ width: '1px', height: '22px', background: '#0d1f2d' }} />

      {/* Status */}
      <div className="flex items-center gap-1.5">
        <span
          className="w-[7px] h-[7px] rounded-full anim-glow-pulse"
          style={{ background: '#00ff88', boxShadow: '0 0 8px #00ff88' }}
        />
        <span className="text-sm tracking-[2px]" style={{ color: '#00ff88' }}>ONLINE</span>
      </div>

      <div style={{ width: '1px', height: '22px', background: '#0d1f2d' }} />

      {/* Stats */}
      {[
        ['SHIP TIME', time || '--:--:--'],
        ['AGENTS', '1 / 4'],
        ['DAY', '1'],
        ['MISSIONS', '3 ACTIVE'],
      ].map(([k, v]) => (
        <div key={k} className="flex flex-col items-center">
          <span className="text-sm tracking-[2px]" style={{ color: '#2a3a4a' }}>{k}</span>
          <span style={{ color: '#99aacc' }}>{v}</span>
        </div>
      ))}

      {/* Speed controls */}
      <div className="ml-auto flex gap-1.5">
        {speeds.map((s) => (
          <button
            key={s}
            onClick={() => setSpeed(s)}
            className="text-sm tracking-wide px-2 py-0.5 rounded transition-all cursor-pointer font-mono"
            style={{
              border: `1px solid ${speed === s ? '#00ffcc77' : '#0d2030'}`,
              color: speed === s ? '#00ffcc' : '#233',
              background: speed === s ? '#00ffcc11' : 'transparent',
            }}
          >
            {s}
          </button>
        ))}
      </div>
    </header>
  );
}
