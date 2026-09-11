import React, { useState } from 'react';
import { X, Server, Shield, Database, Cpu, ArrowRight, Activity, Terminal, CheckCircle } from 'lucide-react';

interface ArchitectureModalProps {
  projectTitle: string | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ projectTitle, onClose }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  if (!projectTitle) return null;

  const isArgus = projectTitle.toLowerCase().includes('argus') || projectTitle.toLowerCase().includes('voc');
  const isOktopus = projectTitle.toLowerCase().includes('oktopus');

  const argusNodes = [
    {
      id: 1,
      title: 'Threat Feeds Integrations',
      tech: 'NVD API, Vulners API, CVE Mirror',
      desc: 'Automatic data collectors pulling, merging & deduplicating vulnerability entries every 60 seconds.',
      icon: Database,
      color: 'border-sky-500/50 text-sky-400'
    },
    {
      id: 2,
      title: 'Deduplication & Severity Matrix',
      tech: 'CVSS v3.1 / v4.0 Scorer',
      desc: 'Normalizes raw JSON data, calculates real severity scores, and tags CVEs by CVSS threat impact.',
      icon: Cpu,
      color: 'border-purple-500/50 text-purple-400'
    },
    {
      id: 3,
      title: 'Real-time Telegram Alerting',
      tech: 'Telegram Bot API, Webhooks',
      desc: 'Instant dispatching of Critical and High alerts directly to on-call SOC L1 analysts.',
      icon: Shield,
      color: 'border-emerald-500/50 text-emerald-400'
    },
    {
      id: 4,
      title: 'Vulnerability Operations Console',
      tech: 'Chart.js, DataTables, Bootstrap',
      desc: 'Interactive operational console with filtered views, search, and live vulnerability analytics.',
      icon: Server,
      color: 'border-cyan-500/50 text-cyan-400'
    }
  ];

  const oktopusNodes = [
    {
      id: 1,
      title: 'Log Collector Agents',
      tech: 'Logstash, Syslog, Beats',
      desc: 'Gathers network flow logs from Linux Servers, Cisco switches, and Windows Active Directory.',
      icon: Server,
      color: 'border-blue-500/50 text-blue-400'
    },
    {
      id: 2,
      title: 'SIEM Correlation Engine',
      tech: 'ELK Stack (Elasticsearch)',
      desc: 'Parses unstructured logs, applies MITRE ATT&CK mappings, and flags brute-force or port scans.',
      icon: Cpu,
      color: 'border-purple-500/50 text-purple-400'
    },
    {
      id: 3,
      title: 'Incident Detection & Triaging',
      tech: 'SOC L1 Rules Engine',
      desc: 'Automatically classifies events by severity (Low, Medium, High, Critical) for immediate triage.',
      icon: Shield,
      color: 'border-amber-500/50 text-amber-400'
    },
    {
      id: 4,
      title: 'SOC Analyst Dashboard',
      tech: 'React, Tailwind, Recharts',
      desc: 'Comprehensive visual dashboard displaying attack timelines, IP geolocation, and active incidents.',
      icon: Activity,
      color: 'border-emerald-500/50 text-emerald-400'
    }
  ];

  const nodes = isArgus ? argusNodes : oktopusNodes;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#0a0e1a] border border-sky-500/30 rounded-2xl shadow-2xl overflow-hidden p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-display">
                {projectTitle} — System Architecture & Data Flow
              </h3>
              <p className="text-xs text-sky-400 font-mono">
                SOC L1 Architectural Design & Pipeline Map
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Pipeline Map */}
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {nodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <div key={node.id} className="relative group">
                  <div
                    onClick={() => setActiveStep(activeStep === node.id ? null : node.id)}
                    className={`p-4 rounded-xl border bg-[#0d1326] cursor-pointer transition-all duration-300 hover:border-sky-400 ${node.color} ${
                      activeStep === node.id ? 'ring-2 ring-sky-400 bg-sky-950/30' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        STEP 0{node.id}
                      </span>
                      <Icon size={20} />
                    </div>
                    <h4 className="font-bold text-sm text-slate-100 mb-1">{node.title}</h4>
                    <p className="text-xs font-mono text-sky-400 mb-2">{node.tech}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{node.desc}</p>
                  </div>
                  {index < nodes.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-sky-500/60">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Metrics & Technical Highlights */}
        <div className="mt-4 p-4 rounded-xl bg-[#080c16] border border-slate-800 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <CheckCircle size={16} /> Real-time Pipeline Health: 100%
          </div>
          <div className="flex items-center gap-2 text-sky-400">
            <Activity size={16} /> Data Latency: &lt; 50ms
          </div>
          <div className="flex items-center gap-2 text-purple-400">
            <Terminal size={16} /> Deployment: Dockerized Containers / Linux Host
          </div>
        </div>
      </div>
    </div>
  );
};
