import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, Linkedin, Mail, Phone, MapPin, 
  Terminal, Shield, Server, Code, Award, 
  Briefcase, GraduationCap, ChevronRight, ExternalLink,
  Menu, X, Download, Sun, Moon, Globe, Sparkles, Activity, Command
} from 'lucide-react';
import { CyberHeroCanvas } from './components/CyberHeroCanvas';
import { ArchitectureModal } from './components/ArchitectureModal';
import { BentoProjectsGrid } from './components/BentoProjectsGrid';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

// Data
const DATA = {
  name: "TBINI Mustapha Amin",
  role: "Administrateur Systèmes et Réseaux & Analyste SOC L1 & Développeur Full-Stack Passionné",
  location: "Tunis – Tunisia",
  phone: "+216 46-345-226",
  email: "mustaphaamintbini@gmail.com",
  linkedin: "mustapha-amin-tbini",
  github: "Pablo-100",
  summary: "Administrateur Systèmes et Réseaux & Analyste SOC L1 avec une solide expérience pratique des infrastructures sécurisées, de l'administration réseau et de la surveillance d'incidents. Développeur Full-Stack passionné concevant des applications de niveau production.",
  skills: {
    "Networking": ["Cisco CCNA", "Huawei Equipment", "VLAN Configuration", "IP-MSAN", "xDSL", "Eth-Trunk", "IPsec VPN", "Layer 3 Switching", "Routing Protocols (RIP, Static)", "Network Design", "Access Control Lists (ACL)", "Quality of Service (QoS)"],
    "Security": ["ELK Stack", "SIEM Implementation", "IDS/IPS", "MITRE ATT&CK", "Penetration Testing", "Vulnerability Assessment", "Metasploit", "Nessus", "OpenVAS", "Nmap", "Burp Suite", "Kali Linux", "Security Monitoring", "Incident Response", "SOC Operations"],
    "Systems": ["Ubuntu", "Kali Linux", "Rocky Linux", "CentOS", "RedHat", "Windows Server", "Active Directory"],
    "Virtualization": ["VMware", "ESXi", "VirtualBox", "Docker"],
    "Monitoring": ["Wireshark", "TCPDump", "Netstat", "htop"],
    "Web & Dev": ["PHP", "Python", "Scapy", "scikit-learn", "Flask", "Laravel 12", "Symfony 7", "Livewire", "React", "TypeScript", "Node.js", "Express", "tRPC", "Alpine.js", "Tailwind CSS", "Drizzle ORM", "Doctrine ORM", "OAuth2", "JAVA", "Bash", "PowerShell", "HTML", "CSS", "JavaScript", "Chart.js"],
    "Databases": ["MySQL", "PostgreSQL", "SQLite", "MariaDB"],
    "Services": ["Apache", "FTP", "DHCP", "DNS", "Samba", "NFS", "Group Policy", "WebSocket", "Vite", "Git"]
  },
  experience: [
    {
      company: "TDS",
      location: "Tunis, Tunisia",
      role: "VOC – Vulnerability Intelligence Dashboard",
      date: "Jul 2025 – Sep 2025",
      points: [
        "Developed a real-time CVE dashboard collecting, filtering, and displaying new vulnerability entries with automatic updates every minute",
        "Integrated multi-source threat intelligence from NVD and Vulners APIs, merging and deduplicating data",
        "Implemented Telegram alerting for critical and high severity vulnerabilities",
        "Designed interactive visualizations using Chart.js, Bootstrap, and DataTables"
      ]
    },
    {
      company: "Topnet",
      location: "Tunis, Tunisia",
      role: "PFE Internship – Cybersecurity Intern",
      date: "Feb 2024 – Jul 2024",
      points: [
        "Deployed SIEM solution using ELK Stack for 50+ endpoints, improving incident visibility by 40%",
        "Configured Logstash pipelines and Kibana dashboards for real-time monitoring",
        "Installed multi-platform agents for centralized log collection",
        "Performed penetration tests and vulnerability scans with Kali Linux, discovering 12+ critical issues"
      ]
    },
    {
      company: "Tunisie Telecom",
      location: "Tunis, Tunisia",
      role: "Technician Internship – Network Operations",
      date: "Jan 2023 – Feb 2023",
      points: [
        "Configured xDSL and IP-MSAN services for over 300 clients with <5% downtime",
        "Deployed and tested fiber optic connections with signal quality >98%"
      ]
    },
    {
      company: "Tunisie Telecom",
      location: "Tunis, Tunisia",
      role: "Technician Internship – Cisco Networks",
      date: "Jan 2022 – Feb 2022",
      points: [
        "Installed and configured 20+ Cisco routers and switches in real environments",
        "Structured cabling and patch panel deployment across 3 company sites"
      ]
    }
  ],
  projects: [
    {
      title: "ARGUS VOC – Unified Vulnerability Platform",
      stack: ["FastAPI", "Celery", "Elasticsearch", "Nmap", "OpenVAS", "Docker", "Redis"],
      description: "Unified enterprise vulnerability management & threat intelligence platform with automated Nmap/OpenVAS scanning, Celery task queue, Elasticsearch/Kibana indexing, SLA routing, and attack graphs.",
      link: "https://github.com/Pablo-100/ARGUS_VOC"
    },
    {
      title: "Rja3chi – Outage Tracker & Incident Reports",
      stack: ["React", "Node.js", "Express", "Tailwind CSS", "Tunisia Map"],
      description: "Crowdsourced real-time incident reporting platform for electricity, water, and fire outages across Tunisia. Features citizen verification, anti-fake security engine, location feeds, and live resolution analytics.",
      link: "https://github.com/Pablo-100/Rja3chi"
    },
    {
      title: "Oktopus SOC – Custom SIEM / IDS / IPS",
      stack: ["Python 3.8+", "WebSocket", "SQLite", "iptables", "netsh"],
      description: "Built a full Security Operations Center from scratch covering log collection, detection, prevention, geo-IP, and MITRE ATT&CK mapping. Implemented 36+ IDS detection rules and multi-OS agents."
    },
    {
      title: "OCTUPUS Education – RHCSA Platform",
      stack: ["React 19", "TypeScript", "Node.js", "Express", "tRPC", "PostgreSQL", "Tailwind"],
      description: "Comprehensive RHCSA certification platform with 12 chapters, 18 labs, and AI-powered assistant. Implemented type-safe full-stack API with JWT and OAuth2."
    },
    {
      title: "Smart Invest Summit – B2B Matchmaking",
      stack: ["Laravel 12", "PHP 8.2+", "Tailwind CSS", "Alpine.js", "MySQL 8"],
      description: "B2B event platform connecting investors and startups with registration, admin validation, matchmaking, private messaging, and meeting scheduling."
    },
    {
      title: "Delivery Platform – Logistics System",
      stack: ["Laravel 11", "Livewire 3", "Tailwind CSS", "MySQL 8", "APIs"],
      description: "Multi-role delivery management platform with multi-depot architecture. Implemented parcel lifecycle tracking, QR codes, GPS tracking, and SMS notifications."
    },
    {
      title: "Network Intrusion Detection System",
      stack: ["Python", "Scapy", "scikit-learn", "Flask"],
      description: "Hybrid NIDS for real-time traffic analysis with signature-based and anomaly-based detection (Isolation Forest). Built Flask REST API and monitoring dashboard."
    },
    {
      title: "Full-Stack E-commerce Platform",
      stack: ["Symfony 7", "PHP 8", "Doctrine ORM", "Docker"],
      description: "Secure full-stack e-commerce web application with MVC architecture, REST-like controllers, OAuth2, RBAC, and Docker deployment."
    },
    {
      title: "Windows Server & AD Infrastructure (Academic)",
      stack: ["Windows Server", "Active Directory", "Group Policy", "DHCP"],
      description: "Built enterprise Windows Server environment with Active Directory and Group Policy. Managed users, groups, and access control policies. Configured DHCP, firewall rules, audit policies, and backup system."
    },
    {
      title: "Enterprise Network Architecture",
      stack: ["Cisco", "Huawei", "eNSP", "Ubuntu Server"],
      description: "Designed multi-site network with Layer 3 switches, VLAN segmentation, and ACLs. Configured Eth-Trunk and high-availability routes for critical infrastructure."
    },
    {
      title: "VoIP System Deployment (Academic)",
      stack: ["Cisco CUCM", "VoIP", "VLANs", "QoS"],
      description: "Deployed VoIP solution using Cisco CUCM for 100+ users. Configured voice VLANs, DHCP for IP phones, and QoS policies. Reduced communication cost by 60% versus traditional PSTN."
    },
    {
      title: "Full-Stack Task Management Application",
      stack: ["PHP 7.4", "MySQL 5.7", "JS", "HTML5", "CSS3", "Apache XAMPP"],
      description: "Developed secure web app for internal team task tracking. Implemented role-based authentication with admin/user separation."
    }
  ],
  education: [
    {
      school: "TEK-UP University",
      degree: "Engineer's Degree, Computer Systems & Network Security",
      date: "2024 – Present"
    },
    {
      school: "Higher Institute of Technological Studies",
      degree: "Bachelor's Degree, Computer Networks and Services",
      date: "Graduated 2024"
    }
  ],
  certifications: [
    "PCAP: Programming Essentials in Python (OpenEDG)",
    "CCNA1: Introduction to Networks (Cisco)",
    "Networking Devices & Initial Configuration (Cisco)",
    "Junior Cybersecurity Analyst Career Path (Cisco)",
    "Fortinet Certified Associate in Cybersecurity",
    "Blue Team: PowerShell, SOC, Virtual Machines (Security Blue Team)"
  ]
};

