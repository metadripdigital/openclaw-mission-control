'use client';

import Image from 'next/image';
import { Station, Agent } from '@/lib/data';
import PixelBot from './PixelBot';

interface StationCardProps {
  station: Station;
  agent: Agent;
  isSelected: boolean;
  onClick: () => void;
  onManage: (e: React.MouseEvent) => void;
}

export default function StationCard({ station, agent, isSelected, onClick, onManage }: StationCardProps) {
  const isOnline = agent.status === 'active';
  const c = station.color;

  return (
    <div
      onClick={onClick}
      className="rounded-md overflow-hidden cursor-pointer transition-all duration-200 font-mono"
      style={{
        border: `1px solid ${isSelected ? c : '#0d1a28'}`,
        background: '#020608',
        boxShadow: isSelected ? `0 0 24px ${c}33` : 'none',
        transform: isSelected ? 'none' : undefined,
      }}
    >
      {/* Room world */}
      <div className="relative w-full" style={{ aspectRatio: '640 / 340' }}>
        {/* Background image */}
        <Image
          src={station.image}
          alt={station.name}
          fill
          className={`object-contain anim-flicker ${!isOnline ? 'anim-flicker' : ''}`}
          style={{
            filter: isOnline ? undefined : station.filter,
            objectPosition: 'center center',
          }}
          sizes="50vw"
          priority
        />

        {/* Color tint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(180deg, ${c}0f 0%, rgba(0,0,0,0.2) 100%)` }}
        />

        {/* Scanlines */}
        <div className="absolute inset-0 scanlines pointer-events-none" />

        {/* Scan sweep — only when online */}
        {isOnline && (
          <div
            className="absolute left-0 right-0 h-1 pointer-events-none anim-scan"
            style={{ background: `linear-gradient(180deg, ${c}30, transparent)` }}
          />
        )}

        {/* Walking bots — only when online */}
        {isOnline && (
          <>
            <div className="absolute anim-walk-lr" style={{ bottom: '18%', left: '10%' }}>
              <PixelBot color={c} size="md" />
            </div>
            <div className="absolute anim-walk-lr2" style={{ bottom: '24%', right: '12%', opacity: 0.8 }}>
              <PixelBot color={c} size="sm" delay={1.5} />
            </div>
          </>
        )}

        {/* Standby overlay */}
        {!isOnline && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2" style={{ background: 'rgba(0,0,0,0.58)' }}>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center anim-standby"
              style={{ border: `2px solid ${c}`, color: c }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
                <line x1="9" y1="3" x2="9" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="text-sm tracking-[0.2em]" style={{ color: `${c}88` }}>STANDBY</div>
            <div className="text-sm tracking-wide" style={{ color: `${c}55` }}>
              {agent.name} offline
            </div>
          </div>
        )}

        {/* Status badge */}
        <div
          className="absolute top-1.5 left-1.5 flex items-center gap-1 text-sm tracking-widest px-2 py-0.5 rounded"
          style={{
            color: c,
            border: `1px solid ${c}55`,
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {isOnline ? (
            <span
              className="w-1.5 h-1.5 rounded-full anim-glow-pulse"
              style={{ background: '#00ff88', boxShadow: '0 0 4px #00ff88' }}
            />
          ) : '■'}
          {isOnline ? 'ONLINE' : 'STANDBY'}
        </div>

        {/* Level badge */}
        <div
          className="absolute top-1.5 right-1.5 text-sm tracking-widest px-2 py-0.5 rounded"
          style={{ color: c, border: `1px solid ${c}55`, background: 'rgba(0,0,0,0.8)' }}
        >
          LV.{station.level}
        </div>

        {/* Station name */}
        <div
          className="absolute bottom-1.5 left-1/2 -translate-x-1/2 text-sm tracking-[0.15em] px-3 py-0.5 rounded whitespace-nowrap"
          style={{
            color: c,
            border: `1px solid ${c}44`,
            background: 'rgba(0,0,0,0.88)',
            textShadow: `0 0 8px ${c}88`,
          }}
        >
          {station.name.toUpperCase()}
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-2.5 py-1.5"
        style={{ borderTop: '1px solid #0a1520' }}
      >
        <div>
          <div className="tracking-wide" style={{ color: c }}>
            {station.name}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span
              className="text-sm px-1 py-px rounded tracking-wider"
              style={{ color: c, border: `1px solid ${c}44`, background: `${c}11` }}
            >
              LV.{station.level}
            </span>
            <span className="text-sm" style={{ color: isOnline ? '#00ff88' : '#445' }}>
              {isOnline ? '● ONLINE' : '■ STANDBY'}
            </span>
          </div>
        </div>
        <div className="flex gap-1">
          <button
            className="text-sm tracking-widest px-2 py-0.5 rounded cursor-pointer transition-all"
            style={{ color: c, border: `1px solid ${c}44`, background: 'transparent' }}
            onClick={onManage}
          >
            MGT
          </button>
          <button
            className="text-sm tracking-widest px-2 py-0.5 rounded cursor-pointer"
            style={{ color: c, border: `1px solid ${c}44`, background: 'transparent' }}
            onClick={(e) => e.stopPropagation()}
          >
            UPG
          </button>
        </div>
      </div>
    </div>
  );
}
