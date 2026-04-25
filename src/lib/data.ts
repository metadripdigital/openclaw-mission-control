export type AgentStatus = 'active' | 'idle';

export interface Agent {
  id: string;
  name: string;
  role: string;
  dept: string;
  deptColor: string;
  task: string;
  status: AgentStatus;
  route: string;
  stationId: string;
}

export interface Station {
  id: string;
  name: string;
  level: number;
  agentId: string;
  color: string;
  image: string;
  filter?: string;
  desc: string;
  income: string;
  automations: number;
  produced: number;
}

export interface Mission {
  label: string;
  progress: number;
  total: number;
  xp: number;
  icon: string;
}

export interface CommMessage {
  agent: string;
  color: string;
  time: string;
  msg: string;
}

export const AGENTS: Agent[] = [
  {
    id: 'job',
    name: 'JobBot',
    role: 'Career Intelligence',
    dept: 'JOB',
    deptColor: '#00ffcc',
    task: 'Scanning 47 new listings...',
    status: 'active',
    route: '/job',
    stationId: 'job',
  },
  {
    id: 'personal',
    name: 'PersonalBot',
    role: 'Life Operations',
    dept: 'PRSNL',
    deptColor: '#cc66ff',
    task: 'Ready — awaiting activation',
    status: 'idle',
    route: '/personal',
    stationId: 'personal',
  },
  {
    id: 'agency',
    name: 'AgencyBot',
    role: 'Client Delivery',
    dept: 'AGNCY',
    deptColor: '#ff7744',
    task: 'Ready — awaiting activation',
    status: 'idle',
    route: '/agency',
    stationId: 'agency',
  },
  {
    id: 'pipeline',
    name: 'PipelineBot',
    role: 'Automation Core',
    dept: 'PIPE',
    deptColor: '#4dffff',
    task: 'Ready — awaiting activation',
    status: 'idle',
    route: '/pipeline',
    stationId: 'pipeline',
  },
];

export const STATIONS: Station[] = [
  {
    id: 'job',
    name: 'Job HQ',
    level: 1,
    agentId: 'job',
    color: '#00ffcc',
    image: '/rooms/job.jpg',
    desc: 'Career intelligence & job tracking',
    income: 'Tracked',
    automations: 3,
    produced: 47,
  },
  {
    id: 'personal',
    name: 'Life Ops',
    level: 1,
    agentId: 'personal',
    color: '#cc66ff',
    image: '/rooms/personal.jpg',
    filter: 'hue-rotate(200deg) saturate(0.65) brightness(0.45)',
    desc: 'Health, habits & personal tasks',
    income: 'N/A',
    automations: 0,
    produced: 0,
  },
  {
    id: 'agency',
    name: 'Agency Bay',
    level: 1,
    agentId: 'agency',
    color: '#ff7744',
    image: '/rooms/agency.jpg',
    filter: 'hue-rotate(140deg) saturate(0.6) brightness(0.45)',
    desc: 'Client projects & deliverables',
    income: 'N/A',
    automations: 0,
    produced: 0,
  },
  {
    id: 'pipeline',
    name: 'Pipeline Core',
    level: 1,
    agentId: 'pipeline',
    color: '#4dffff',
    image: '/rooms/pipeline.jpg',
    filter: 'hue-rotate(20deg) saturate(0.55) brightness(0.45)',
    desc: 'Workflows, automations & integrations',
    income: 'N/A',
    automations: 0,
    produced: 0,
  },
];

export const MISSIONS: Mission[] = [
  { label: 'Apply to 10 Jobs', progress: 3, total: 10, xp: 500, icon: '💼' },
  { label: 'Activate All Agents', progress: 1, total: 4, xp: 1000, icon: '🤖' },
  { label: 'Close First Client', progress: 0, total: 1, xp: 2000, icon: '🏆' },
];

export const COMMS: CommMessage[] = [
  { agent: 'JobBot', color: '#00ffcc', time: '09:12', msg: 'Commander, flagged 12 high-match roles. 3 are Series B in your target range.' },
  { agent: 'Tommy', color: '#ffe066', time: '09:14', msg: 'Nice. Prioritize remote. Flag equity > 0.5%.' },
  { agent: 'JobBot', color: '#00ffcc', time: '09:15', msg: 'Understood. Draft applications ready by 11:00.' },
  { agent: 'PipelineBot', color: '#4dffff', time: '09:31', msg: 'Standing by. Ready once AgencyBot activates.' },
  { agent: 'Tommy', color: '#ffe066', time: '09:33', msg: 'Spin up AgencyBot — two proposals going out this week.' },
];

export const TICKER_ITEMS = [
  'JobBot flagged: Senior Engineer @ Stripe — $180K + equity',
  'New listing: Product Designer @ Linear — Remote',
  'Interview scheduled: TechCorp — Friday 2PM',
  'AgencyBot OFFLINE — /agency to activate',
  'PipelineBot OFFLINE — /pipeline to activate',
  'JobBot flagged: Staff Engineer @ Vercel — $200K',
  'New listing: Frontend Lead @ Vercel — $160K',
  'JobBot: 3 applications drafted and ready for review',
];