const STRONG_SKILLS = [
  "SOC Operations", "Incident Response", "SIEM Implementation", "ELK Stack", "MITRE ATT&CK", "Penetration Testing", "Vulnerability Assessment",
  "React", "TypeScript", "Node.js", "Laravel 12", "Symfony 7", "Python", "JAVA",
  "Cisco CCNA", "IPsec VPN", "Network Design",
  "Docker", "ESXi", "VMware", "Active Directory", "Kali Linux", "Ubuntu", "Windows Server",
  "MySQL", "PostgreSQL", "Burp Suite", "Metasploit", "Nessus", "OpenVAS", "Nmap"
];

const SIMPLE_SKILLS = [
  "HTML", "CSS", "JavaScript", "SQLite", "MariaDB", "FTP", "DHCP", "DNS", "Samba", "NFS", "VirtualBox", "VLAN Configuration", "xDSL", "Chart.js", "Alpine.js", "Tailwind CSS"
];

// Explicit skill order for Marquee banner: Cyber Security -> Networking -> System -> Development
const CYBER_SEC_SKILLS = [
  "SOC Operations", "SIEM Implementation", "ELK Stack", "MITRE ATT&CK", "IDS/IPS", 
  "Penetration Testing", "Vulnerability Assessment", "Incident Response", "Security Monitoring", 
  "Metasploit", "Burp Suite", "Nessus", "OpenVAS", "Nmap", "Kali Linux", "Wireshark", "TCPDump"
];

const NETWORK_SKILLS = [
  "Cisco CCNA", "Huawei Equipment", "VLAN Configuration", "IPsec VPN", 
  "Layer 3 Switching", "Routing Protocols (RIP, Static)", "Network Design", 
  "Access Control Lists (ACL)", "Quality of Service (QoS)", "IP-MSAN", "xDSL", "Eth-Trunk"
];

const SYSTEM_SKILLS = [
  "Windows Server", "Active Directory", "Ubuntu", "Rocky Linux", "CentOS", "RedHat", 
  "Docker", "VMware", "ESXi", "VirtualBox", "Group Policy", "Bash", "PowerShell"
];

const DEV_SKILLS = [
  "React", "TypeScript", "Node.js", "Python", "Laravel 12", "Symfony 7", "Express", "tRPC", 
  "PHP", "JAVA", "JavaScript", "HTML", "CSS", "MySQL", "PostgreSQL", "SQLite", "MariaDB", 
  "Tailwind CSS", "Git", "Vite"
];

const MARQUEE_SKILLS_ORDERED = [
  ...CYBER_SEC_SKILLS.map(s => ({ name: s, category: "Cyber Security" })),
  ...NETWORK_SKILLS.map(s => ({ name: s, category: "Networking" })),
  ...SYSTEM_SKILLS.map(s => ({ name: s, category: "System" })),
  ...DEV_SKILLS.map(s => ({ name: s, category: "Development" }))
];

// Tech Logo mapping dictionary for Technical Arsenal
const TECH_LOGOS: Record<string, string> = {
  // Security
  "ELK Stack": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
  "SIEM Implementation": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
  "Kali Linux": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kalilinux.svg",
  "Burp Suite": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/burpsuite.svg",
  "Wireshark": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/wireshark.svg",
  "Metasploit": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/metasploit.svg",
  "Nmap": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nmap.svg",
  "Nessus": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tenable.svg",
  "OpenVAS": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/greenbone.svg",
  "MITRE ATT&CK": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mitre.svg",
  
  // Networking
  "Cisco CCNA": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cisco.svg",
  "Cisco": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cisco.svg",
  "Cisco CUCM": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cisco.svg",
  "Huawei Equipment": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/huawei.svg",
  "Huawei": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/huawei.svg",
  
  // Systems & Virtualization
  "Ubuntu": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
  "Rocky Linux": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/rockylinux.svg",
  "CentOS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/centos/centos-original.svg",
  "RedHat": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Windows Server": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  "Active Directory": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "VMware": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vmware.svg",
  "ESXi": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vmware.svg",
  "VirtualBox": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/virtualbox.svg",
  "Bash": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  "PowerShell": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg",

  // Development & Databases
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "Symfony": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
  "Livewire": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/livewire.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "tRPC": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/trpc.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "JAVA": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "SQLite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  "MariaDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg",
  "Chart.js": "https://www.chartjs.org/img/chartjs-logo.svg",
  "Alpine.js": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/alpinedotjs.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  "Apache": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "WebSocket": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/socketdotio.svg",
  "Drizzle ORM": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/drizzle.svg",
  "Doctrine ORM": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/doctrine.svg",
  "OAuth2": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/auth0.svg"
};

