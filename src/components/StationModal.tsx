'use client';

import Image from 'next/image';
import { Station, Agent } from '@/lib/data';

interface StationModalProps {
  station: Station;
  agent: Agent;
  onClose: () => void;
}

export default function StationModal({ station, agent, onClose }: StationModalProps) {
  const c = station.color;
  const isOnline = agent.status === 'active';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center font-mono"
      style={{ background: 'rgba(0,0,5,0.92)' }}
      onClick={onClose}
    >
      <div
        className="rounded-lg overflow-hidden anim-fadein"
        style={{
          width: '380px',
          background: '#020810',
          border: `1px solid ${c}`,
          boxShadow: `0 0 40px ${c}33`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Room preview */}
        <div className="relative w-full" style={{ aspectRatio: '640/340' }}>
          <Image
            src={station.image}
            alt={station.name}
            fill
            className="object-contain"
            style={{ filter: isOnline ? undefined : station.filter }}
            sizes="380px"
          />
          <div className="absolute inset-0 scanlines pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(180deg, ${c}0f 0%, rgba(0,0,0,0.4) 100%)` }} />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded cursor-pointer text-lg transition-all"
            style={{ background: 'rgba(0,0,0,0.8)', color: '#445', border: '1px solid #0a1520' }}
          >
            ✕
          </button>
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm tracking-[0.2em] px-4 py-1 rounded"
            style={{ color: c, background: 'rgba(0,0,0,0.88)', border: `1px solid ${c}44`, textShadow: `0 0 8px ${c}88` }}
          >
            {station.name.toUpperCase()}
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="tracking-[2px]" style={{ color: c }}>{station.name}</div>
              <div className="text-sm tracking-[2px] mt-0.5" style={{ color: '#2a3a4a' }}>operations</div>
            </div>
            <span
              className="text-sm tracking-widest px-2 py-0.5 rounded"
              style={{ color: isOnline ? '#00ff88' : '#445', border: `1px solid ${isOnline ? '#00ff8844' : '#1a2030'}`, background: isOnline ? '#00ff8811' : 'transparent' }}
            >
              {isOnline ? '● ONLINE' : '■ STANDBY'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-5">
            {[
              ['INCOME', station.income],
              ['AGENT', agent.name],
              ['AUTOMATIONS', `${station.automations} active`],
              ['PRODUCED', `${station.produced} items`],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-sm tracking-[2px] mb-1" style={{ color: '#233' }}>{k}</div>
                <div style={{ color: c }}>{v}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            {['UPGRADE', 'MANAGE', 'INFO'].map((btn) => (
              <button
                key={btn}
                className="flex-1 py-1.5 text-sm tracking-[2px] rounded cursor-pointer transition-all font-mono"
                style={{ color: c, border: `1px solid ${c}55`, background: `${c}0f` }}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
