# Implementation Plan - Project Architecture & GitHub Synchronization

Verify and upgrade the Architecture (`Arch`) interactive modal across all projects, synchronizing architecture diagrams, pipeline data flows, descriptions, tech stacks, and GitHub repository links directly with their official GitHub READMEs.

---

## 1. Grounded Project Architecture Specifications (from GitHub READMEs)

Each project will have an interactive, dedicated 4-stage pipeline (Ingestion, Processing, Engine, Delivery) with live technical specifications, component breakdowns, data flows, and active metrics:

1. **OCTUPUS-VOC (Vulnerability Operations Center & EASM)**:
   - *Ingestion*: Multi-source external exposure & vulnerability feeds (Shodan, Censys, SecurityTrails, VirusTotal, NVD API, CISA KEV, EPSS).
   - *Processing*: JSON normalization, attack surface domain correlation graph, port & service fingerprinting, CVSS v3.1/v4.0 + EPSS weighting.
   - *Engine*: RBVM Risk Prioritization Formula (`Risk = CVSS × EPSS × ExposureFactor`), 0-day pre-disclosure tracker, multi-tenant isolation.
   - *Delivery*: Real-time SOC triage dashboard, live WebSocket telemetry, Telegram incident alerting, ticketing & mitigation exports.

2. **ARGUS VOC (Unified Vulnerability & Threat Intelligence Platform)**:
   - *Ingestion*: Automated network scanning telemetry (Nmap, OpenVAS) + Threat feeds (NVD, Vulners, CVE mirrors, ExploitDB).
   - *Processing*: Asynchronous task worker queue (Celery, Redis) with payload sanitization and deduplication.
   - *Engine*: Dual correlation engine with Elasticsearch/Kibana indexing, SLA prioritization routing, and attack path graph generation.
   - *Delivery*: Unified operational console, incident lifecycle triage, automated remediation tracking, and SOC L1/L2 dispatch.

3. **Audit ISO 27001 SMSI & SIEM Compliance**:
   - *Ingestion*: Multi-agent telemetry (Ubuntu 14.04 FIM/auth logs, Windows 10 Security EventLogs) isolated on VMware Host-Only subnet `192.168.87.0/24`.
   - *Processing*: Encrypted TLS transmission via `wazuh-remoted` (TCP/UDP 1514) with synchronized NTP time-stamping (ISO 27001 A.8.17).
   - *Engine*: Wazuh Analysisd correlation engine with custom rules `100010`–`100013`, CIS Benchmark SCA scoring, and brute force detection.
   - *Delivery*: ISO 27001 Annexe A (A.8.15 & A.8.16) audit dashboard, OpenSearch storage (TCP 9200), and 4 official audit deliverables (PDF/DOCX).

4. **OCTUPUS-MCP (Model Context Protocol Threat Intelligence)**:
   - *Ingestion*: 24 intelligence connectors across 5 tiers (VirusTotal, AlienVault OTX, AbuseIPDB, Shodan, URLScan, CISA feeds).
   - *Processing*: FastMCP stdio protocol handler, asynchronous parallel query dispatcher, rate-limiter, and secret masking.
   - *Engine*: 9 specialized MCP tools (`analyze_ip`, `analyze_domain`, `analyze_url`, `analyze_hash`, etc.), composite risk scoring (0–100), offline fallback mode (938 automated tests).
   - *Delivery*: Direct Claude Desktop / AI Agent stdio integration, structured STIX/JSON telemetry, and terminal operational dashboard.

5. **Oktopus SOC (SIEM / IDS / IPS from Scratch)**:
   - *Ingestion*: Multi-OS sensor agents (Linux, Windows, Android Termux) capturing raw network packets (Scapy/Raw Sockets) and system logs.
   - *Processing*: Custom encrypted socket protocol, packet header decoding, and IP geo-location resolution.
   - *Engine*: 36+ custom IDS signature rules + stateful anomaly detection engine with automatic IPS host isolation (`iptables` / `netsh`).
   - *Delivery*: MITRE ATT&CK matrix mapping, interactive HTML5 Canvas world threat map, real-time alert timeline, and SQLite3 historical database.

6. **Rja3chi (Crowdsourced Incident & Utility Outage Platform)**:
   - *Ingestion*: Multi-channel citizen reports for Electricity (Dhaw), Water (Mee), and Fire (7ri9a) with GPS geolocation coordinates or manual governorate picker.
   - *Processing*: Anti-fraud & anti-fake defense system (`dev-tn-*` hardware fingerprinting, SHA-256 IP hashing, district cooldown rate-limiting).
   - *Engine*: Community consensus voting algorithm, reputation scoring (*Verified Citizen* vs. *Flagged*), STEG planned maintenance feed correlation.
   - *Delivery*: Interactive Tunisia map (Leaflet/OSM clusters), live regional stability heatmaps, governorate outage leaderboards, and urgent broadcast banners.