function getLogoForSkill(skillName: string): string | undefined {
  if (TECH_LOGOS[skillName]) return TECH_LOGOS[skillName];

  const lower = skillName.toLowerCase();
  if (lower.includes('cisco')) return TECH_LOGOS['Cisco'];
  if (lower.includes('huawei')) return TECH_LOGOS['Huawei'];
  if (lower.includes('python')) return TECH_LOGOS['Python'];
  if (lower.includes('react')) return TECH_LOGOS['React'];
  if (lower.includes('typescript')) return TECH_LOGOS['TypeScript'];
  if (lower.includes('javascript') || lower === 'js') return TECH_LOGOS['JavaScript'];
  if (lower.includes('php')) return TECH_LOGOS['PHP'];
  if (lower.includes('laravel')) return TECH_LOGOS['Laravel'];
  if (lower.includes('symfony')) return TECH_LOGOS['Symfony'];
  if (lower.includes('livewire')) return TECH_LOGOS['Livewire'];
  if (lower.includes('trpc')) return TECH_LOGOS['tRPC'];
  if (lower.includes('express')) return TECH_LOGOS['Express'];
  if (lower.includes('java')) return TECH_LOGOS['Java'];
  if (lower.includes('html')) return TECH_LOGOS['HTML'];
  if (lower.includes('css')) return TECH_LOGOS['CSS'];
  if (lower.includes('tailwind')) return TECH_LOGOS['Tailwind CSS'];
  if (lower.includes('mysql')) return TECH_LOGOS['MySQL'];
  if (lower.includes('postgres')) return TECH_LOGOS['PostgreSQL'];
  if (lower.includes('sqlite')) return TECH_LOGOS['SQLite'];
  if (lower.includes('mariadb')) return TECH_LOGOS['MariaDB'];
  if (lower.includes('linux') || lower.includes('ubuntu')) return TECH_LOGOS['Ubuntu'];
  if (lower.includes('centos')) return TECH_LOGOS['CentOS'];
  if (lower.includes('redhat')) return TECH_LOGOS['RedHat'];
  if (lower.includes('windows') || lower.includes('directory')) return TECH_LOGOS['Windows Server'];
  if (lower.includes('docker')) return TECH_LOGOS['Docker'];
  if (lower.includes('vmware') || lower.includes('esxi')) return TECH_LOGOS['VMware'];
  if (lower.includes('virtualbox')) return TECH_LOGOS['VirtualBox'];
  if (lower.includes('elk') || lower.includes('siem') || lower.includes('kibana') || lower.includes('logstash')) return TECH_LOGOS['ELK Stack'];
  if (lower.includes('kali')) return TECH_LOGOS['Kali Linux'];
  if (lower.includes('burp')) return TECH_LOGOS['Burp Suite'];
  if (lower.includes('metasploit')) return TECH_LOGOS['Metasploit'];
  if (lower.includes('wireshark')) return TECH_LOGOS['Wireshark'];
  if (lower.includes('nmap')) return TECH_LOGOS['Nmap'];
  if (lower.includes('nessus')) return TECH_LOGOS['Nessus'];
  if (lower.includes('openvas')) return TECH_LOGOS['OpenVAS'];
  if (lower.includes('mitre')) return TECH_LOGOS['MITRE ATT&CK'];
  if (lower.includes('apache')) return TECH_LOGOS['Apache'];
  if (lower.includes('bash')) return TECH_LOGOS['Bash'];
  if (lower.includes('powershell')) return TECH_LOGOS['PowerShell'];
  if (lower.includes('flask')) return TECH_LOGOS['Flask'];
  if (lower.includes('git')) return TECH_LOGOS['Git'];
  if (lower.includes('vite')) return TECH_LOGOS['Vite'];
  if (lower.includes('websocket')) return TECH_LOGOS['WebSocket'];
  if (lower.includes('doctrine')) return TECH_LOGOS['Doctrine ORM'];
  if (lower.includes('drizzle')) return TECH_LOGOS['Drizzle ORM'];
  if (lower.includes('oauth')) return TECH_LOGOS['OAuth2'];
  if (lower.includes('bootstrap')) return TECH_LOGOS['Bootstrap'];
  if (lower.includes('alpine')) return TECH_LOGOS['Alpine.js'];
  if (lower.includes('chart')) return TECH_LOGOS['Chart.js'];

  return undefined;
}

function SkillTag({ skill }: { skill: string; key?: React.Key }) {
  const [imgError, setImgError] = useState(false);
  const logoUrl = getLogoForSkill(skill);

  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ios-pill text-xs md:text-sm font-medium text-[var(--color-cyber-text-light)] hover:scale-105 active:scale-95 cursor-default group/tag shadow-2xs">
      {logoUrl && !imgError && (
        <span className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center p-0.5 bg-white/95 rounded-md shrink-0 shadow-2xs group-hover/tag:scale-110 transition-transform duration-200">
          <img
            src={logoUrl}
            alt=""
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
        </span>
      )}
      <span>{skill}</span>
    </span>
  );
}

