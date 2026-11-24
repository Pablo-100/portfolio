import React, { useState } from 'react';
import { 
  X, Server, Shield, Database, Cpu, ArrowRight, Activity, Terminal, 
  CheckCircle, ExternalLink, Github, Network, Radio, Layers, Bot, 
  AlertTriangle, Lock, Zap, FileCheck, GitBranch, Sparkles
} from 'lucide-react';

export interface ArchitectureNode {
  id: number;
  stage: 'Ingestion' | 'Processing' | 'Engine' | 'Delivery';
  title: string;
  tech: string;
  desc: string;
  deepDive: {
    protocolOrFormat: string;
    operations: string[];
    securityOrQuality: string;
  };
  icon: any;
  color: string;
}

export interface ProjectArchitecture {
  id: string;
  title: string;
  badge: string;
  repoName: string;
  repoUrl: string;
  demoUrl?: string;
  summary: string;
  pipelineHealth: string;
  latencyOrThroughput: string;
  deploymentSpecs: string;
  keyHighlights: string[];
  nodes: ArchitectureNode[];
}

const ARCHITECTURES: Record<string, ProjectArchitecture> = {
  'oktopus-voc': {
    id: 'oktopus-voc',
    title: 'OCTUPUS-VOC – Vulnerability Operations Center & EASM',
    badge: 'RBVM · EASM · Flagship',
    repoName: 'Pablo-100/Oktopus-VOC',
    repoUrl: 'https://github.com/Pablo-100/Oktopus-VOC',
    demoUrl: 'https://oktopus-voc.vercel.app',
    summary: 'Enterprise Vulnerability Operations Center combining RBVM, External Attack Surface Management (EASM), and Threat Intel to rank assets by real exploitation risk.',
    pipelineHealth: '180 Passing Tests (Strict TS)',
    latencyOrThroughput: '< 45ms Enrichment Cycle',
    deploymentSpecs: 'Next.js 16 · Bun Runtime · Neon PostgreSQL · Better Auth',
    keyHighlights: [
      'Six External Exposure Providers (Shodan, Censys, SecurityTrails, etc.)',
      'Dual Vector RBVM Formula (CVSS × EPSS × Exposure Factor)',
      'Pre-disclosure 0-day Intelligence Tracker',
      'Automated SOC Alerting via Telegram Bot & Webhooks'
    ],
    nodes: [
      {
        id: 1,
        stage: 'Ingestion',
        title: 'Multi-Source Exposure & CVE Ingestion',
        tech: 'NVD API 2.0, CISA KEV, EPSS Feed, Shodan, Censys',
        desc: 'Continuous real-time collectors fetching newly published CVEs, pre-disclosure 0-days, and internet-facing asset reconnaissance.',
        deepDive: {
          protocolOrFormat: 'REST JSON / Async Webhooks / EPSS v3 CSV streams',
          operations: [
            'Pulls NVD feeds and CISA Known Exploited Vulnerabilities Catalog',
            'Correlates IP addresses, subdomains, SSL certificates from EASM providers',
            'Deduplicates incoming feeds with cryptographic SHA-256 signatures'
          ],
          securityOrQuality: 'Fail-safe backoff and token bucket rate-limiting across provider APIs'
        },
        icon: Database,
        color: 'border-sky-500/50 text-sky-400'
      },
      {
        id: 2,
        stage: 'Processing',
        title: 'Normalization & Exposure Graph Mapping',
        tech: 'TypeScript Strict, Bun, Exposure Graph Engine',
        desc: 'Normalizes disparate threat feeds into a unified schema and maps vulnerabilities directly onto company assets.',
        deepDive: {
          protocolOrFormat: 'Structured JSON-LD & Typed AST Nodes',
          operations: [
            'Maps CVE identifiers to open ports, services, and domain perimeters',
            'Enriches entries with CWE, CAPEC, and MITRE ATT&CK techniques',
            'Cross-checks with exploit availability in ExploitDB and Metasploit'
          ],
          securityOrQuality: 'Strict Zod runtime validation with zero schema drift'
        },
        icon: Cpu,
        color: 'border-purple-500/50 text-purple-400'
      },
      {
        id: 3,
        stage: 'Engine',
        title: 'RBVM Risk Scoring & Multi-Tenancy Engine',
        tech: 'Weighted CVSS v3.1/v4.0 + EPSS Probabilities',
        desc: 'Calculates contextual exploitability risk score, distinguishing theoretical flaws from actively exploited assets.',
        deepDive: {
          protocolOrFormat: 'Algorithmic Risk Matrix (0.00 – 10.00 composite)',
          operations: [
            'Computes real exposure probability using EPSS percentiles and KEV status',
            'Isolates tenant environments through multi-user tenancy boundary',
            'Triggers urgent escalation paths for vulnerabilities with active wild exploits'
          ],
          securityOrQuality: 'Tenant-isolated RBAC with Better Auth session cryptography'
        },
        icon: Shield,
        color: 'border-amber-500/50 text-amber-400'
      },
      {
        id: 4,
        stage: 'Delivery',
        title: 'Unified SOC Ops Console & Telegram Dispatch',
        tech: 'Next.js 16, React 19, Telegram Bot API, Neon DB',
        desc: 'Real-time operational dashboard with filtering, attack surface heatmaps, and instant on-call notification dispatch.',
        deepDive: {
          protocolOrFormat: 'Server-Sent Events (SSE) / HTTPS / Telegram Webhook',
          operations: [
            'Dispatches instant markdown alert digests to SOC L1 Telegram channels',
            'Renders interactive attack surface topology graphs and timelines',
            'Generates PDF/CSV executive compliance and remediation tickets'
          ],
          securityOrQuality: 'Sub-second real-time alert latency (< 1.2s Telegram delivery)'
        },
        icon: Server,
        color: 'border-emerald-500/50 text-emerald-400'
      }
    ]
  },

  'argus-voc': {
    id: 'argus-voc',
    title: 'ARGUS VOC – Unified Vulnerability & Threat Platform',
    badge: 'Orchestrated Scanning · SLA',
    repoName: 'Pablo-100/ARGUS_VOC',
    repoUrl: 'https://github.com/Pablo-100/ARGUS_VOC',
    summary: 'Enterprise vulnerability management and threat intelligence platform with automated active scanning, Celery workers, and Elasticsearch indexing.',
    pipelineHealth: 'Celery Distributed Health: 100%',
    latencyOrThroughput: 'Queue Latency < 20ms (Redis)',
    deploymentSpecs: 'FastAPI · Celery Workers · Elasticsearch · Docker Compose · Redis',
    keyHighlights: [
      'Automated Nmap & OpenVAS vulnerability scanners',
      'Asynchronous task workers with distributed Redis message queue',
      'Elasticsearch & Kibana full-text search and indexing',
      'SLA routing with dynamic ticket escalation'
    ],
    nodes: [
      {
        id: 1,
        stage: 'Ingestion',
        title: 'Scanner Telemetry & Threat Feeds',
        tech: 'Nmap, OpenVAS / Greenbone, NVD, Vulners API',
        desc: 'Automates network discovery and vulnerability probes across subnets, while fetching external CVE advisory feeds.',
        deepDive: {
          protocolOrFormat: 'Raw IP Sockets / XML Reports / REST API',
          operations: [
            'Schedules active port scans, banner grabs, and service fingerprinting',
            'Pulls CVE vulnerability streams from Vulners and NVD mirrors',
            'Parses OpenVAS XML vulnerability reports into structured dictionaries'
          ],
          securityOrQuality: 'Scan window bandwidth throttling to avoid host saturation'
        },
        icon: Database,
        color: 'border-sky-500/50 text-sky-400'
      },
      {
        id: 2,
        stage: 'Processing',
        title: 'Asynchronous Task Queue & Deduplication',
        tech: 'Celery Workers, Redis Broker, Python 3.11',
        desc: 'Decoupled worker architecture that parses heavy scan payloads, deduplicates entries, and normalizes findings.',
        deepDive: {
          protocolOrFormat: 'Redis AMQP / JSON Tasks',
          operations: [
            'Distributes heavy scanning jobs across worker pools without UI blockage',
            'Deduplicates identical scan findings across sequential runs',
            'Sanitizes raw banner strings and validates network ranges'
          ],
          securityOrQuality: 'Redis password-protected channel with retry backoff logic'
        },
        icon: Cpu,
        color: 'border-purple-500/50 text-purple-400'
      },
      {
        id: 3,
        stage: 'Engine',
        title: 'Elasticsearch Indexer & Attack Graph Engine',
        tech: 'Elasticsearch 8.x, Lucene Indices, Attack Path Generator',
        desc: 'Indexes security records with sub-millisecond query capabilities and maps multi-hop attack paths across assets.',
        deepDive: {
          protocolOrFormat: 'Elasticsearch Query DSL / REST',
          operations: [
            'Correlates detected vulnerabilities to known exploit chain paths',
            'Maintains historical vulnerability posture and MTTR (Mean Time to Remediate)',
            'Enforces SLA breach alarms based on CVSS severity thresholds'
          ],
          securityOrQuality: 'TLS-secured Lucene cluster with role-based access'
        },
        icon: Shield,
        color: 'border-amber-500/50 text-amber-400'
      },
      {
        id: 4,
        stage: 'Delivery',
        title: 'Operational Dashboard & Incident Triage',
        tech: 'FastAPI, Kibana, Dynamic SLA Routing',
        desc: 'Interactive operational console for SOC engineers to triage alerts, assign remediation tickets, and inspect attack vectors.',
        deepDive: {
          protocolOrFormat: 'HTTPS / WebSockets / JSON API',
          operations: [
            'Presents unified vulnerability views with faceted filters and search',
            'Dispatches automated remediation tickets to engineering teams',
            'Provides real-time vulnerability posture scoring per department'
          ],
          securityOrQuality: 'JWT authorization with role-based analyst permissions'
        },
        icon: Server,
        color: 'border-emerald-500/50 text-emerald-400'
      }
    ]
  },

  'audit-iso27001': {
    id: 'audit-iso27001',
    title: 'Audit ISO 27001 – SMSI & SIEM Compliance',
    badge: 'ISO/IEC 27001:2022 · Wazuh',
    repoName: 'Pablo-100/Audit-ISO27001-SMSI-SIEM',
    repoUrl: 'https://github.com/Pablo-100/Audit-ISO27001-SMSI-SIEM',
    summary: 'ISMS / SMSI audit laboratory implementing ISO/IEC 27001:2022 logging and monitoring controls (A.8.15, A.8.16, A.8.17) with Wazuh SIEM.',
    pipelineHealth: '100% Control Verification (ISO 19011)',
    latencyOrThroughput: 'Sub-second Wazuh Log Ingestion',
    deploymentSpecs: 'Wazuh v4.14.8 · OpenSearch 9200 · Ubuntu Agent · Windows Agent · VMware Host-Only',
    keyHighlights: [
      'Annex A.8.15 (Logging), A.8.16 (Monitoring), A.8.17 (Clock Sync)',
      'Custom Correlation Rules (local_rules.xml 100010–100013)',
      'Simulated Attacks: SSH & RDP brute force, FIM on /etc/shadow',
      '4 Official Audit Deliverables with Evidence Reports'
    ],
    nodes: [
      {
        id: 1,
        stage: 'Ingestion',
        title: 'Multi-Agent Telemetry & Clock Sync',
        tech: 'Ubuntu 14.04 Agent, Windows 10 Agent, NTP (pool.ntp.org)',
        desc: 'Gathers security events, authentication attempts, file integrity (FIM) changes, and enforces NTP time sync on isolated subnet 192.168.87.0/24.',
        deepDive: {
          protocolOrFormat: 'NTP UDP 123 / Windows EventLog / Linux Auditd / Syslog',
          operations: [
            'Collects Windows security event logs (logons, privilege use, RDP)',
            'Monitors Linux authentication logs and critical configuration files',
            'Assures nanosecond clock synchronization across all nodes (ISO A.8.17)'
          ],
          securityOrQuality: 'Isolated VMware Host-Only network preventing external interference'
        },
        icon: Database,
        color: 'border-sky-500/50 text-sky-400'
      },
      {
        id: 2,
        stage: 'Processing',
        title: 'Secure Encrypted Channel & Pre-filtering',
        tech: 'wazuh-remoted (TCP/UDP 1514), TLS 1.3, Wazuh Manager',
        desc: 'Authenticates remote agents via key exchange and encrypts log transport to the centralized Wazuh Manager at 192.168.87.4.',
        deepDive: {
          protocolOrFormat: 'Encrypted Wazuh Protocol (Port 1514)',
          operations: [
            'Mutual HMAC-SHA256 agent key verification during handshake',
            'Pre-parses raw log records into structured JSON attributes',
            'Buffers bursts to prevent dropped logs during brute-force simulations'
          ],
          securityOrQuality: 'Guarantees log integrity and non-repudiation (ISO A.8.15)'
        },
        icon: Cpu,
        color: 'border-purple-500/50 text-purple-400'
      },
      {
        id: 3,
        stage: 'Engine',
        title: 'Correlation Engine & Custom SMSI Rules',
        tech: 'wazuh-analysisd, Rules 100010–100013, CIS Benchmark SCA',
        desc: 'Correlates security events against ISO 27001 criteria, CIS security baselines, and flags brute force / privilege escalations.',
        deepDive: {
          protocolOrFormat: 'XML Rule Engine (local_rules.xml) & Decoders',
          operations: [
            'Applies custom rule 100010 for multiple failed SSH authentication attempts',
            'Detects unauthorized modifications to /etc/passwd and Windows Registry',
            'Calculates Security Configuration Assessment (SCA) compliance scores'
          ],
          securityOrQuality: 'Strict tamper-evident audit trail preserving original raw events'
        },
        icon: Shield,
        color: 'border-amber-500/50 text-amber-400'
      },
      {
        id: 4,
        stage: 'Delivery',
        title: 'OpenSearch Storage & SMSI Audit Deliverables',
        tech: 'OpenSearch (TCP 9200), Wazuh Dashboard (HTTPS 443)',
        desc: 'Presents compliance evidence for SMSI auditors and generates the 4 formal project audit deliverables.',
        deepDive: {
          protocolOrFormat: 'HTTPS 443 / OpenSearch REST API / PDF & DOCX',
          operations: [
            'Exposes live Threat Hunting, FIM, and SCA dashboards to auditors',
            'Furnishes Deliverable 1: Log Collection & Centralization Architecture',
            'Furnishes Deliverables 2, 3 & 4: Logging Policy, Events Matrix, Audit Report'
          ],
          securityOrQuality: 'Full compliance with ISO 19011 auditing methodology'
        },
        icon: Server,
        color: 'border-emerald-500/50 text-emerald-400'
      }
    ]
  },

  'octupus-mcp': {
    id: 'octupus-mcp',
    title: 'OCTUPUS-MCP – Threat Intelligence MCP Server',
    badge: 'Model Context Protocol · FastMCP',
    repoName: 'Pablo-100/OCTUPUS-MCP',
    repoUrl: 'https://github.com/Pablo-100/OCTUPUS-MCP',
    summary: 'High-performance Model Context Protocol (MCP) server delivering multi-source Threat Intelligence directly to Claude Desktop and AI Agents via stdio.',
    pipelineHealth: '938 Tests Passing (930 Offline)',
    latencyOrThroughput: 'Sub-second Parallel Queries',
    deploymentSpecs: 'Python 3.11+ · MCP stdio · FastMCP · Asyncio · Zero VM Required',
    keyHighlights: [
      '24 Connectors structured across 5 intelligence tiers',
      '9 Exposed MCP Tools (IP, Domain, URL, Hash, ASN, CVE, Email)',
      'Deterministic Threat Scoring Formula (0–100 scale)',
      'Degraded offline mode with zero secret leakage'
    ],
    nodes: [
      {
        id: 1,
        stage: 'Ingestion',
        title: 'MCP stdio Client Protocol & Tool Dispatch',
        tech: 'MCP (Model Context Protocol), Claude Desktop, FastMCP',
        desc: 'Receives IOC queries from AI assistants and orchestrates 9 specialized intelligence inspection tools.',
        deepDive: {
          protocolOrFormat: 'JSON-RPC 2.0 over standard I/O (stdio)',
          operations: [
            'Exposes analyze_ip, analyze_domain, analyze_url, analyze_hash',
            'Exposes get_threat_score, query_cve, check_email, get_asn_info',
            'Parses and validates IOC syntax with strict regex guards'
          ],
          securityOrQuality: 'Zero network exposure: runs locally through process pipes'
        },
        icon: Bot,
        color: 'border-sky-500/50 text-sky-400'
      },
      {
        id: 2,
        stage: 'Processing',
        title: '24 Connectors across 5 Intelligence Tiers',
        tech: 'Asyncio, Aiohttp, 5-Tier Fallback Hierarchy',
        desc: 'Dispatches non-blocking queries across 24 threat intelligence providers with automatic degradation if a source fails.',
        deepDive: {
          protocolOrFormat: 'Asynchronous HTTP / REST Connectors',
          operations: [
            'Tier 1 (Reputation): VirusTotal, AbuseIPDB, AlienVault OTX, URLScan',
            'Tier 2 (Enrichment): Shodan, Censys, SecurityTrails, IPinfo',
            'Tier 3 & 4 (Feeds & Threat Intel): CISA KEV, Maltiverse, ThreatFox, MISP',
            'Tier 5 (Offline Caches): Local signature databases & precomputed IOC lists'
          ],
          securityOrQuality: 'Secret masking: API keys never leave the local environment'
        },
        icon: Cpu,
        color: 'border-purple-500/50 text-purple-400'
      },
      {
        id: 3,
        stage: 'Engine',
        title: 'Consensus Scoring & Secret Protection',
        tech: 'Composite Threat Score Algorithm (0–100)',
        desc: 'Weights conflicting reports from multiple vendors, filters false positives, and computes a trusted verdict.',
        deepDive: {
          protocolOrFormat: 'Normalized Multi-Vendor Confidence Matrix',
          operations: [
            'Applies vendor weight coefficients based on historical accuracy',
            'Masks confidential corporate queries to preserve privacy',
            'Executes 938 automated unit & integration tests (930 offline tests)'
          ],
          securityOrQuality: 'Full graceful degradation when external APIs hit rate-limits'
        },
        icon: Shield,
        color: 'border-amber-500/50 text-amber-400'
      },
      {
        id: 4,
        stage: 'Delivery',
        title: 'AI Agent Response & Terminal Dashboard',
        tech: 'MCP Response Schemas, Rich Terminal UI, Markdown',
        desc: 'Delivers structured intelligence back into LLM context window with actionable remediation recommendations.',
        deepDive: {
          protocolOrFormat: 'Structured JSON & Formatted Markdown for LLM prompt injection',
          operations: [
            'Formats clean threat summaries with MITRE ATT&CK references',
            'Outputs ASCII terminal dashboard for standalone SOC analyst use',
            'Yields machine-readable risk classifications: Clean, Suspicious, Malicious'
          ],
          securityOrQuality: 'Zero LLM prompt-injection vulnerability through rigid output schemas'
        },
        icon: Server,
        color: 'border-emerald-500/50 text-emerald-400'
      }
    ]
  },

  'oktopus-soc': {
    id: 'oktopus-soc',
    title: 'Oktopus SOC – SIEM / IDS / IPS from Scratch',
    badge: 'Custom C/Python · No Frameworks',
    repoName: 'Pablo-100/Oktopus-SOC',
    repoUrl: 'https://github.com/Pablo-100/Oktopus-SOC',
    summary: 'Full-fledged Security Operations Center built completely from scratch: multi-OS agents, 36+ IDS rules, automatic IPS containment, Geo-IP, and MITRE matrix.',
    pipelineHealth: '36+ Custom IDS Signatures Active',
    latencyOrThroughput: 'Sub-millisecond Packet Inspection',
    deploymentSpecs: 'Python 3.8+ · Raw Sockets / Scapy · WinPcap · Linux / Windows / Android Termux',
    keyHighlights: [
      'Built 100% from scratch with zero third-party SIEM frameworks',
      'Multi-OS Agent Support (Linux, Windows, Android via Termux)',
      'Automated IPS Host Blocking via iptables (Linux) & netsh (Windows)',
      'Real-time Geo-IP 2D Canvas Map and MITRE ATT&CK Matrix'
    ],
    nodes: [
      {
        id: 1,
        stage: 'Ingestion',
        title: 'Multi-OS Sniffers & Log Collectors',
        tech: 'Raw Sockets, Scapy, WinPcap, Termux (Android)',
        desc: 'Custom sensors capturing promiscuous network packets, system auth events, and local terminal anomalies.',
        deepDive: {
          protocolOrFormat: 'Ethernet / IP / TCP / UDP / ICMP Raw Bytes',
          operations: [
            'Sniffs raw network interfaces across Linux eth0, Windows WinPcap, Android wlan0',
            'Captures SYN scans, FIN scans, NULL scans, and XMAS scans in real time',
            'Streams host system health metrics (CPU, memory, active network sockets)'
          ],
          securityOrQuality: 'Low-overhead C-level socket capture minimizing kernel drop rates'
        },
        icon: Radio,
        color: 'border-sky-500/50 text-sky-400'
      },
      {
        id: 2,
        stage: 'Processing',
        title: 'Custom Binary/JSON Transport Protocol',
        tech: 'Python Threaded Server, Sockets, GeoLite2',
        desc: 'Receives telemetry from remote agents over encrypted socket channels and performs Geo-IP enrichment.',
        deepDive: {
          protocolOrFormat: 'Custom Framed Protocol (TCP Port 8888)',
          operations: [
            'De-serializes incoming sensor packets into structured event objects',
            'Resolves attacker IP geolocation (latitude, longitude, country, ISP)',
            'Buffers high-frequency network storms during DDoS simulations'
          ],
          securityOrQuality: 'Custom heartbeat validation preventing rogue sensor injection'
        },
        icon: Cpu,
        color: 'border-purple-500/50 text-purple-400'
      },
      {
        id: 3,
        stage: 'Engine',
        title: 'Hybrid IDS/IPS Engine & Auto-Defense',
        tech: '36+ IDS Rules, iptables, netsh, SQLite3',
        desc: 'Evaluates traffic against signature and threshold algorithms; invokes instant firewall blocks upon violation.',
        deepDive: {
          protocolOrFormat: 'Stateful Packet Inspection (SPI) & Threshold Rules',
          operations: [
            'Flags Port Scanning, ARP Spoofing, Brute-Force SSH/FTP, and DNS tunneling',
            'Executes active IPS countermeasures: executes iptables -A INPUT -s [IP] -j DROP',
            'Maps detected malicious patterns to exact MITRE ATT&CK technique IDs'
          ],
          securityOrQuality: 'Automated unblock timers to prevent permanent self-lockout'
        },
        icon: Shield,
        color: 'border-amber-500/50 text-amber-400'
      },
      {
        id: 4,
        stage: 'Delivery',
        title: 'Interactive SOC Web Dashboard & Geo Map',
        tech: 'HTML5 Canvas, WebSockets, Chart.js, SQLite',
        desc: 'Live operational room console rendering interactive world threat attack vectors, incident feeds, and alert timelines.',
        deepDive: {
          protocolOrFormat: 'WebSocket Realtime Broadcast / HTTP 5000',
          operations: [
            'Animates live attack arcs connecting attacker coordinates to target server',
            'Displays dynamic severity breakdowns (Info, Low, Medium, High, Critical)',
            'Enables one-click analyst incident triage and forensic packet replay'
          ],
          securityOrQuality: 'Analyst session protection and persistent historical database'
        },
        icon: Server,
        color: 'border-emerald-500/50 text-emerald-400'
      }
    ]
  },

  'rja3chi': {
    id: 'rja3chi',
    title: 'Rja3chi – Outage Tracker & Incident Reports',
    badge: 'Crowdsourced · Anti-Spam Security',
    repoName: 'Pablo-100/Rja3chi',
    repoUrl: 'https://github.com/Pablo-100/Rja3chi',
    demoUrl: 'https://rja3chi.vercel.app',
    summary: 'Real-time collaborative utility outage platform for Tunisia (Electricity / Dhaw, Water / Mee, Fire / 7ri9a) with hardware anti-fake engine.',
    pipelineHealth: '24 Tunisian Governorates Covered',
    latencyOrThroughput: 'Sub-second Incident Clustering',
    deploymentSpecs: 'Next.js · React 19 · Leaflet Map · Vercel · SHA-256 IP Defense',
    keyHighlights: [
      'Multi-utility categories: Dhaw (Electricity), Mee (Water), 7ri9a (Fire)',
      'Hardware device fingerprinting (dev-tn-*) against report flooding',
      'Community consensus upvote and dispute algorithm',
      'Interactive clustered Leaflet map with regional heatmaps'
    ],
    nodes: [
      {
        id: 1,
        stage: 'Ingestion',
        title: 'Citizen Incident Intake & Geolocation',
        tech: 'HTML5 Geolocation API, Governorate Picker, Mobile Web',
        desc: 'Accepts reports for power cuts (In9i6a3), power restoration (Rja3 el Dhaw), water outages, and hazard alerts.',
        deepDive: {
          protocolOrFormat: 'HTTPS POST / JSON Geolocation Payload',
          operations: [
            'Captures latitude/longitude GPS or falls back to 24 governorates & delegations',
            'Categorizes incident types: Total blackout, Low voltage, Scheduled STEG work',
            'Tags affected sectors: Residential, Commercial, Industrial, Healthcare'
          ],
          securityOrQuality: 'Client-side input sanitation preventing XSS and injection'
        },
        icon: Radio,
        color: 'border-sky-500/50 text-sky-400'
      },
      {
        id: 2,
        stage: 'Processing',
        title: 'Anti-Fake Security & Rate-Limiting Engine',
        tech: 'Device Fingerprinting (dev-tn-*), SHA-256 IP Hash',
        desc: 'Guards against bot farms, prank submissions, and coordinated panic creation through rigorous hardware verification.',
        deepDive: {
          protocolOrFormat: 'Client Canvas/WebGL Fingerprint + Salted IP Hash',
          operations: [
            'Generates persistent hardware fingerprint string per physical device',
            'Applies strict submission cooldowns per district to stop flood attacks',
            'Computes user reputation tiers: Verified Citizen, Standard, Flagged'
          ],
          securityOrQuality: 'Preserves citizen anonymity while ensuring robust anti-spoofing'
        },
        icon: Cpu,
        color: 'border-purple-500/50 text-purple-400'
      },
      {
        id: 3,
        stage: 'Engine',
        title: 'Community Consensus & Outage Clustering',
        tech: 'Geospatial Proximity Cluster Algorithm, STEG Feeds',
        desc: 'Aggregates individual citizen confirmations to validate authentic regional blackouts vs isolated breaker trips.',
        deepDive: {
          protocolOrFormat: 'Density-Based Spatial Clustering / Threshold Scoring',
          operations: [
            'Requires neighbor confirmations before escalating to widespread alert',
            'Auto-deprioritizes reports flagged as misleading by multiple local users',
            'Cross-references with planned STEG maintenance calendar notices'
          ],
          securityOrQuality: 'Byzantine fault-tolerant thresholding against malicious clusters'
        },
        icon: Shield,
        color: 'border-amber-500/50 text-amber-400'
      },
      {
        id: 4,
        stage: 'Delivery',
        title: 'Interactive Tunisia Map & Broadcast Alerts',
        tech: 'Leaflet, OpenStreetMap, Vercel Edge Cache',
        desc: 'Visualizes live outages across Tunisia with color-coded markers, regional heatmaps, and national emergency banners.',
        deepDive: {
          protocolOrFormat: 'Vector Tile Map / WebSocket / Edge CDN',
          operations: [
            'Clusters markers across Greater Tunis, Sfax, Sousse, and rural areas',
            'Displays governorate leaderboards ranking longest outages and active fixes',
            'Broadcasts official emergency notifications for critical grid incidents'
          ],
          securityOrQuality: 'Instant edge caching providing 99.9% uptime during nationwide surges'
        },
        icon: Server,
        color: 'border-emerald-500/50 text-emerald-400'
      }
    ]
  },

  'octupus-education': {
    id: 'octupus-education',
    title: 'OCTUPUS Education – RHCSA Learning Platform',
    badge: 'Linux Terminal · Exam Simulator',
    repoName: 'Pablo-100/OCTUPUS-Education',
    repoUrl: 'https://github.com/Pablo-100/OCTUPUS-Education',
    demoUrl: 'https://octupus-education.onrender.com',
    summary: 'Full-stack Red Hat Certified System Administrator (RHCSA) preparation platform featuring interactive in-browser Linux terminals and automated exam grading.',
    pipelineHealth: '12 Chapters · 18 Labs · Mock Exams',
    latencyOrThroughput: 'Real-time WebSocket PTY Stream',
    deploymentSpecs: 'React 19.2 · TypeScript 5.9 · Node.js 22 · Neon PostgreSQL · pnpm',
    keyHighlights: [
      'Interactive real Linux terminal in the browser via xterm.js',
      'Realistic RHCSA white exam environment with countdown constraints',
      'Automated grading engine checking actual Linux system state',
      'Role-based permissions (Student, Instructor, Administrator)'
    ],
    nodes: [
      {
        id: 1,
        stage: 'Ingestion',
        title: 'Student Interface & Lab Curriculum',
        tech: 'React 19, TypeScript, Tailwind CSS, Vite',
        desc: 'Presents structured RHCSA competencies: user permissions, systemd services, LVM storage, SELinux, and firewall-cmd.',
        deepDive: {
          protocolOrFormat: 'HTTPS / Single Page Application Router',
          operations: [
            'Delivers 12 progressive curriculum chapters with guided step checklists',
            'Launches timed white exams simulating Red Hat testing conditions',
            'Tracks individual student objective completions and time allocations'
          ],
          securityOrQuality: 'Anti-cheating exam focus monitors and clipboard sandboxing'
        },
        icon: Layers,
        color: 'border-sky-500/50 text-sky-400'
      },
      {
        id: 2,
        stage: 'Processing',
        title: 'WebSocket PTY Session Orchestrator',
        tech: 'Node.js 22, xterm.js, WebSocket, Docker Containers',
        desc: 'Bridges student browser keystrokes to an isolated Linux container terminal with ANSI color support.',
        deepDive: {
          protocolOrFormat: 'Bidirectional WebSocket / Binary Terminal VT100 Stream',
          operations: [
            'Allocates ephemeral sandboxed container per student terminal session',
            'Handles terminal resize events (cols/rows) dynamically',
            'Buffers high-throughput command outputs without interface freeze'
          ],
          securityOrQuality: 'Strict container cgroups limiting memory, CPU, and network egress'
        },
        icon: Cpu,
        color: 'border-purple-500/50 text-purple-400'
      },
      {
        id: 3,
        stage: 'Engine',
        title: 'System State Evaluator & Grading Engine',
        tech: 'Bash Verification Scripts, Python, Linux Inspection',
        desc: 'Validates actual Linux operating system state against task requirements rather than merely checking command history.',
        deepDive: {
          protocolOrFormat: 'OS State Probe Scripts & Exit Code Verification',
          operations: [
            'Verifies file permissions, ACLs, and sticky bit configurations on disk',
            'Checks systemd service states, enabled symlinks, and port bindings',
            'Inspects LVM volume groups, logical volumes, and /etc/fstab mounts'
          ],
          securityOrQuality: 'Idempotent read-only grading passes ensuring zero student state corruptions'
        },
        icon: Shield,
        color: 'border-amber-500/50 text-amber-400'
      },
      {
        id: 4,
        stage: 'Delivery',
        title: 'Scorecard, Certification & Neon DB Persistence',
        tech: 'Neon PostgreSQL, Drizzle ORM, tRPC / REST',
        desc: 'Stores progress, generates detailed error remediation feedback, and issues verifiable completion certificates.',
        deepDive: {
          protocolOrFormat: 'PostgreSQL Connection Pooling / Secure JSON API',
          operations: [
            'Generates rubric breakdowns showing passed vs failed exam tasks',
            'Furnishes step-by-step correction hints derived from Red Hat documentation',
            'Persists historical test attempts and competency growth radars'
          ],
          securityOrQuality: 'Encrypted user credentials and tamper-proof certificate hashes'
        },
        icon: Server,
        color: 'border-emerald-500/50 text-emerald-400'
      }
    ]
  },

  'smart-invest-summit': {
    id: 'smart-invest-summit',
    title: 'Smart Invest Summit – B2B Matchmaking Platform',
    badge: 'Laravel 12 · Alpine.js · MySQL',
    repoName: 'Pablo-100/Smart-Invest-Summit',
    repoUrl: 'https://github.com/Pablo-100/Smart-Invest-Summit',
    summary: 'B2B event platform connecting investors and startups: onboarding KYC, admin validation, smart matchmaking, private messaging, and meeting calendar scheduler.',
    pipelineHealth: 'PHPUnit Test Suite Active',
    latencyOrThroughput: 'Sub-30ms Eloquent Response',
    deploymentSpecs: 'PHP 8.2+ · Laravel 12 · Alpine.js 3 · Tailwind CSS · MySQL 8',
    keyHighlights: [
      'Dual onboarding workflows: Investors (ticket size, sectors) & Startups (pitch, stage)',
      'Intelligent matchmaking algorithm aligning investment thesis with startup profiles',
      'Meeting scheduler with automated slot collision detection',
      'Real-time notifications and private encrypted messaging'
    ],
    nodes: [
      {
        id: 1,
        stage: 'Ingestion',
        title: 'Entity Onboarding & KYC Intake',
        tech: 'Laravel 12 Forms, Alpine.js 3, Tailwind CSS',
        desc: 'Structured onboarding for startups (pitch deck, funding round, MRR) and investors (ticket size, investment sectors).',
        deepDive: {
          protocolOrFormat: 'HTTPS CSRF-protected Form / JSON API',
          operations: [
            'Validates corporate credentials and financial documentation uploads',
            'Standardizes industry classification taxonomy (FinTech, HealthTech, etc.)',
            'Enqueues applicant dossiers for administrative verification'
          ],
          securityOrQuality: 'Strict MIME-type file verification and antivirus file inspection'
        },
        icon: Layers,
        color: 'border-sky-500/50 text-sky-400'
      },
      {
        id: 2,
        stage: 'Processing',
        title: 'Admin Verification & Vetting Workflow',
        tech: 'Laravel Policies & Gates, MySQL 8, Role Separation',
        desc: 'Multi-stage administrative moderation pipeline ensuring high dealflow quality across the summit directory.',
        deepDive: {
          protocolOrFormat: 'Relational MySQL 8 Transactions / Eloquent ORM',
          operations: [
            'Administrative review dashboard with accept/reject/request changes actions',
            'Automated email notifications on accreditation status changes',
            'Populates verified attendee directory with faceted search indices'
          ],
          securityOrQuality: 'Granular Role-Based Access Control (Admin, Investor, Startup)'
        },
        icon: Cpu,
        color: 'border-purple-500/50 text-purple-400'
      },
      {
        id: 3,
        stage: 'Engine',
        title: 'Matchmaking Engine & Meeting Scheduler',
        tech: 'Laravel Eloquent, Slot Collision Detection Engine',
        desc: 'Matches investor investment theses with startup stages and manages 1-on-1 meeting time slots without double-booking.',
        deepDive: {
          protocolOrFormat: 'Algorithmic Fit Score & Calendar Time Interval Logic',
          operations: [
            'Computes compatibility score based on ticket size, sector, and maturity',
            'Detects and blocks overlapping meeting invitations automatically',
            'Maintains invite state machine: Pending → Confirmed → Rescheduled → Declined'
          ],
          securityOrQuality: 'Database row-locking during booking transactions to prevent race conditions'
        },
        icon: Shield,
        color: 'border-amber-500/50 text-amber-400'
      },
      {
        id: 4,
        stage: 'Delivery',
        title: 'Private Messaging & Dealflow CRM',
        tech: 'Alpine.js, Laravel Pint, MySQL 8, Vite',
        desc: 'Interactive attendee portal with real-time private conversations, meeting agenda exports, and dealflow tracking.',
        deepDive: {
          protocolOrFormat: 'AJAX / WebSockets / iCal Calendar Feeds',
          operations: [
            'Enables direct confidential messaging between confirmed meeting parties',
            'Generates personalized PDF schedules and Google/Outlook calendar exports',
            'Provides event organizers with macro matchmaking analytics and meeting stats'
          ],
          securityOrQuality: 'Encrypted message storage with anti-spam messaging rate limits'
        },
        icon: Server,
        color: 'border-emerald-500/50 text-emerald-400'
      }
    ]
  },

  'delivery-platform': {
    id: 'delivery-platform',
    title: 'Delivery Platform – Logistics & Fleet Management',
    badge: 'Laravel 11 · Livewire 3 · Fleet Ops',
    repoName: 'Pablo-100/delivery-platform',
    repoUrl: 'https://github.com/Pablo-100/delivery-platform',
    summary: 'Comprehensive all-in-one logistics platform managing parcels, delivery couriers, truck fleets, and regional hub depots with SMS tracking.',
    pipelineHealth: 'Production Ready Architecture',
    latencyOrThroughput: 'Livewire Real-time Component Sync',
    deploymentSpecs: 'PHP 8.2+ · Laravel 11.x · Livewire 3.x · MySQL 8.x · SMS Gateway',
    keyHighlights: [
      'Multi-role access (Admin, Dispatcher, Depot Manager, Courier)',
      'Complete parcel lifecycle state machine with QR code verification',
      'Fleet & truck telemetry management across multi-depot routes',
      'Automated SMS notifications and customer OTP delivery validation'
    ],
    nodes: [
      {
        id: 1,
        stage: 'Ingestion',
        title: 'Parcel Intake & Dispatch Orders',
        tech: 'Laravel 11, Livewire 3, QR Barcode Scanner',
        desc: 'Centralized manifest intake from e-commerce merchants, batch CSV imports, and warehouse barcode scanning.',
        deepDive: {
          protocolOrFormat: 'REST API / QR Code Scanning / CSV Manifests',
          operations: [
            'Generates unique tracking code and scannable barcode for each parcel',
            'Calculates dynamic shipping tariffs based on weight, dimensions, and destination',
            'Assigns parcels to source regional warehouse depots'
          ],
          securityOrQuality: 'Cryptographically signed tracking numbers preventing forgery'
        },
        icon: Layers,
        color: 'border-sky-500/50 text-sky-400'
      },
      {
        id: 2,
        stage: 'Processing',
        title: 'Multi-Depot Routing & Fleet Assignment',
        tech: 'Livewire 3 Dynamic UI, MySQL 8 Indexes',
        desc: 'Organizes parcel transfers between central sorting facilities and regional delivery trucks.',
        deepDive: {
          protocolOrFormat: 'State Machine: Created → At Hub → In Transit → Out for Delivery',
          operations: [
            'Optimizes truck cargo loads according to destination zones and capacities',
            'Tracks inter-depot transit manifests with transfer handoff scans',
            'Monitors vehicle maintenance logs, fuel telemetry, and driver schedules'
          ],
          securityOrQuality: 'Strict depot custodian authorization on manifest handovers'
        },
        icon: Cpu,
        color: 'border-purple-500/50 text-purple-400'
      },
      {
        id: 3,
        stage: 'Engine',
        title: 'Courier Mobile Route & SMS OTP Gateway',
        tech: 'GPS Telemetry, SMS Gateway API, OTP Engine',
        desc: 'Directs couriers along optimized delivery routes and triggers customer SMS alerts with proof-of-delivery OTPs.',
        deepDive: {
          protocolOrFormat: 'HTTP SMS Gateway / Mobile Responsive Web App',
          operations: [
            'Sends automated SMS delivery window notices directly to recipients',
            'Generates one-time delivery verification pins (OTP) to eliminate delivery fraud',
            'Captures recipient digital signature and GPS delivery geotag'
          ],
          securityOrQuality: 'Rate-limited OTP issuance with expiration timers'
        },
        icon: Shield,
        color: 'border-amber-500/50 text-amber-400'
      },
      {
        id: 4,
        stage: 'Delivery',
        title: 'Public Tracking Portal & Financial Reconciliation',
        tech: 'Livewire 3, Tailwind CSS, Cash on Delivery (COD) Ledger',
        desc: 'Public tracking interface for end-customers and complete COD cash management for logistics finance teams.',
        deepDive: {
          protocolOrFormat: 'HTTPS Public Portal / Financial Balance Ledger',
          operations: [
            'Renders live step-by-step parcel progress timeline for customers',
            'Reconciles Cash on Delivery (COD) funds collected by field couriers',
            'Exports merchant payout manifests and delivery SLA performance metrics'
          ],
          securityOrQuality: 'Double-entry bookkeeping ledger preventing reconciliation discrepancies'
        },
        icon: Server,
        color: 'border-emerald-500/50 text-emerald-400'
      }
    ]
  },

  'nids-system': {
    id: 'nids-system',
    title: 'Network Intrusion Detection System (NIDS)',
    badge: 'Hybrid Machine Learning & Scapy',
    repoName: 'Pablo-100/Python_NIDS_Project',
    repoUrl: 'https://github.com/Pablo-100/Python_NIDS_Project',
    summary: 'Real-time hybrid network intrusion detection system combining signature-based pattern matching with Isolation Forest machine learning anomaly detection.',
    pipelineHealth: 'ML Anomaly Detection Active',
    latencyOrThroughput: 'Real-time Packet Classification',
    deploymentSpecs: 'Python 3 · Scapy · scikit-learn · Flask API · HTML5 Canvas',
    keyHighlights: [
      'Hybrid detection: Known signature rules + Isolation Forest ML model',
      'Live promiscuous mode packet sniffing via Scapy',
      'Detection of Port Scans, DoS SYN floods, and abnormal payload spikes',
      'Flask REST API feeding dynamic monitoring dashboard'
    ],
    nodes: [
      {
        id: 1,
        stage: 'Ingestion',
        title: 'Promiscuous Packet Capture & Flow Extraction',
        tech: 'Scapy Sniffer, Raw Sockets, PCAP Feeds',
        desc: 'Sniffs network interface cards in promiscuous mode to extract packet header fields and payload bytes.',
        deepDive: {
          protocolOrFormat: 'TCP / UDP / ICMP / ARP Raw Frames',
          operations: [
            'Extracts 5-tuple: source IP, destination IP, source port, dest port, protocol',
            'Calculates packet size statistics, inter-arrival times, and TCP flag combinations',
            'Maintains sliding window flow statistics per IP address pair'
          ],
          securityOrQuality: 'Asynchronous packet queue preventing buffer overflow under network stress'
        },
        icon: Radio,
        color: 'border-sky-500/50 text-sky-400'
      },
      {
        id: 2,
        stage: 'Processing',
        title: 'Feature Engineering & Normalization',
        tech: 'NumPy, Pandas, Feature Scaler',
        desc: 'Transforms raw network traffic into high-dimensional numerical feature vectors ready for classification.',
        deepDive: {
          protocolOrFormat: 'Normalized Numerical Vectors (Float32)',
          operations: [
            'Computes flow duration, bytes per second, and packet count ratios',
            'Identifies abnormal TCP flag anomalies (e.g. SYN-FIN, NULL, Xmas flags)',
            'Scales and standardizes continuous distributions for machine learning input'
          ],
          securityOrQuality: 'Robust outlier resistance via robust scaling algorithms'
        },
        icon: Cpu,
        color: 'border-purple-500/50 text-purple-400'
      },
      {
        id: 3,
        stage: 'Engine',
        title: 'Hybrid Signature & Isolation Forest Engine',
        tech: 'scikit-learn (Isolation Forest), Rule Matcher',
        desc: 'Evaluates packet flows through known intrusion signatures and machine learning models for 0-day anomaly discovery.',
        deepDive: {
          protocolOrFormat: 'Trained ML Ensemble & Signature Matcher',
          operations: [
            'Signature Engine: Immediately flags known DoS floods and aggressive port scans',
            'ML Engine: Isolates unseen anomalous patterns based on path length deviations',
            'Assigns unified threat severity level to each flagged network session'
          ],
          securityOrQuality: 'Cross-validated model training minimizing false-positive alarms'
        },
        icon: Shield,
        color: 'border-amber-500/50 text-amber-400'
      },
      {
        id: 4,
        stage: 'Delivery',
        title: 'Flask REST API & Live Security Feed',
        tech: 'Flask, REST JSON, WebSocket / SSE, Chart.js',
        desc: 'Streams real-time threat alarms, packet rate gauges, and infected host lists to security operators.',
        deepDive: {
          protocolOrFormat: 'HTTP REST / JSON Feed / Alert Webhook',
          operations: [
            'Serves live packet rate metrics and anomaly distribution charts',
            'Logs all security events with full packet trace metadata for forensics',
            'Enables security analysts to export CSV incident reports for audit review'
          ],
          securityOrQuality: 'CORS-protected API endpoints with local network binding'
        },
        icon: Server,
        color: 'border-emerald-500/50 text-emerald-400'
      }
    ]
  }
};

