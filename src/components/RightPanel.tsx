'use client';

import { useState } from 'react';
import { MISSIONS, COMMS } from '@/lib/data';

export default function RightPanel() {
  const [tab, setTab] = useState<'commander' | 'comms'>('commander');

  return (
    <aside
      className="flex flex-col font-mono"
      style={{
        width: '225px',
        minWidth: '225px',
        background: 'rgba(2,5,15,0.95)',
        borderLeft: '1px solid #0a1520',
      }}
    >
      {/* Tabs */}
      <div className="flex" style={{ borderBottom: '1px solid #0a1520' }}>
        {(['commander', 'comms'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="flex-1 py-2.5 text-sm tracking-[2px] cursor-pointer transition-all font-mono"
            style={{
              color: tab === t ? '#00ffcc' : '#233',
              borderBottom: `2px solid ${tab === t ? '#00ffcc' : 'transparent'}`,
              background: tab === t ? '#00ffcc07' : 'transparent',
            }}
          >
            {t === 'commander' ? 'COMMANDER' : 'SHIP COMMS'}
          </button>
        ))}
      </div>

      {/* Commander panel */}
      {tab === 'commander' && (
        <div className="flex-1 overflow-y-auto p-3">
          {/* Commander card */}
          <div
            className="rounded-md p-3 text-center mb-3"
            style={{ background: '#ffe06607', border: '1px solid #ffe06633' }}
          >
            <div className="text-sm tracking-[3px] mb-1" style={{ color: '#ffe06666' }}>⚔ COMMANDER</div>
            <div className="text-3xl tracking-widest mb-1" style={{ color: '#ffe066', textShadow: '0 0 16px #ffe06666' }}>LV.1</div>
            <div className="mb-2" style={{ color: '#ffe06688' }}>Tommy</div>
            {/* XP bar */}
            <div className="h-1.5 rounded-full overflow-hidden mb-1" style={{ background: '#080f1e' }}>
              <div className="h-full rounded-full" style={{ width: '15%', background: 'linear-gradient(to right, #ffe066, #ffaa00)' }} />
            </div>
            <div className="flex justify-between text-sm" style={{ color: '#2a3a4a' }}>
              <span>150 XP</span><span>1,000 XP</span>
            </div>
          </div>

          {/* Missions */}
          <div className="text-sm tracking-[3px] mb-2" style={{ color: '#2a3a4a' }}>ACTIVE MISSIONS</div>
          {MISSIONS.map((m, i) => (
            <div
              key={i}
              className="rounded p-2 mb-1.5"
              style={{ background: '#030810', border: '1px solid #0a1520' }}
            >
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm" style={{ color: '#8899aa' }}>{m.icon} {m.label}</span>
                <span
                  className="text-sm px-1 py-px rounded"
                  style={{ color: '#ffe066', background: '#ffe06611', border: '1px solid #ffe06622' }}
                >
                  +{m.xp} XP
                </span>
              </div>
              <div className="h-1 rounded-full overflow-hidden mb-1" style={{ background: '#080f1e' }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.round((m.progress / m.total) * 100)}%`,
                    background: 'linear-gradient(to right, #00ff88, #00ffcc)',
                  }}
                />
              </div>
              <div className="text-sm" style={{ color: '#233' }}>{m.progress}/{m.total}</div>
            </div>
          ))}

          {/* Achievement */}
          <div className="text-sm tracking-[3px] mt-3 mb-2" style={{ color: '#2a3a4a' }}>LATEST ACHIEVEMENT</div>
          <div className="rounded p-2.5" style={{ background: '#00ff8807', border: '1px solid #00ff8833' }}>
            <div className="mb-1" style={{ color: '#00ff88' }}>🎉 First Contact</div>
            <div className="text-sm" style={{ color: '#2a3a4a' }}>JobBot successfully activated</div>
            <div className="text-sm mt-1" style={{ color: '#1a2a3a' }}>Unlocked today</div>
          </div>
        </div>
      )}

      {/* Comms panel */}
      {tab === 'comms' && (
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-3">
            <div className="text-sm tracking-[3px] mb-2.5" style={{ color: '#2a3a4a' }}>● 2 ONLINE</div>
            {COMMS.map((msg, i) => (
              <div
                key={i}
                className="mb-2 p-2 rounded"
                style={{ background: '#ffffff03', borderLeft: `2px solid ${msg.color}55` }}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm" style={{ color: msg.color }}>{msg.agent}</span>
                  <span className="text-sm" style={{ color: '#233' }}>{msg.time}</span>
                </div>
                <div className="text-sm leading-relaxed" style={{ color: '#3a4a5a' }}>{msg.msg}</div>
              </div>
            ))}
          </div>
          {/* Input */}
          <div className="p-3 flex gap-2" style={{ borderTop: '1px solid #0a1520' }}>
            <div
              className="flex-1 rounded text-sm px-2 py-1.5"
              style={{ background: '#030810', border: '1px solid #0a1520', color: '#1a2a3a' }}
            >
              Type a command...
            </div>
            <button
              className="px-2.5 py-1 rounded cursor-pointer font-mono"
              style={{ background: '#00ccff22', border: '1px solid #00ccff44', color: '#00ccff' }}
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