const TRANSLATIONS = {
  en: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    hello: "> Hello, World! I am",
    getInTouch: "Get In Touch",
    downloadCV: "Download CV",
    aboutMe: "About Me",
    keyProjects: "Key Projects",
    techArsenal: "Technical Arsenal",
    education: "Education",
    certifications: "Certifications",
    whatsNext: "04. What's Next?",
    sayHello: "Say Hello",
    contactText: "Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!",
    designedBy: "Designed & Built by",
    allRights: "All rights reserved.",
    role1: "System & Network Administrator",
    role2: "SOC Analyst L1",
    role3: "Passionate Full-Stack Developer",
    badge1: "SOC L1",
    badge2: "Full-Stack",
    summary: "System and Network Administrator & SOC Analyst L1 with hands-on experience in secure infrastructures, network administration, and security monitoring. Skilled in Linux & Windows Server, SIEM (ELK Stack), and incident detection. Passionate Full-Stack Developer building production-grade applications from scratch.",
    about1: "I am a dedicated System and Network Administrator & SOC Analyst L1, and a passionate Full-Stack Developer with a strong drive for secure infrastructures and modern software craftsmanship.",
    about2: "My expertise spans across Linux and Windows Server environments, SIEM systems (particularly the ELK Stack), and incident detection and analysis. I have a solid foundation in Cisco and Huawei networking, complemented by practical experience in SOC operations.",
    about3: "Beyond infrastructure and security, I am an active Full-Stack Developer. I enjoy building production-grade platforms from scratch, bridging the gap between secure backend architectures and intuitive user interfaces.",
    location: "Tunis – Tunisia",
    locationLabel: "Location:",
    emailLabel: "Email:",
    phoneLabel: "Phone:",
    contactInfo: "Contact Info",
    languagesLabel: "Languages:",
    languages: "Arabic, French, English",
    skillsCategories: {
      "Networking": "Networking",
      "Security": "Security",
      "Systems": "Systems",
      "Virtualization": "Virtualization",
      "Monitoring": "Monitoring",
      "Development": "Development",
      "Databases": "Databases",
      "Protocols & Services": "Protocols & Services"
    },
    experienceList: [
      {
        company: "TDS",
        location: "Tunis, Tunisia",
        role: "VOC – Vulnerability Intelligence Dashboard",
        date: "Jul 2025 – Sep 2025",
        points: [
          "Developed a real-time CVE dashboard collecting, filtering, and displaying new vulnerability entries with automatic updates every minute",
          "Integrated multi-source threat intelligence from NVD and Vulners APIs, merging and deduplicating data",
          "Implemented Telegram alerting for critical and high severity vulnerabilities",
          "Designed interactive visualizations using Chart.js, Bootstrap, and DataTables"
        ]
      },
      {
        company: "Topnet",
        location: "Tunis, Tunisia",
        role: "PFE Internship – Cybersecurity Intern",
        date: "Feb 2024 – Jul 2024",
        points: [
          "Deployed SIEM solution using ELK Stack for 50+ endpoints, improving incident visibility by 40%",
          "Configured Logstash pipelines and Kibana dashboards for real-time monitoring",
          "Installed multi-platform agents for centralized log collection",
          "Performed penetration tests and vulnerability scans with Kali Linux, discovering 12+ critical issues"
        ]
      },
      {
        company: "Tunisie Telecom",
        location: "Tunis, Tunisia",
        role: "Technician Internship – Network Operations",
        date: "Jan 2023 – Feb 2023",
        points: [
          "Configured xDSL and IP-MSAN services for over 300 clients with <5% downtime",
          "Deployed and tested fiber optic connections with signal quality >98%"
        ]
      },
      {
        company: "Tunisie Telecom",
        location: "Tunis, Tunisia",
        role: "Technician Internship – Cisco Networks",
        date: "Jan 2022 – Feb 2022",
        points: [
          "Installed and configured 20+ Cisco routers and switches in real environments",
          "Structured cabling and patch panel deployment across 3 company sites"
        ]
      }
    ],
    projectsList: [
      {
        title: "OCTUPUS VOC – Vulnerability Operations Center",
        image: "oktopus-voc.png",
        badge: "VOC Flagship",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "NVD API", "EPSS", "CISA KEV", "Vercel"],
        description: "A Vulnerability Operations Center (RBVM · VOC) that turns CVE chaos into decisions: prioritization by real-world risk (CVSS · EPSS · CISA KEV), internet-exposure intelligence, 0-day tracker, and SOC alert workflows.",
        demoUrl: "https://oktopus-voc.vercel.app",
        githubUrl: "https://github.com/Pablo-100/Oktopus-VOC"
      },
      {
        title: "ARGUS VOC – Unified Vulnerability & Threat Platform",
        image: "voc.png",
        stack: ["FastAPI", "Celery", "Elasticsearch", "Nmap", "OpenVAS", "Docker", "Redis"],
        description: "Unified enterprise vulnerability management & threat intelligence platform with automated Nmap/OpenVAS scanning, Celery task queue, Elasticsearch/Kibana indexing, SLA routing, and attack graphs.",
        link: "https://github.com/Pablo-100/ARGUS_VOC"
      },
      {
        title: "Rja3chi – Outage Tracker & Incident Reports",
        image: "rja3chi.png",
        stack: ["React", "Node.js", "Express", "Tailwind CSS", "Tunisia Map"],
        description: "Crowdsourced real-time incident reporting platform for electricity, water, and fire outages across Tunisia. Features citizen verification, anti-fake security engine, location feeds, and live resolution analytics.",
        githubUrl: "https://github.com/Pablo-100/Rja3chi",
        demoUrl: "https://rja3chi.vercel.app"
      },
      {
        title: "Oktopus SOC – Custom SIEM / IDS / IPS",
        image: "octupus-soc.png",
        stack: ["Python 3.8+", "WebSocket", "SQLite", "iptables", "netsh"],
        description: "Built a full Security Operations Center from scratch covering log collection, detection, prevention, geo-IP, and MITRE ATT&CK mapping. Implemented 36+ IDS detection rules and multi-OS agents."
      },
      {
        title: "OCTUPUS Education – RHCSA Platform",
        image: "octupus-education.png",
        stack: ["React 19", "TypeScript", "Node.js", "Express", "tRPC", "PostgreSQL", "Tailwind"],
        description: "Comprehensive RHCSA certification platform with 12 chapters, 18 labs, and AI-powered assistant. Implemented type-safe full-stack API with JWT and OAuth2.",
        githubUrl: "https://github.com/Pablo-100",
        demoUrl: "https://octupus-education.onrender.com"
      },
      {
        title: "Smart Invest Summit – B2B Matchmaking",
        image: "smart-invest.png",
        stack: ["Laravel 12", "PHP 8.2+", "Tailwind CSS", "Alpine.js", "MySQL 8"],
        description: "B2B event platform connecting investors and startups with registration, admin validation, matchmaking, private messaging, and meeting scheduling."
      },
      {
        title: "Delivery Platform – Logistics System",
        image: "delivery-pro.png",
        stack: ["Laravel 11", "Livewire 3", "Tailwind CSS", "MySQL 8", "APIs"],
        description: "Multi-role delivery management platform with multi-depot architecture. Implemented parcel lifecycle tracking, QR codes, GPS tracking, and SMS notifications."
      },
      {
        title: "Network Intrusion Detection System",
        image: "nids.png",
        stack: ["Python", "Scapy", "scikit-learn", "Flask"],
        description: "Hybrid NIDS for real-time traffic analysis with signature-based and anomaly-based detection (Isolation Forest). Built Flask REST API and monitoring dashboard."
      },
      {
        title: "Full-Stack E-commerce Platform",
        image: "synf-project.png",
        stack: ["Symfony 7", "PHP 8", "Doctrine ORM", "Docker"],
        description: "Secure full-stack e-commerce web application with MVC architecture, REST-like controllers, OAuth2, RBAC, and Docker deployment."
      },
      {
        title: "Windows Server & AD Infrastructure (Academic)",
        stack: ["Windows Server", "Active Directory", "Group Policy", "DHCP"],
        description: "Built enterprise Windows Server environment with Active Directory and Group Policy. Managed users, groups, and access control policies. Configured DHCP, firewall rules, audit policies, and backup system."
      },
      {
        title: "Enterprise Network Architecture",
        stack: ["Cisco", "Huawei", "eNSP", "Ubuntu Server"],
        description: "Designed multi-site network with Layer 3 switches, VLAN segmentation, and ACLs. Configured Eth-Trunk and high-availability routes for critical infrastructure."
      },
      {
        title: "VoIP System Deployment (Academic)",
        stack: ["Cisco CUCM", "VoIP", "VLANs", "QoS"],
        description: "Deployed VoIP solution using Cisco CUCM for 100+ users. Configured voice VLANs, DHCP for IP phones, and QoS policies. Reduced communication cost by 60% versus traditional PSTN."
      },
      {
        title: "Full-Stack Task Management Application",
        image: "task-management-sys.png",
        stack: ["PHP 7.4", "MySQL 5.7", "JS", "HTML5", "CSS3", "Apache XAMPP"],
        description: "Developed secure web app for internal team task tracking. Implemented role-based authentication with admin/user separation."
      },
      {
        title: "Plane Management System",
        image: "plane-management-sys.png",
        stack: ["Java", "OOP", "CLI", "Design Patterns"],
        description: "Java command-line (CLI) application for comprehensive management of planes, pilots, and passengers with an interactive interface. Implemented design patterns (Singleton, Factory, MVC).",
        link: "https://github.com/Pablo-100/Plane_Management_Sys"
      },
      {
        title: "LunaChat - Chatbot",
        image: "luna-chat-bot.png",
        stack: ["Python", "Gemini API", "AI", "Chatbot"],
        description: "Intelligent conversational chatbot powered by the Gemini API. Interactive user interface for real-time conversations.",
        link: "https://github.com/Pablo-100/LunaChat---Chatbot"
      }
    ],
    educationList: [
      {
        school: "TEK-UP University",
        degree: "Engineer's Degree, Computer Systems & Network Security",
        date: "2024 – Present"
      },
      {
        school: "Higher Institute of Technological Studies",
        degree: "Bachelor's Degree, Computer Networks and Services",
        date: "Graduated 2024"
      }
    ],
    certificationsList: [
      "PCAP: Programming Essentials in Python (OpenEDG)",
      "CCNA1: Introduction to Networks (Cisco)",
      "Networking Devices & Initial Configuration (Cisco)",
      "Junior Cybersecurity Analyst Career Path (Cisco)",
      "Fortinet Certified Associate in Cybersecurity",
      "Blue Team: PowerShell, SOC, Virtual Machines (Security Blue Team)"
    ]
  },
  fr: {
    about: "À propos",
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
    hello: "> Bonjour le monde ! Je suis",
    getInTouch: "Me Contacter",
    downloadCV: "Télécharger CV",
    aboutMe: "À Propos de Moi",
    keyProjects: "Projets Clés",
    techArsenal: "Arsenal Technique",
    education: "Éducation",
    certifications: "Certifications",
    whatsNext: "04. Et Ensuite ?",
    sayHello: "Dire Bonjour",
    contactText: "Que vous ayez une question, une proposition de projet, ou que vous vouliez simplement dire bonjour, je ferai de mon mieux pour vous répondre !",
    designedBy: "Conçu & Développé par",
    allRights: "Tous droits réservés.",
    role1: "Administrateur Systèmes et Réseaux",
    role2: "Analyste SOC L1",
    role3: "Développeur Full-Stack Passionné",
    badge1: "SOC L1",
    badge2: "Full-Stack",
    summary: "Administrateur Systèmes et Réseaux & Analyste SOC L1 avec une solide expérience des infrastructures sécurisées, de l'administration réseau et de la surveillance SIEM. Développeur Full-Stack passionné concevant des applications de niveau production.",
    about1: "Je suis un Administrateur Systèmes et Réseaux & Analyste SOC L1, ainsi qu'un Développeur Full-Stack passionné avec une forte maîtrise des infrastructures sécurisées et du développement applicatif.",
    about2: "Mon expertise s'étend aux environnements Linux et Windows Server, aux systèmes SIEM (en particulier la suite ELK), ainsi qu'à la détection et l'analyse d'incidents. J'ai de solides bases en réseaux Cisco et Huawei, complétées par une expérience pratique des opérations SOC.",
    about3: "Au-delà de l'infrastructure et de la sécurité, je suis un Développeur Full-Stack actif. J'aime construire des plateformes de niveau production à partir de zéro, faisant le pont entre des architectures backend sécurisées et des interfaces utilisateur intuitives.",
    location: "Tunis – Tunisie",
    locationLabel: "Lieu :",
    emailLabel: "Email :",
    phoneLabel: "Tél :",
    contactInfo: "Coordonnées",
    languagesLabel: "Langues :",
    languages: "Arabe, Français, Anglais",
    skillsCategories: {
      "Networking": "Réseaux",
      "Security": "Sécurité",
      "Systems": "Systèmes",
      "Virtualization": "Virtualisation",
      "Monitoring": "Surveillance",
      "Development": "Développement",
      "Databases": "Bases de Données",
      "Protocols & Services": "Protocoles & Services"
    },
    experienceList: [
      {
        company: "TDS",
        location: "Tunis, Tunisie",
        role: "VOC – Tableau de bord de renseignement sur les vulnérabilités",
        date: "Juil 2025 – Sep 2025",
        points: [
          "Développement d'un tableau de bord CVE en temps réel collectant, filtrant et affichant de nouvelles entrées de vulnérabilité avec des mises à jour automatiques chaque minute",
          "Intégration de renseignements sur les menaces multi-sources à partir des API NVD et Vulners, fusion et déduplication des données",
          "Mise en œuvre d'alertes Telegram pour les vulnérabilités de gravité critique et élevée",
          "Conception de visualisations interactives utilisant Chart.js, Bootstrap et DataTables"
        ]
      },
      {
        company: "Topnet",
        location: "Tunis, Tunisie",
        role: "Stage PFE – Stagiaire en Cybersécurité",
        date: "Fév 2024 – Juil 2024",
        points: [
          "Déploiement d'une solution SIEM utilisant la pile ELK pour plus de 50 points finaux, améliorant la visibilité des incidents de 40 %",
          "Configuration des pipelines Logstash et des tableaux de bord Kibana pour une surveillance en temps réel",
          "Installation d'agents multiplateformes pour la collecte centralisée des journaux",
          "Réalisation de tests d'intrusion et d'analyses de vulnérabilité avec Kali Linux, découvrant plus de 12 problèmes critiques"
        ]
      },
      {
        company: "Tunisie Telecom",
        location: "Tunis, Tunisie",
        role: "Stage Technicien – Opérations Réseau",
        date: "Jan 2023 – Fév 2023",
        points: [
          "Configuration des services xDSL et IP-MSAN pour plus de 300 clients avec <5 % de temps d'arrêt",
          "Déploiement et test de connexions en fibre optique avec une qualité de signal >98 %"
        ]
      },
      {
        company: "Tunisie Telecom",
        location: "Tunis, Tunisie",
        role: "Stage Technicien – Réseaux Cisco",
        date: "Jan 2022 – Fév 2022",
        points: [
          "Installation et configuration de plus de 20 routeurs et commutateurs Cisco dans des environnements réels",
          "Câblage structuré et déploiement de panneaux de brassage sur 3 sites de l'entreprise"
        ]
      }
    ],
    projectsList: [
      {
        title: "OCTUPUS VOC – Centre d'Opérations de Vulnérabilités",
        image: "oktopus-voc.png",
        badge: "VOC Flagship",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "NVD API", "EPSS", "CISA KEV", "Vercel"],
        description: "Centre d'Opérations de Vulnérabilités (RBVM · VOC) transformant le chaos des CVE en décisions : priorisation par risque réel (CVSS · EPSS · CISA KEV), veille 0-day, renseignement sur l'exposition Internet et workflows d'alertes SOC.",
        demoUrl: "https://oktopus-voc.vercel.app",
        githubUrl: "https://github.com/Pablo-100/Oktopus-VOC"
      },
      {
        title: "ARGUS VOC – Plateforme Unifiée de Vulnérabilités & Threat Intel",
        image: "voc.png",
        stack: ["FastAPI", "Celery", "Elasticsearch", "Nmap", "OpenVAS", "Docker", "Redis"],
        description: "Plateforme d'entreprise unifiée de gestion des vulnérabilités et de renseignement sur les menaces avec scans automatisés Nmap/OpenVAS, file Celery, indexation Elasticsearch/Kibana, routage SLA et graphes d'attaque.",
        link: "https://github.com/Pablo-100/ARGUS_VOC"
      },
      {
        title: "Rja3chi – Suivi Collaboratif des Pannes & Incidents",
        image: "rja3chi.png",
        stack: ["React", "Node.js", "Express", "Tailwind CSS", "Tunisia Map"],
        description: "Plateforme collaborative de signalement d'incidents en temps réel (électricité, eau, incendie) en Tunisie. Intègre la vérification citoyenne, la sécurité anti-fake, la géolocalisation et des statistiques en temps réel.",
        githubUrl: "https://github.com/Pablo-100/Rja3chi",
        demoUrl: "https://rja3chi.vercel.app"
      },
      {
        title: "Oktopus SOC – SIEM / IDS / IPS Personnalisé",
        image: "octupus-soc.png",
        stack: ["Python 3.8+", "WebSocket", "SQLite", "iptables", "netsh"],
        description: "Création d'un centre des opérations de sécurité (SOC) complet à partir de zéro, couvrant la collecte de journaux, la détection, la prévention, la géo-IP et le mappage MITRE ATT&CK. Mise en œuvre de plus de 36 règles de détection IDS et d'agents multi-OS."
      },
      {
        title: "OCTUPUS Education – Plateforme RHCSA",
        image: "octupus-education.png",
        stack: ["React 19", "TypeScript", "Node.js", "Express", "tRPC", "PostgreSQL", "Tailwind"],
        description: "Plateforme complète de certification RHCSA avec 12 chapitres, 18 laboratoires et un assistant alimenté par l'IA. Mise en œuvre d'une API full-stack typée avec JWT et OAuth2.",
        githubUrl: "https://github.com/Pablo-100",
        demoUrl: "https://octupus-education.onrender.com"
      },
      {
        title: "Smart Invest Summit – Mise en relation B2B",
        image: "smart-invest.png",
        stack: ["Laravel 12", "PHP 8.2+", "Tailwind CSS", "Alpine.js", "MySQL 8"],
        description: "Plateforme d'événements B2B connectant investisseurs et startups avec inscription, validation par l'administrateur, mise en relation, messagerie privée et planification de réunions."
      },
      {
        title: "Plateforme de Livraison – Système Logistique",
        image: "delivery-pro.png",
        stack: ["Laravel 11", "Livewire 3", "Tailwind CSS", "MySQL 8", "APIs"],
        description: "Plateforme de gestion de livraison multi-rôles avec architecture multi-dépôts. Mise en œuvre du suivi du cycle de vie des colis, des codes QR, du suivi GPS et des notifications SMS."
      },
      {
        title: "Système de Détection d'Intrusion Réseau",
        image: "nids.png",
        stack: ["Python", "Scapy", "scikit-learn", "Flask"],
        description: "NIDS hybride pour l'analyse du trafic en temps réel avec détection basée sur les signatures et les anomalies (Isolation Forest). Création d'une API REST Flask et d'un tableau de bord de surveillance."
      },
      {
        title: "Plateforme E-commerce Full-Stack",
        image: "synf-project.png",
        stack: ["Symfony 7", "PHP 8", "Doctrine ORM", "Docker"],
        description: "Application web e-commerce full-stack sécurisée avec architecture MVC, contrôleurs de type REST, OAuth2, RBAC et déploiement Docker."
      },
      {
        title: "Infrastructure Windows Server & AD (Académique)",
        stack: ["Windows Server", "Active Directory", "Group Policy", "DHCP"],
        description: "Création d'un environnement d'entreprise Windows Server avec Active Directory et stratégie de groupe. Gestion des utilisateurs, des groupes et des politiques de contrôle d'accès. Configuration du DHCP, des règles de pare-feu, des politiques d'audit et du système de sauvegarde."
      },
      {
        title: "Architecture Réseau d'Entreprise",
        stack: ["Cisco", "Huawei", "eNSP", "Ubuntu Server"],
        description: "Conception d'un réseau multi-sites avec commutateurs de couche 3, segmentation VLAN et ACL. Configuration de l'Eth-Trunk et de routes à haute disponibilité pour l'infrastructure critique."
      },
      {
        title: "Déploiement de Système VoIP (Académique)",
        stack: ["Cisco CUCM", "VoIP", "VLANs", "QoS"],
        description: "Déploiement d'une solution VoIP utilisant Cisco CUCM pour plus de 100 utilisateurs. Configuration de VLAN vocaux, DHCP pour téléphones IP et politiques QoS. Réduction des coûts de communication de 60 % par rapport au RTPC traditionnel."
      },
      {
        title: "Application de Gestion de Tâches Full-Stack",
        image: "task-management-sys.png",
        stack: ["PHP 7.4", "MySQL 5.7", "JS", "HTML5", "CSS3", "Apache XAMPP"],
        description: "Développement d'une application web sécurisée pour le suivi des tâches de l'équipe interne. Mise en œuvre d'une authentification basée sur les rôles avec séparation administrateur/utilisateur."
      },
      {
        title: "Système de Gestion d'Avions",
        image: "plane-management-sys.png",
        stack: ["Java", "OOP", "CLI", "Design Patterns"],
        description: "Application Java en ligne de commande (CLI) pour la gestion complète des avions, pilotes et passagers avec une interface interactive. Implémentation de design patterns (Singleton, Factory, MVC).",
        link: "https://github.com/Pablo-100/Plane_Management_Sys"
      },
      {
        title: "LunaChat - Chatbot",
        image: "luna-chat-bot.png",
        stack: ["Python", "Gemini API", "AI", "Chatbot"],
        description: "Chatbot conversationnel intelligent alimenté par l'API Gemini. Interface utilisateur interactive pour des conversations en temps réel.",
        link: "https://github.com/Pablo-100/LunaChat---Chatbot"
      }
    ],
    educationList: [
      {
        school: "Université TEK-UP",
        degree: "Diplôme d'Ingénieur, Systèmes Informatiques et Sécurité des Réseaux",
        date: "2024 – Présent"
      },
      {
        school: "Institut Supérieur des Études Technologiques",
        degree: "Licence, Réseaux Informatiques et Services",
        date: "Diplômé en 2024"
      }
    ],
    certificationsList: [
      "PCAP: L'essentiel de la programmation en Python (OpenEDG)",
      "CCNA1: Introduction aux Réseaux (Cisco)",
      "Périphériques Réseau & Configuration Initiale (Cisco)",
      "Parcours de Carrière Analyste Junior en Cybersécurité (Cisco)",
      "Associé Certifié Fortinet en Cybersécurité",
      "Blue Team: PowerShell, SOC, Machines Virtuelles (Security Blue Team)"
    ]
  }
};

