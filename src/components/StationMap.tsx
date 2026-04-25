'use client';

import { useState } from 'react';
import { STATIONS, AGENTS } from '@/lib/data';
import StationCard from './StationCard';
import StationModal from './StationModal';

interface StationMapProps {
  selectedAgent: string;
  onSelectAgent: (id: string) => void;
}

export default function StationMap({ selectedAgent, onSelectAgent }: StationMapProps) {
  const [modalStationId, setModalStationId] = useState<string | null>(null);

  const modalStation = STATIONS.find((s) => s.id === modalStationId);
  const modalAgent = modalStation ? AGENTS.find((a) => a.id === modalStation.agentId)! : null;

  const ROUTES = [
    { cmd: '/job', color: '#00ffcc', active: true },
    { cmd: '/personal', color: '#cc66ff', active: false },
    { cmd: '/agency', color: '#ff7744', active: false },
    { cmd: '/pipeline', color: '#4dffff', active: false },
    { cmd: '/status', color: '#ffe066', active: false },
    { cmd: '/sync', color: '#ffe066', active: false },
  ];

  return (
    <main className="flex-1 overflow-y-auto p-4 font-mono">
      {/* Section label */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm tracking-[3px]" style={{ color: '#2a3a4a' }}>STATION MAP</span>
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, #0d1f2d, transparent)' }} />
        <span className="text-sm tracking-[2px]" style={{ color: '#1a2a3a' }}>4 STATIONS</span>
      </div>

      {/* Station grid */}
      <div className="grid grid-cols-2 gap-3">
        {STATIONS.map((station) => {
          const agent = AGENTS.find((a) => a.id === station.agentId)!;
          return (
            <StationCard
              key={station.id}
              station={station}
              agent={agent}
              isSelected={selectedAgent === station.agentId}
              onClick={() => onSelectAgent(station.agentId)}
              onManage={(e) => {
                e.stopPropagation();
                setModalStationId(station.id);
              }}
            />
          );
        })}
      </div>

      {/* Command routing */}
      <div
        className="mt-4 rounded-md p-3"
        style={{ background: '#020608', border: '1px solid #0a1520' }}
      >
        <div className="text-sm tracking-[3px] mb-2.5" style={{ color: '#2a3a4a' }}>COMMAND ROUTING</div>
        <div className="flex flex-wrap gap-2">
          {ROUTES.map(({ cmd, color, active }) => (
            <button
              key={cmd}
              className="px-3 py-1 rounded tracking-wide cursor-pointer transition-all font-mono"
              style={{
                color: active ? color : `${color}55`,
                border: `1px solid ${active ? `${color}55` : `${color}22`}`,
                background: active ? `${color}11` : `${color}06`,
                boxShadow: active ? `0 0 6px ${color}1a` : 'none',
              }}
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalStation && modalAgent && (
        <StationModal
          station={modalStation}
          agent={modalAgent}
          onClose={() => setModalStationId(null)}
        />
      )}
    </main>
  );
}
