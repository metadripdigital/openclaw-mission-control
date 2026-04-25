'use client';

import { Agent, AGENTS } from '@/lib/data';

interface SidebarProps {
  selectedAgent: string;
  onSelectAgent: (id: string) => void;
}

export default function Sidebar({ selectedAgent, onSelectAgent }: SidebarProps) {
  return (
    <aside
      className="flex flex-col overflow-hidden font-mono"
      style={{
        width: '190px',
        minWidth: '190px',
        background: 'rgba(2,5,15,0.95)',
        borderRight: '1px solid #0a1520',
      }}
    >
      <div
        className="px-3 py-2 text-sm tracking-[0.3em]"
        style={{ color: '#2a3a4a', borderBottom: '1px solid #0a1520' }}
      >
        SHIP CREW
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Commander row */}
        <div
          className="px-3 py-2.5 cursor-pointer"
          style={{ borderLeft: '2px solid #ffe066', background: 'rgba(255,224,102,0.04)', borderBottom: '1px solid #060e18' }}
        >
          <div className="flex items-center justify-between">
            <span style={{ color: '#ffe066', textShadow: '0 0 8px #ffe06666' }}>Tommy</span>
            <span
              className="text-sm px-1 py-px rounded tracking-widest"
              style={{ color: '#ffe066', border: '1px solid #ffe06644', background: '#ffe06611' }}
            >
              CMD
            </span>
          </div>
          <div className="text-sm mt-0.5" style={{ color: '#2a3a4a' }}>Commander / Founder</div>
          <div className="text-sm mt-0.5 italic" style={{ color: '#5a4a22' }}>Managing all operations</div>
        </div>

        {/* Agent rows */}
        {AGENTS.map((agent) => {
          const isSelected = selectedAgent === agent.id;
          const isActive = agent.status === 'active';
          return (
            <div
              key={agent.id}
              className="px-3 py-2.5 cursor-pointer transition-all duration-150"
              style={{
                borderLeft: `2px solid ${isSelected ? agent.deptColor : 'transparent'}`,
                background: isSelected ? `${agent.deptColor}07` : 'transparent',
                borderBottom: '1px solid #060e18',
              }}
              onClick={() => onSelectAgent(agent.id)}
            >
              <div className="flex items-center justify-between">
                <span
                  style={{
                    color: isActive ? agent.deptColor : '#3a4a5a',
                    textShadow: isActive ? `0 0 6px ${agent.deptColor}55` : 'none',
                  }}
                >
                  {agent.name}
                </span>
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-[5px] h-[5px] rounded-full"
                    style={{
                      background: isActive ? '#00ff88' : '#1a2030',
                      boxShadow: isActive ? '0 0 5px #00ff88' : 'none',
                      display: 'inline-block',
                      ...(isActive ? { animation: 'glow-pulse 1.5s infinite' } : {}),
                    }}
                  />
                  <span
                    className="text-sm px-1 py-px rounded tracking-widest"
                    style={{
                      color: isActive ? agent.deptColor : '#2a3a4a',
                      border: `1px solid ${isActive ? agent.deptColor + '44' : '#1a2030'}`,
                      background: isActive ? `${agent.deptColor}11` : 'transparent',
                    }}
                  >
                    {agent.dept}
                  </span>
                </div>
              </div>
              <div className="text-sm mt-0.5" style={{ color: '#2a3a4a' }}>{agent.role}</div>
              <div
                className="text-sm mt-0.5 italic"
                style={{ color: isActive ? '#1e2e1e' : '#1e2830' }}
              >
                {agent.task}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