7. **OCTUPUS Education (RHCSA Linux Hands-On Platform)**:
   - *Ingestion*: Student lab submissions, command input streams, and mock exam timers across 12 chapters and 18 interactive labs.
   - *Processing*: WebSocket multiplexer, secure pseudoterminal (PTY) container bridge, and real-time ANSI terminal rendering (xterm.js).
   - *Engine*: Automated Red Hat exam grading engine, containerized Linux system state validator, and pass/fail rubric evaluator.
   - *Delivery*: Live Linux terminal interface in-browser, real-time feedback hints, progress persistence (PostgreSQL/Neon), and certification badges.

8. **Smart Invest Summit (B2B Matchmaking Platform)**:
   - *Ingestion*: Startup pitch decks, investor investment criteria, and corporate profiles via structured onboarding workflows.
   - *Processing*: KYC & administrative approval pipeline, multi-criteria filtering, and industry vertical classification.
   - *Engine*: Intelligent matchmaking recommendation algorithm, calendar slot collision detection, and private messaging encryption.
   - *Delivery*: Dedicated Investor/Startup portals, 1-on-1 meeting scheduler, real-time notifications, and dealflow tracking dashboard.

9. **Delivery Platform (Multi-Depot Logistics Management)**:
   - *Ingestion*: Order placement, dispatch manifest imports, parcel intake, and mobile courier GPS location check-ins.
   - *Processing*: Depot routing, QR code barcode generation, and state machine transition validation (Created → In Transit → Delivered).
   - *Engine*: Route optimization engine, automated SMS gateway dispatcher (customer delivery alerts & OTP verification), fleet telemetry monitor.
   - *Delivery*: Real-time parcel tracking portal for customers, driver delivery mobile interface, and manager operations dashboard with proof-of-delivery ledger.

10. **Python NIDS & Enterprise Infrastructure Projects**:
    - Hybrid signature & ML anomaly detection pipeline (Isolation Forest, Scapy sniffer, Flask API, real-time packet monitor).
    - Enterprise network topology with VLAN segmentation, Cisco/Huawei L3 routing, Eth-Trunk redundancy, and QoS policies.

---

## 2. Technical Modifications

### A. Dynamic Architecture Engine (`src/components/ArchitectureModal.tsx`)
- Replace the binary fallback logic with a dedicated repository catalog mapping project titles/keys to their real 4-stage pipeline definitions.
- For each project, display:
  - Exact GitHub repository badge & branch indicator.
  - Multi-stage pipeline (`Ingestion`, `Processing`, `Detection / Engine`, `Delivery / Presentation`) with interactive click-to-expand deep dive.
  - Stage-specific technical stack pills (e.g. `wazuh-remoted TCP/UDP 1514`, `FastMCP stdio`, `EPSS v3`, `Leaflet`, `xterm.js`).
  - Active operational metrics (latency, correlation throughput, test coverage, ISO compliance control IDs).
- Add support for both English and French language translations inside the modal.

### B. Project Grid Integration (`src/components/BentoProjectsGrid.tsx` & `src/App.tsx`)
- Enable the interactive `Arch` button on all projects that feature an architectural pipeline or repository.
- Ensure the `Arch` button is rendered consistently across both Bento Grid mode and standard Grid mode.
- Ensure clicking on the project card image, title, or GitHub button directs to the correct GitHub repository URL (`https://github.com/Pablo-100/...`).
- Add missing GitHub repository links in `App.tsx` for `Oktopus SOC`, `Smart Invest Summit`, `Delivery Platform`, and `NIDS`.

### C. GitHub README Content Synchronization (`src/App.tsx`)
- Synchronize descriptions, tech stack lists, and badges in both English (`en.projectsList`) and French (`fr.projectsList`) with their latest GitHub README specifications.
- Ensure all live demo links (`https://oktopus-voc.vercel.app`, `https://rja3chi.vercel.app`, `https://octupus-education.onrender.com`) are preserved and verified.

---

## 3. Verification & Build
- Verify TypeScript compilation without errors using `compile_applet`.
- Verify modal responsiveness on both desktop and mobile viewports.
- Confirm interactive step toggling and deep dive details in the Architecture modal for every single project.