interface ArchitectureModalProps {
  projectTitle: string | null;
  onClose: () => void;
  lang?: 'fr' | 'en';
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ 
  projectTitle, 
  onClose,
  lang = 'en'
}) => {
  const [activeStep, setActiveStep] = useState<number | null>(1);

  if (!projectTitle) return null;

  const titleLower = projectTitle.toLowerCase();
  
  // Resolve matching architecture definition
  let archKey = 'oktopus-voc';
  if (titleLower.includes('argus') || titleLower.includes('argus_voc')) {
    archKey = 'argus-voc';
  } else if (titleLower.includes('iso27001') || titleLower.includes('iso 27001') || titleLower.includes('smsi')) {
    archKey = 'audit-iso27001';
  } else if (titleLower.includes('mcp') || titleLower.includes('threat-intel')) {
    archKey = 'octupus-mcp';
  } else if (titleLower.includes('oktopus soc') || titleLower.includes('octupus soc')) {
    archKey = 'oktopus-soc';
  } else if (titleLower.includes('rja3chi')) {
    archKey = 'rja3chi';
  } else if (titleLower.includes('education') || titleLower.includes('rhcsa')) {
    archKey = 'octupus-education';
  } else if (titleLower.includes('smart invest') || titleLower.includes('summit')) {
    archKey = 'smart-invest-summit';
  } else if (titleLower.includes('delivery') || titleLower.includes('livraison')) {
    archKey = 'delivery-platform';
  } else if (titleLower.includes('nids') || titleLower.includes('intrusion')) {
    archKey = 'nids-system';
  } else if (titleLower.includes('voc') || titleLower.includes('oktopus') || titleLower.includes('octupus')) {
    archKey = 'oktopus-voc';
  }

  const arch = ARCHITECTURES[archKey] || ARCHITECTURES['oktopus-voc'];
  const nodes = arch.nodes;
  const activeNode = nodes.find(n => n.id === activeStep) || nodes[0];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#090d18] border border-sky-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[94dvh] sm:max-h-[92dvh] my-auto"
      >
        {/* Header */}
        <div className="flex items-start sm:items-center justify-between gap-2.5 p-3.5 sm:p-5 border-b border-slate-800 bg-[#0c1222] shrink-0">
          <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="p-2 sm:p-2.5 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/30 shrink-0">
              <Network size={20} className="sm:w-[22px] sm:h-[22px]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-500/40">
                  {arch.badge}
                </span>
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <GitBranch size={12} className="text-sky-400" /> main
                </span>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white font-display mt-0.5 break-words">
                {arch.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-2 sm:line-clamp-1 mt-0.5">
                {arch.summary}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {arch.repoUrl && (
              <a
                href={arch.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition hover:text-white"
                title="View repository on GitHub"
              >
                <Github size={14} />
                <span>README & Repo</span>
                <ExternalLink size={12} className="opacity-70" />
              </a>
            )}
            {arch.demoUrl && (
              <a
                href={arch.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 text-xs font-semibold text-white transition shadow-sm"
              >
                <ExternalLink size={13} />
                <span>Live Demo</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close Architecture Modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-3.5 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6">
          {/* Key Architectural Highlights */}
          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {arch.keyHighlights.map((hl, i) => (
              <div 
                key={i} 
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-2 text-xs text-slate-300"
              >
                <CheckCircle size={14} className="text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{hl}</span>
              </div>
            ))}
          </div>

          {/* Pipeline Map - 4 Stages */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-1.5">
                <Activity size={14} className="shrink-0" /> 4-Stage Architectural Pipeline
              </h4>
              <span className="text-[11px] font-mono text-slate-400">
                {lang === 'fr' ? 'Cliquez sur une étape pour inspecter le flux technique' : 'Click any stage to inspect technical flow'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
              {nodes.map((node, index) => {
                const Icon = node.icon;
                const isSelected = activeStep === node.id;
                return (
                  <div key={node.id} className="relative group">
                    <button
                      type="button"
                      onClick={() => setActiveStep(node.id)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between h-full cursor-pointer ${
                        isSelected 
                          ? 'border-sky-400 bg-sky-950/40 ring-1 ring-sky-400 shadow-lg shadow-sky-500/10' 
                          : 'border-slate-800/90 bg-[#0d1326]/90 hover:border-sky-500/50 hover:bg-[#101730]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                            isSelected 
                              ? 'bg-sky-500 text-white' 
                              : 'bg-slate-800 text-slate-300'
                          }`}>
                            STAGE 0{node.id} · {node.stage}
                          </span>
                          <div className={`p-1.5 rounded-lg shrink-0 ${isSelected ? 'bg-sky-500/20 text-sky-300' : 'text-slate-400'}`}>
                            <Icon size={16} />
                          </div>
                        </div>

                        <h5 className="font-bold text-sm text-slate-100 mb-1 leading-snug">
                          {node.title}
                        </h5>
                        <p className="text-[11px] font-mono text-sky-400 mb-2 line-clamp-1">
                          {node.tech}
                        </p>
                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                          {node.desc}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                        <span className={isSelected ? 'text-sky-300 font-bold' : 'text-slate-500'}>
                          {isSelected ? (lang === 'fr' ? '● Inspecté' : '● Inspected') : (lang === 'fr' ? 'Détails →' : 'Deep dive →')}
                        </span>
                      </div>
                    </button>

                    {index < nodes.length - 1 && (
                      <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-sky-500/50 pointer-events-none">
                        <ArrowRight size={16} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Deep Dive Detail Panel for the Selected Stage */}
          {activeNode && (
            <div className="p-3.5 sm:p-5 rounded-xl bg-[#080d1a] border border-sky-500/30 space-y-4">
              <div className="flex items-start sm:items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                    <Terminal size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-sky-400 font-semibold uppercase block">
                      Stage 0{activeNode.id} Deep Dive · {activeNode.stage}
                    </span>
                    <h5 className="text-sm font-bold text-white break-words">
                      {activeNode.title}
                    </h5>
                  </div>
                </div>

                <div className="text-[11px] sm:text-xs font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800 max-w-full break-words">
                  Protocol / Spec: <span className="text-sky-300">{activeNode.deepDive.protocolOrFormat}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="md:col-span-2 space-y-2">
                  <span className="font-mono text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
                    {lang === 'fr' ? 'Opérations et Traitements Clés :' : 'Core Pipeline Operations :'}
                  </span>
                  <ul className="space-y-1.5">
                    {activeNode.deepDive.operations.map((op, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-300">
                        <span className="text-sky-400 font-mono mt-0.5 shrink-0">❯</span>
                        <span className="break-words">{op}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 space-y-2">
                  <span className="font-mono text-slate-400 uppercase tracking-wider text-[10px] font-bold flex items-center gap-1.5">
                    <Shield size={12} className="text-emerald-400 shrink-0" />
                    {lang === 'fr' ? 'Sécurité & Tolérance :' : 'Security & Reliability :'}
                  </span>
                  <p className="text-slate-300 leading-relaxed text-xs">
                    {activeNode.deepDive.securityOrQuality}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Live Operational Metrics & Deployment Telemetry */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-[#080c16] border border-slate-800 flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between gap-2.5 sm:gap-3 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <CheckCircle size={15} className="shrink-0" /> <span>{arch.pipelineHealth}</span>
            </div>
            <div className="flex items-center gap-2 text-sky-400">
              <Activity size={15} className="shrink-0" /> <span>{arch.latencyOrThroughput}</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <Terminal size={15} className="shrink-0" /> <span>{arch.deploymentSpecs}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-slate-800 bg-[#0a0f1e] flex items-center justify-between flex-wrap gap-2 text-xs shrink-0">
          <div className="text-slate-400 font-mono text-[11px] flex flex-wrap items-center gap-1.5 sm:gap-2 min-w-0">
            <span>Verified README</span>
            <span className="text-slate-600">|</span>
            <span className="text-sky-400 font-bold truncate">{arch.repoName}</span>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            {arch.demoUrl && (
              <a
                href={arch.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden px-3 py-2 min-h-[38px] rounded-lg bg-sky-500 hover:bg-sky-600 text-white transition text-xs font-semibold flex items-center gap-1"
              >
                <ExternalLink size={13} />
                <span>Live</span>
              </a>
            )}
            {arch.repoUrl && (
              <a
                href={arch.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 sm:py-1.5 min-h-[38px] sm:min-h-0 rounded-lg bg-sky-500/10 hover:bg-sky-500 text-sky-400 hover:text-white border border-sky-500/30 transition text-xs font-mono font-semibold flex items-center gap-1"
              >
                <Github size={13} />
                <span>View Full README</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 sm:py-1.5 min-h-[38px] sm:min-h-0 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition text-xs font-semibold"
            >
              {lang === 'fr' ? 'Fermer' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
