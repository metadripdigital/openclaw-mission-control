'use client';

import { useState } from 'react';
import HUD from '@/components/HUD';
import Sidebar from '@/components/Sidebar';
import StationMap from '@/components/StationMap';
import RightPanel from '@/components/RightPanel';
import Ticker from '@/components/Ticker';

export default function Home() {
  const [selectedAgent, setSelectedAgent] = useState('job');

  return (
    <div
      className="flex flex-col font-mono"
      style={{ height: '100vh', background: '#04060f', overflow: 'hidden' }}
    >
      <HUD />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar selectedAgent={selectedAgent} onSelectAgent={setSelectedAgent} />
        <StationMap selectedAgent={selectedAgent} onSelectAgent={setSelectedAgent} />
        <RightPanel />
      </div>

      <Ticker />
    </div>
  );
}