const SectionHeading = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="flex items-center gap-3.5 mb-10">
    <div className="p-3.5 rounded-2xl bg-sky-500/15 text-[var(--color-cyber-blue)] border border-sky-500/20 shadow-sm backdrop-blur-md">
      <Icon size={22} />
    </div>
    <h2 className="text-3xl font-extrabold font-display tracking-tight text-gradient">{title}</h2>
    <div className="h-px flex-1 bg-gradient-to-r from-sky-500/30 via-sky-500/10 to-transparent ml-4"></div>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'fr'>('fr'); // Default to French for user preference
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [archModalProject, setArchModalProject] = useState<string | null>(null);
  const [proUiMode, setProUiMode] = useState(true);
  const mousePosition = useMousePosition();

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 220;

      // Check if near top (hero section before 'about')
      const aboutEl = document.getElementById('about');
      if (aboutEl && window.scrollY + 250 < aboutEl.offsetTop) {
        setActiveSection('');
        return;
      }

      // Check if near bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      let current = '';
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollPosition >= top && window.scrollY < top + height + 100) {
            current = sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen bg-[var(--color-cyber-dark)] text-[var(--color-cyber-text)] selection:bg-[var(--color-cyber-blue)] selection:text-white ${theme}`}>
      
      {/* iOS 27 Spatial Liquid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-br from-sky-500/15 via-blue-600/10 to-teal-400/5 blur-[130px] -z-10"
          animate={{
            x: mousePosition.x - 350,
            y: mousePosition.y - 350,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 120 }}
        />
        <div className="absolute top-[-15%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-sky-500/10 to-indigo-500/5 blur-[140px]"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-cyan-500/10 to-blue-600/5 blur-[130px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-noise mix-blend-overlay"></div>
      </div>

      {/* iOS 27 Spatial Floating Dock Navbar */}
      <div className="fixed top-5 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
        <header className="pointer-events-auto ios-dock px-5 py-2.5 flex items-center justify-between gap-6 md:gap-8 max-w-5xl w-full">
          {/* Logo */}
          <button 
            onClick={() => scrollTo('about')}
            className="flex items-center gap-2.5 group cursor-pointer shrink-0"
          >
            <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform shadow-sm">
              <Terminal size={16} />
            </div>
            <span className="font-mono font-bold text-sm tracking-tight text-[var(--color-cyber-text-light)]">
              <span className="text-sky-400 font-extrabold">TBINI</span>
            </span>
          </button>
          
          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-black/10 dark:bg-white/5 border border-black/10 dark:border-white/10">
            {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <button 
                  key={item} 
                  onClick={() => scrollTo(sectionId)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 ${
                    isActive 
                      ? 'text-white drop-shadow-sm' 
                      : 'text-[var(--color-cyber-text)] hover:text-[var(--color-cyber-text-light)]'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="iosActiveNavPill"
                      className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full shadow-[0_4px_16px_rgba(14,165,233,0.4)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{t[sectionId as keyof typeof t] || item}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Controls */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setProUiMode(!proUiMode)}
              className={`ios-pill px-3 py-1.5 flex items-center gap-1.5 text-xs font-mono font-bold transition hover:scale-105 active:scale-95 ${
                proUiMode 
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-400/50 shadow-[0_0_12px_rgba(56,189,248,0.25)]' 
                  : 'text-slate-400 border border-slate-300 dark:border-slate-700'
              }`}
              title="Toggle Pro UI Mode"
            >
              <Sparkles size={13} className={proUiMode ? 'text-sky-400' : ''} />
              <span className="hidden sm:inline">PRO UI:</span> <span>{proUiMode ? 'ON' : 'OFF'}</span>
            </button>
            <button 
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} 
              className="ios-pill px-3 py-1.5 flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--color-cyber-text-light)] hover:scale-105 active:scale-95"
              title="Change Language"
            >
              <Globe size={14} className="text-sky-400" /> 
              <span>{lang.toUpperCase()}</span>
            </button>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
              className="ios-pill p-2 flex items-center justify-center text-[var(--color-cyber-text-light)] hover:scale-105 active:scale-95"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-sky-500" />}
            </button>
            
            <button 
              className="md:hidden ios-pill p-2 text-[var(--color-cyber-text-light)]" 
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={18} />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Glass Menu Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-50 bg-[var(--color-cyber-dark)]/90 backdrop-blur-3xl flex flex-col p-8 md:hidden justify-between"
          >
            <div className="flex justify-between items-center pt-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                  <Terminal size={16} />
                </div>
                <span className="font-mono text-sm tracking-tight text-[var(--color-cyber-text-light)]">
                  ~/<span className="font-bold text-sky-400">TBINI</span>_MustaphaAmin
                </span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)} 
                className="w-10 h-10 rounded-full bg-white/10 dark:bg-white/10 flex items-center justify-center text-[var(--color-cyber-text-light)]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-3 font-sans text-center my-auto py-6">
              {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;
                return (
                  <button 
                    key={item} 
                    onClick={() => scrollTo(sectionId)}
                    className={`py-3 px-6 rounded-2xl transition-all duration-300 font-semibold text-base ${
                      isActive
                        ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                        : 'ios-glass-card text-[var(--color-cyber-text-light)]'
                    }`}
                  >
                    {t[sectionId as keyof typeof t] || item}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center items-center gap-6 pb-6">
              <button 
                onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} 
                className="ios-glass-card px-5 py-2.5 flex items-center gap-2 text-sm font-semibold text-[var(--color-cyber-text-light)]"
              >
                <Globe size={16} className="text-sky-400" /> {lang === 'en' ? 'Français' : 'English'}
              </button>
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
                className="ios-glass-card p-3 text-[var(--color-cyber-text-light)]"
              >
                {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-sky-500" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24">
        
        {/* Hero Section - Frameless & Unboxed */}
        <section className="relative min-h-[75vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 mb-16 overflow-hidden">
          {proUiMode && <CyberHeroCanvas interactive={true} />}
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="relative z-10 flex-1 flex flex-col gap-6"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-1.5 rounded-full ios-badge text-sky-500 dark:text-sky-400 font-mono text-xs font-semibold tracking-wider uppercase mb-3 border border-sky-500/30 bg-sky-500/10 dark:bg-sky-950/60 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping"></span>
                <span>🟢 SOC L1 Systems Operational</span>
                <span className="opacity-40">|</span>
                <span className="text-[var(--color-cyber-text)] font-normal">{t.hello}</span>
              </div>
            </motion.div>

            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-4xl sm:text-5xl md:text-6xl font-normal font-display text-[var(--color-cyber-text-light)] tracking-tight leading-[1.1]">
              <span className="font-extrabold text-sky-500 dark:text-sky-400 drop-shadow-sm">TBINI</span> Mustapha Amin
            </motion.h1>

            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-2xl md:text-3xl font-semibold text-[var(--color-cyber-text)] tracking-tight leading-snug">
              <span className="text-gradient-blue font-bold">{t.role1}</span>
              <span className="text-[var(--color-cyber-text)] font-normal text-xl md:text-2xl mx-2">&</span>
              <span className="text-gradient font-bold">{t.role2}</span>
              <div className="mt-2.5 text-sky-500 dark:text-sky-400 font-medium text-lg md:text-xl flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500 dark:bg-sky-400 animate-pulse inline-block shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
                <span>{t.role3}</span>
              </div>
            </motion.h2>

            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-base md:text-lg text-[var(--color-cyber-text)] max-w-2xl leading-relaxed">
              {t.summary}
            </motion.p>
            
            {/* Action Buttons as iOS Liquid Glass Pills */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap items-center gap-3.5 mt-2 font-medium text-sm">
              <a 
                href={`mailto:${DATA.email}`} 
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold hover:shadow-[0_8px_25px_rgba(14,165,233,0.4)] transition-all hover:scale-105 active:scale-95"
              >
                <Mail size={16} /> {t.getInTouch}
              </a>
              <a 
                href="/TBINI_Mustapha_Amine_CV.pdf" 
                download="TBINI_Mustapha_Amine_CV.pdf" 
                className="flex items-center gap-2 px-6 py-3.5 rounded-full ios-glass-card text-[var(--color-cyber-text-light)] hover:border-sky-500/50 transition-all hover:scale-105 active:scale-95"
              >
                <Download size={16} className="text-sky-500 dark:text-sky-400" /> {t.downloadCV}
              </a>
              <a 
                href={`https://github.com/${DATA.github}`} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-5 py-3.5 rounded-full ios-glass-card text-[var(--color-cyber-text-light)] hover:border-sky-500/50 transition-all hover:scale-105 active:scale-95"
              >
                <Github size={16} /> GitHub
              </a>
              <a 
                href={`https://linkedin.com/in/${DATA.linkedin}`} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-5 py-3.5 rounded-full ios-glass-card text-[var(--color-cyber-text-light)] hover:border-sky-500/50 transition-all hover:scale-105 active:scale-95"
              >
                <Linkedin size={16} className="text-sky-500 dark:text-sky-400" /> LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Avatar Widget - 100% Frameless Circular Floating Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 90 }}
            className="relative w-64 h-64 md:w-80 md:h-80 group shrink-0 flex items-center justify-center my-6 md:my-0"
          >
            {/* Ambient Organic Light Aura (No Box Frames) */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/30 via-cyan-400/20 to-indigo-500/30 blur-3xl group-hover:blur-[60px] group-hover:scale-110 transition-all duration-700 opacity-90 pointer-events-none"></div>

            {/* Frameless Round Portrait Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_20px_50px_rgba(14,165,233,0.25)] transition-transform duration-500 group-hover:scale-[1.03]">
              <img 
                src={`https://github.com/${DATA.github}.png`} 
                alt={DATA.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Mustapha+Amine+Tbini&background=0ea5e9&color=fff&size=512";
                }}
              />
              {/* Subtle rim light gradient overlay */}
              <div className="absolute inset-0 rounded-full ring-1 ring-white/20 dark:ring-white/10 pointer-events-none"></div>
            </div>
            
            {/* Floating Glass Pills around photo */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 md:-left-8 ios-dock px-3.5 py-1.5 flex items-center gap-2 text-xs md:text-sm font-semibold text-[var(--color-cyber-text-light)] shadow-lg z-20 whitespace-nowrap"
            >
              <div className="p-1 rounded-full bg-sky-500/20 text-sky-400">
                <Server size={14} />
              </div>
              <span>{t.role1}</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 ios-dock px-3 py-1.5 flex items-center gap-2 text-xs font-semibold text-[var(--color-cyber-text-light)] shadow-lg z-20 whitespace-nowrap"
            >
              <div className="p-1 rounded-full bg-indigo-500/20 text-indigo-400">
                <Shield size={13} />
              </div>
              <span>{t.badge1}</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-3 left-4 ios-dock px-3 py-1.5 flex items-center gap-2 text-xs font-semibold text-[var(--color-cyber-text-light)] shadow-lg z-20 whitespace-nowrap"
            >
              <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400">
                <Code size={13} />
              </div>
              <span>{t.badge2}</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Marquee Banner */}
        <section className="py-8 overflow-hidden my-16 rounded-3xl ios-glass-card">
          <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee flex gap-8 items-center px-4">
              {Array(3).fill(MARQUEE_SKILLS_ORDERED).flat().map((item, i) => {
                const logoUrl = getLogoForSkill(item.name);
                return (
                  <div key={i} className="flex items-center gap-3 px-5 py-2.5 rounded-full ios-glass-card hover:border-sky-500/50 whitespace-nowrap transition-all hover:scale-105 shrink-0">
                    {logoUrl && (
                      <span className="w-5 h-5 flex items-center justify-center p-0.5 bg-white rounded-md shrink-0 shadow-xs">
                        <img 
                          src={logoUrl} 
                          alt="" 
                          className="w-full h-full object-contain" 
                          onError={(e) => { (e.currentTarget.parentElement as HTMLElement).style.display = 'none'; }}
                        />
                      </span>
                    )}
                    <span className="font-mono text-sm font-semibold text-[var(--color-cyber-text-light)]">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <SectionHeading title={t.aboutMe} icon={Terminal} />
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-[var(--color-cyber-text)]">
              <p className="text-[var(--color-cyber-text-light)] font-medium text-lg md:text-xl leading-relaxed">
                {t.about1}
              </p>
              <p className="opacity-90">{t.about2}</p>
              <p className="opacity-90">{t.about3}</p>
            </div>
            
            <div className="p-6 md:p-8 rounded-3xl bg-black/5 dark:bg-white/[0.03] space-y-6 backdrop-blur-md">
              <h3 className="text-xl font-bold font-sans text-[var(--color-cyber-text-light)] flex items-center gap-3 pb-3 border-b border-black/10 dark:border-white/10">
                <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400">
                  <MapPin size={20} />
                </div>
                <span>{t.contactInfo}</span>
              </h3>
              
              <ul className="space-y-3 font-sans text-sm">
                <li className="flex items-center justify-between py-2 border-b border-black/5 dark:border-white/5">
                  <span className="text-[var(--color-cyber-text)] font-medium">{t.locationLabel}</span>
                  <span className="text-[var(--color-cyber-text-light)] font-semibold">{t.location}</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b border-black/5 dark:border-white/5">
                  <span className="text-[var(--color-cyber-text)] font-medium">{t.emailLabel}</span>
                  <a href={`mailto:${DATA.email}`} className="text-sky-500 dark:text-sky-400 font-semibold hover:underline">{DATA.email}</a>
                </li>
                <li className="flex items-center justify-between py-2 border-b border-black/5 dark:border-white/5">
                  <span className="text-[var(--color-cyber-text)] font-medium">{t.phoneLabel}</span>
                  <span className="text-[var(--color-cyber-text-light)] font-semibold">{DATA.phone}</span>
                </li>
                <li className="flex items-center justify-between py-2">
                  <span className="text-[var(--color-cyber-text)] font-medium">{t.languagesLabel}</span>
                  <span className="text-[var(--color-cyber-text-light)] font-semibold">{t.languages}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <SectionHeading title={t.experience} icon={Briefcase} />
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-sky-500/40 before:via-sky-500/20 before:to-transparent">
            {t.experienceList.map((exp, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                key={index} 
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-sky-600 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 border-2 border-[var(--color-cyber-dark)]">
                  <Briefcase size={16} />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 md:p-6 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="font-extrabold text-[var(--color-cyber-text-light)] text-xl">{exp.role}</h3>
                    <span className="font-mono text-xs font-semibold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">
                      {exp.date}
                    </span>
                  </div>
                  
                  <div className="text-sm font-medium text-[var(--color-cyber-text)] mb-4 flex items-center gap-2">
                    <span className="text-sky-400 font-semibold">{exp.company}</span> • {exp.location}
                  </div>
                  
                  <ul className="space-y-2.5 text-sm leading-relaxed">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <ChevronRight size={16} className="text-sky-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Projects Section */}
        <section id="projects" className="py-16">
          <SectionHeading title={t.keyProjects} icon={Code} />
          {proUiMode ? (
            <BentoProjectsGrid 
              projects={t.projectsList.map((p) => ({
                title: p.title,
                stack: p.stack,
                description: p.description,
                image: (p as any).image ? `/images/${(p as any).image}` : undefined,
                githubUrl: (p as any).githubUrl || ((p as any).link?.includes('github.com') ? (p as any).link : `https://github.com/${DATA.github}`),
                demoUrl: (p as any).demoUrl || ((p as any).link && !(p as any).link.includes('github.com') ? (p as any).link : undefined),
                badge: (p as any).badge || (p.title.includes('ARGUS') ? 'Flagship VOC' : p.title.includes('Rja3chi') ? 'Live Incident Map' : p.title.includes('Oktopus') ? 'Custom SIEM' : undefined)
              }))} 
              onOpenArchModal={(title) => setArchModalProject(title)} 
              lang={lang} 
            />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...t.projectsList].sort((a, b) => {
                const aHasImage = !!(a as any).image;
                const bHasImage = !!(b as any).image;
                if (aHasImage && !bHasImage) return -1;
                if (!aHasImage && bHasImage) return 1;
                return 0;
              }).map((project, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="flex flex-col h-full group p-4 rounded-3xl hover:bg-black/5 dark:hover:bg-white/[0.03] transition-all duration-300"
                >
                  {(project as any).image && (
                    <div className="relative z-10 mb-5 rounded-2xl aspect-video bg-slate-950 p-1 overflow-hidden shadow-md group-hover:scale-[1.02] transition-transform duration-500">
                      <img 
                        src={`/images/${(project as any).image}`} 
                        alt={project.title} 
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  )}

                  <div className="relative z-10 flex justify-between items-start mb-3">
                    <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400">
                      <Terminal size={18} />
                    </div>
                    <div className="flex items-center gap-2">
                      {(project as any).githubUrl && (
                        <a 
                          href={(project as any).githubUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-1.5 rounded-lg text-[var(--color-cyber-text)] hover:text-sky-400 transition-colors"
                          title="View GitHub Repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {(project as any).demoUrl && (
                        <a 
                          href={(project as any).demoUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="px-2.5 py-1 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition flex items-center gap-1 text-xs font-semibold shadow-xs"
                          title="View Live Application"
                        >
                          <ExternalLink size={13} /> Live
                        </a>
                      )}
                      {!(project as any).githubUrl && !(project as any).demoUrl && (
                        <a 
                          href={(project as any).link || `https://github.com/${DATA.github}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-2 text-[var(--color-cyber-text)] hover:text-sky-400 transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--color-cyber-text-light)] mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                  <p className="text-sm mb-5 flex-grow leading-relaxed opacity-90">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {project.stack.map((tech, i) => (
                      <SkillTag key={i} skill={tech} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Technical Arsenal Section */}
        <section id="skills" className="py-16">
          <SectionHeading title={t.techArsenal} icon={Server} />
          <div className="grid md:grid-cols-2 gap-10">
            {Object.entries(DATA.skills).map(([category, skills], index) => (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={category} 
                className="space-y-4"
              >
                <h3 className="text-lg font-bold font-sans text-[var(--color-cyber-text-light)] flex items-center gap-2">
                  <span className="text-sky-400 font-mono">#</span> {t.skillsCategories[category as keyof typeof t.skillsCategories] || category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[...skills].sort((a, b) => {
                    const scoreA = STRONG_SKILLS.includes(a) ? 2 : (SIMPLE_SKILLS.includes(a) ? 0 : 1);
                    const scoreB = STRONG_SKILLS.includes(b) ? 2 : (SIMPLE_SKILLS.includes(b) ? 0 : 1);
                    return scoreB - scoreA;
                  }).map((skill, i) => (
                    <SkillTag key={i} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <SectionHeading title={t.education} icon={GraduationCap} />
              <div className="space-y-6">
                {t.educationList.map((edu, index) => (
                  <div key={index} className="pl-4 border-l-2 border-sky-500 py-1 space-y-1">
                    <h3 className="font-bold text-[var(--color-cyber-text-light)] text-lg">{edu.degree}</h3>
                    <div className="text-sky-400 font-semibold text-sm">{edu.school}</div>
                    <div className="text-xs font-mono opacity-70">{edu.date}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <SectionHeading title={t.certifications} icon={Award} />
              <ul className="space-y-3">
                {t.certificationsList.map((cert, index) => (
                  <li key={index} className="flex items-center gap-3 py-2 border-b border-black/5 dark:border-white/5">
                    <div className="p-1.5 rounded-lg bg-sky-500/15 text-sky-400 shrink-0">
                      <Award size={16} />
                    </div>
                    <span className="text-sm font-medium text-[var(--color-cyber-text-light)]">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-20 text-center max-w-2xl mx-auto">
          <div className="relative py-12 px-6 rounded-3xl bg-gradient-to-b from-sky-500/10 via-transparent to-transparent border border-sky-500/20 backdrop-blur-sm">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full ios-badge text-sky-400 font-mono text-xs font-semibold mb-4">
              <span>{t.whatsNext}</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-[var(--color-cyber-text-light)] mb-6 tracking-tight">
              {t.getInTouch}
            </h2>
            
            <p className="text-base md:text-lg mb-8 leading-relaxed text-[var(--color-cyber-text)] max-w-xl mx-auto">
              {t.contactText}
            </p>
            
            <a 
              href={`mailto:${DATA.email}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold text-lg hover:shadow-[0_10px_30px_rgba(14,165,233,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>{t.sayHello}</span> <Mail size={20} />
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 dark:border-white/10 py-10 text-center font-sans text-sm bg-black/20 backdrop-blur-md">
        <div className="flex justify-center gap-4 mb-4">
          <a href={`https://github.com/${DATA.github}`} target="_blank" rel="noreferrer" className="ios-pill p-3 text-[var(--color-cyber-text)] hover:text-sky-400 transition-colors">
            <Github size={18} />
          </a>
          <a href={`https://linkedin.com/in/${DATA.linkedin}`} target="_blank" rel="noreferrer" className="ios-pill p-3 text-[var(--color-cyber-text)] hover:text-sky-400 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${DATA.email}`} className="ios-pill p-3 text-[var(--color-cyber-text)] hover:text-sky-400 transition-colors">
            <Mail size={18} />
          </a>
        </div>
        <p className="font-medium">
          {t.designedBy} <span className="text-[var(--color-cyber-text-light)] font-normal"><strong className="font-extrabold text-sky-400">TBINI</strong> Mustapha Amin</span>
        </p>
        <p className="text-xs mt-1.5 opacity-60">
          © {new Date().getFullYear()} {t.allRights}
        </p>
      </footer>

      {/* Architecture Modals */}
      <ArchitectureModal 
        projectTitle={archModalProject} 
        onClose={() => setArchModalProject(null)} 
      />
    </div>
  );
}

