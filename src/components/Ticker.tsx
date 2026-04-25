'use client';

import { TICKER_ITEMS } from '@/lib/data';

export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="flex items-center overflow-hidden flex-shrink-0 font-mono"
      style={{
        height: '30px',
        background: 'rgba(2,5,15,0.98)',
        borderTop: '1px solid #00ffcc1a',
        position: 'sticky',
        bottom: 0,
        zIndex: 50,
      }}
    >
      <div
        className="flex items-center px-3 h-full flex-shrink-0 text-sm font-bold tracking-[2px]"
        style={{ background: '#00ffcc', color: '#000' }}
      >
        LIVE
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="flex whitespace-nowrap anim-ticker">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="text-sm px-5 flex-shrink-0"
              style={{ color: '#334455', borderRight: '1px solid #0a1520' }}
            >
              ◆ {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
