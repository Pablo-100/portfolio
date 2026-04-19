import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, Linkedin, Mail, Phone, MapPin, 
  Terminal, Shield, Server, Code, Award, 
  Briefcase, GraduationCap, ChevronRight, ExternalLink,
  Menu, X, Download, Sun, Moon, Globe
} from 'lucide-react';

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
  name: "TBINI Mustapha Amine",
  role: "SOC Analyst L1 & Full-Stack Developer",
  location: "Tunis – Tunisia",
  phone: "+216 46-345-226",
  email: "mustaphaamintbini@gmail.com",
  linkedin: "mustapha-amin-tbini",
  github: "Pablo-100",
  summary: "System and Network Administrator SOC Analyst L1 with hands-on experience in secure infrastructures, network administration, and security monitoring. Skilled in Linux and Windows Server environments, SIEM systems (ELK Stack), and incident detection and analysis. Strong background in Cisco and Huawei networking, with practical experience in SOC operations and cybersecurity projects. Active full-stack developer with multiple production-grade platforms built from scratch.",
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

const SORTED_MARQUEE_SKILLS = Object.values(DATA.skills).flat().sort((a, b) => {
  const scoreA = STRONG_SKILLS.includes(a) ? 2 : (SIMPLE_SKILLS.includes(a) ? 0 : 1);
  const scoreB = STRONG_SKILLS.includes(b) ? 2 : (SIMPLE_SKILLS.includes(b) ? 0 : 1);
  return scoreB - scoreA;
});

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
    role3: "Full-Stack Developer",
    badge1: "SOC L1",
    badge2: "Full-Stack",
    summary: "System and Network Administrator SOC Analyst L1 with hands-on experience in secure infrastructures, network administration, and security monitoring. Skilled in Linux and Windows Server environments, SIEM systems (ELK Stack), and incident detection and analysis. Strong background in Cisco and Huawei networking, with practical experience in SOC operations and cybersecurity projects. Active full-stack developer with multiple production-grade platforms built from scratch.",
    about1: "I am a dedicated System and Network Administrator and SOC Analyst L1 with a strong passion for secure infrastructures and proactive security monitoring.",
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
        title: "Oktopus SOC – Custom SIEM / IDS / IPS",
        image: "OCTUPUS SOC.png",
        stack: ["Python 3.8+", "WebSocket", "SQLite", "iptables", "netsh"],
        description: "Built a full Security Operations Center from scratch covering log collection, detection, prevention, geo-IP, and MITRE ATT&CK mapping. Implemented 36+ IDS detection rules and multi-OS agents."
      },
      {
        title: "OCTUPUS Education – RHCSA Platform",
        image: "OCTUPUS Education.png",
        stack: ["React 19", "TypeScript", "Node.js", "Express", "tRPC", "PostgreSQL", "Tailwind"],
        description: "Comprehensive RHCSA certification platform with 12 chapters, 18 labs, and AI-powered assistant. Implemented type-safe full-stack API with JWT and OAuth2."
      },
      {
        title: "Smart Invest Summit – B2B Matchmaking",
        image: "smart invest.png",
        stack: ["Laravel 12", "PHP 8.2+", "Tailwind CSS", "Alpine.js", "MySQL 8"],
        description: "B2B event platform connecting investors and startups with registration, admin validation, matchmaking, private messaging, and meeting scheduling."
      },
      {
        title: "Delivery Platform – Logistics System",
        image: "delevery pro.png",
        stack: ["Laravel 11", "Livewire 3", "Tailwind CSS", "MySQL 8", "APIs"],
        description: "Multi-role delivery management platform with multi-depot architecture. Implemented parcel lifecycle tracking, QR codes, GPS tracking, and SMS notifications."
      },
      {
        title: "Network Intrusion Detection System",
        image: "NIDS - Detection d'intrusion reseau.png",
        stack: ["Python", "Scapy", "scikit-learn", "Flask"],
        description: "Hybrid NIDS for real-time traffic analysis with signature-based and anomaly-based detection (Isolation Forest). Built Flask REST API and monitoring dashboard."
      },
      {
        title: "Full-Stack E-commerce Platform",
        image: "synf_project.png",
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
        image: "task_manegemnt_sys.png",
        stack: ["PHP 7.4", "MySQL 5.7", "JS", "HTML5", "CSS3", "Apache XAMPP"],
        description: "Developed secure web app for internal team task tracking. Implemented role-based authentication with admin/user separation."
      },
      {
        title: "Plane Management System",
        image: "Plane_Management_Sys.png",
        stack: ["Java", "OOP", "CLI", "Design Patterns"],
        description: "Java command-line (CLI) application for comprehensive management of planes, pilots, and passengers with an interactive interface. Implemented design patterns (Singleton, Factory, MVC).",
        link: "https://github.com/Pablo-100/Plane_Management_Sys"
      },
      {
        title: "LunaChat - Chatbot",
        image: "Luna chat bot.png",
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
    role3: "Développeur Full-Stack",
    badge1: "SOC L1",
    badge2: "Full-Stack",
    summary: "Administrateur Systèmes et Réseaux / Analyste SOC L1 avec une expérience pratique des infrastructures sécurisées, de l'administration réseau et de la surveillance de sécurité. Compétent dans les environnements Linux et Windows Server, les systèmes SIEM (ELK Stack), et la détection/analyse d'incidents. Solide base en réseaux Cisco et Huawei, avec une expérience pratique des opérations SOC et des projets de cybersécurité. Développeur full-stack actif avec plusieurs plateformes de niveau production construites de zéro.",
    about1: "Je suis un Administrateur Systèmes et Réseaux et Analyste SOC L1 dévoué, avec une forte passion pour les infrastructures sécurisées et la surveillance proactive de la sécurité.",
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
        title: "Oktopus SOC – SIEM / IDS / IPS Personnalisé",
        image: "OCTUPUS SOC.png",
        stack: ["Python 3.8+", "WebSocket", "SQLite", "iptables", "netsh"],
        description: "Création d'un centre des opérations de sécurité (SOC) complet à partir de zéro, couvrant la collecte de journaux, la détection, la prévention, la géo-IP et le mappage MITRE ATT&CK. Mise en œuvre de plus de 36 règles de détection IDS et d'agents multi-OS."
      },
      {
        title: "OCTUPUS Education – Plateforme RHCSA",
        image: "OCTUPUS Education.png",
        stack: ["React 19", "TypeScript", "Node.js", "Express", "tRPC", "PostgreSQL", "Tailwind"],
        description: "Plateforme complète de certification RHCSA avec 12 chapitres, 18 laboratoires et un assistant alimenté par l'IA. Mise en œuvre d'une API full-stack typée avec JWT et OAuth2."
      },
      {
        title: "Smart Invest Summit – Mise en relation B2B",
        image: "smart invest.png",
        stack: ["Laravel 12", "PHP 8.2+", "Tailwind CSS", "Alpine.js", "MySQL 8"],
        description: "Plateforme d'événements B2B connectant investisseurs et startups avec inscription, validation par l'administrateur, mise en relation, messagerie privée et planification de réunions."
      },
      {
        title: "Plateforme de Livraison – Système Logistique",
        image: "delevery pro.png",
        stack: ["Laravel 11", "Livewire 3", "Tailwind CSS", "MySQL 8", "APIs"],
        description: "Plateforme de gestion de livraison multi-rôles avec architecture multi-dépôts. Mise en œuvre du suivi du cycle de vie des colis, des codes QR, du suivi GPS et des notifications SMS."
      },
      {
        title: "Système de Détection d'Intrusion Réseau",
        image: "NIDS - Detection d'intrusion reseau.png",
        stack: ["Python", "Scapy", "scikit-learn", "Flask"],
        description: "NIDS hybride pour l'analyse du trafic en temps réel avec détection basée sur les signatures et les anomalies (Isolation Forest). Création d'une API REST Flask et d'un tableau de bord de surveillance."
      },
      {
        title: "Plateforme E-commerce Full-Stack",
        image: "synf_project.png",
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
        image: "task_manegemnt_sys.png",
        stack: ["PHP 7.4", "MySQL 5.7", "JS", "HTML5", "CSS3", "Apache XAMPP"],
        description: "Développement d'une application web sécurisée pour le suivi des tâches de l'équipe interne. Mise en œuvre d'une authentification basée sur les rôles avec séparation administrateur/utilisateur."
      },
      {
        title: "Système de Gestion d'Avions",
        image: "Plane_Management_Sys.png",
        stack: ["Java", "OOP", "CLI", "Design Patterns"],
        description: "Application Java en ligne de commande (CLI) pour la gestion complète des avions, pilotes et passagers avec une interface interactive. Implémentation de design patterns (Singleton, Factory, MVC).",
        link: "https://github.com/Pablo-100/Plane_Management_Sys"
      },
      {
        title: "LunaChat - Chatbot",
        image: "Luna chat bot.png",
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
  <div className="flex items-center gap-3 mb-8">
    <div className="p-3 rounded-2xl bg-[var(--color-cyber-blue)]/10 text-[var(--color-cyber-blue)]">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-bold font-mono text-gradient">{title}</h2>
    <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-cyber-border)] to-transparent ml-4"></div>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute w-[800px] h-[800px] rounded-full bg-[var(--color-cyber-blue)]/10 blur-[120px] -z-10"
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-cyber-blue)]/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-cyber-blue)]/5 blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-noise mix-blend-overlay"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="font-mono font-bold text-xl text-[var(--color-cyber-text-light)] tracking-tighter">
            <span className="text-[var(--color-cyber-blue)]">~/</span>{DATA.github}
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-[var(--color-cyber-blue)] transition-colors"
              >
                {t[item.toLowerCase() as keyof typeof t]}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contact')}
              className="px-5 py-2.5 rounded-full border border-[var(--color-cyber-blue)]/30 text-[var(--color-cyber-blue)] hover:bg-[var(--color-cyber-blue)]/10 transition-colors"
            >
              {t.contact}
            </button>
            <div className="flex items-center gap-4 border-l border-[var(--color-cyber-border)] pl-4">
              <button onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} className="flex items-center gap-1 hover:text-[var(--color-cyber-blue)] transition-colors">
                <Globe size={16} /> {lang.toUpperCase()}
              </button>
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="hover:text-[var(--color-cyber-blue)] transition-colors">
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>

          <button className="md:hidden text-[var(--color-cyber-text-light)]" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 glass-panel flex flex-col p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <button onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} className="flex items-center gap-1 hover:text-[var(--color-cyber-blue)] transition-colors">
                  <Globe size={16} /> {lang.toUpperCase()}
                </button>
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="hover:text-[var(--color-cyber-blue)] transition-colors">
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-[var(--color-cyber-text-light)]">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6 font-mono text-lg text-center">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="hover:text-[var(--color-cyber-blue)] transition-colors py-2"
                >
                  {t[item.toLowerCase() as keyof typeof t] || item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-center gap-16 md:gap-24 mb-16 md:mb-0">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="flex-1 flex flex-col gap-6"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="font-mono text-[var(--color-cyber-blue)] tracking-widest uppercase text-sm">
              {t.hello}
            </motion.div>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-5xl md:text-7xl font-black font-display text-[var(--color-cyber-text-light)] tracking-tight leading-tight mb-2">
              {DATA.name}.
            </motion.h1>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-2xl md:text-4xl font-bold text-[var(--color-cyber-text)] tracking-tight leading-tight mb-4">
              <span className="text-gradient-blue">{t.role1}</span>
              <br className="hidden md:block" />
              <span className="text-gradient"> & {t.role2}</span>
              <br className="hidden md:block" />
              <span className="text-gradient"> & {t.role3}</span>
            </motion.h2>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-lg text-[var(--color-cyber-text)] max-w-2xl leading-relaxed">
              {t.summary}
            </motion.p>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap items-center gap-4 mt-4 font-mono text-sm">
              <a href={`mailto:${DATA.email}`} className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-cyber-blue)] text-white hover:bg-[var(--color-cyber-blue)]/90 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]">
                <Mail size={16} /> {t.getInTouch}
              </a>
              <a href="/TBINI_Mustapha_Amine_CV.pdf" download="TBINI_Mustapha_Amine_CV.pdf" className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-cyber-light)]/10 text-[var(--color-cyber-text-light)] border border-[var(--color-cyber-blue)] hover:bg-[var(--color-cyber-blue)]/20 transition-all hover:scale-105">
                <Download size={16} /> {t.downloadCV}
              </a>
              <a href={`https://github.com/${DATA.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full glass-panel hover:bg-white/5 transition-all hover:scale-105 hover:border-[var(--color-cyber-blue)]">
                <Github size={16} /> GitHub
              </a>
              <a href={`https://linkedin.com/in/${DATA.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full glass-panel hover:bg-white/5 transition-all hover:scale-105 hover:border-[var(--color-cyber-blue)]">
                <Linkedin size={16} /> LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
            className="relative w-64 h-64 md:w-80 md:h-80 group"
          >
            {/* Decorative elements around image */}
            <div className="absolute inset-0 rounded-full border border-[var(--color-cyber-blue)]/30 animate-[spin_10s_linear_infinite] group-hover:border-[var(--color-cyber-blue)]/60 transition-colors duration-500"></div>
            <div className="absolute inset-4 rounded-full border border-dashed border-[var(--color-cyber-blue)]/20 animate-[spin_15s_linear_infinite_reverse] group-hover:border-[var(--color-cyber-blue)]/50 transition-colors duration-500"></div>
            <div className="absolute inset-0 rounded-full bg-[var(--color-cyber-blue)]/10 blur-2xl group-hover:bg-[var(--color-cyber-blue)]/20 transition-colors duration-500"></div>
            
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] group-hover:border-[var(--color-cyber-blue)] transition-colors duration-500">
              {/* Using GitHub avatar as a reliable source since github username is provided */}
              <img 
                src={`https://github.com/${DATA.github}.png`} 
                alt={DATA.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  // Fallback if github image fails
                  (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Mustapha+Amine+Tbini&background=0ea5e9&color=fff&size=512";
                }}
              />
            </div>
            
            {/* Floating badges */}
            {/* Large Badge: System & Network Administrator */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 md:top-4 md:left-auto md:-translate-x-0 md:-left-32 glass-panel px-4 py-2 md:px-5 md:py-3 rounded-full flex items-center gap-2 md:gap-3 font-mono text-xs md:text-sm text-[var(--color-cyber-text-light)] shadow-[0_0_20px_rgba(14,165,233,0.3)] z-20 whitespace-nowrap"
            >
              <Server size={18} className="text-[var(--color-cyber-blue)]" /> {t.role1}
            </motion.div>
            
            {/* Medium Badge: SOC L1 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 glass-panel px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 font-mono text-[10px] md:text-xs text-[var(--color-cyber-text-light)] shadow-[0_0_15px_rgba(14,165,233,0.2)] z-20 whitespace-nowrap"
            >
              <Shield size={14} className="text-[var(--color-cyber-blue)]" /> {t.badge1}
            </motion.div>
            
            {/* Small Badge: Full-Stack */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:bottom-8 md:left-auto md:-translate-x-0 md:-left-8 glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5 font-mono text-[10px] text-[var(--color-cyber-text-light)] shadow-[0_0_10px_rgba(14,165,233,0.15)] z-20 whitespace-nowrap"
            >
              <Code size={12} className="text-[var(--color-cyber-blue)]" /> {t.badge2}
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Marquee */}
        <section className="py-12 overflow-hidden mt-20 mb-8 md:mt-32 md:mb-12">
          <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee flex gap-16 items-center px-4">
              {Array(4).fill(SORTED_MARQUEE_SKILLS).flat().map((skill, i) => (
                <div key={i} className="flex items-center justify-center px-8 py-4 rounded-full glass-panel hover:bg-white/5 transition-all hover:scale-105 border border-[var(--color-cyber-border)] hover:border-[var(--color-cyber-blue)] whitespace-nowrap hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                  <span className="font-mono text-2xl font-medium text-[var(--color-cyber-text-light)]">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <SectionHeading title={t.aboutMe} icon={Terminal} />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>{t.about1}</p>
              <p>{t.about2}</p>
              <p>{t.about3}</p>
            </div>
            <div className="glass-panel p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-mono text-[var(--color-cyber-text-light)] mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-[var(--color-cyber-blue)]" /> {t.contactInfo}
              </h3>
              <ul className="space-y-4 font-mono text-sm">
                <li className="flex items-center gap-4">
                  <span className="text-[var(--color-cyber-text)] w-24">{t.locationLabel}</span>
                  <span className="text-[var(--color-cyber-text-light)]">{t.location}</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-[var(--color-cyber-text)] w-24">{t.emailLabel}</span>
                  <a href={`mailto:${DATA.email}`} className="text-[var(--color-cyber-blue)] hover:underline">{DATA.email}</a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-[var(--color-cyber-text)] w-24">{t.phoneLabel}</span>
                  <span className="text-[var(--color-cyber-text-light)]">{DATA.phone}</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-[var(--color-cyber-text)] w-24">{t.languagesLabel}</span>
                  <span className="text-[var(--color-cyber-text-light)]">{t.languages}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <SectionHeading title={t.experience} icon={Briefcase} />
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-cyber-border)] before:to-transparent">
            {t.experienceList.map((exp, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                key={index} 
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--color-cyber-dark)] bg-[var(--color-cyber-blue)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase size={16} />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-panel p-8 rounded-3xl hover:border-[var(--color-cyber-blue)]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-[var(--color-cyber-text-light)] text-xl">{exp.role}</h3>
                    <span className="font-mono text-xs text-[var(--color-cyber-blue)] bg-[var(--color-cyber-blue)]/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>
                  <div className="text-sm font-mono text-[var(--color-cyber-text)] mb-4 flex items-center gap-2">
                    <span className="text-[var(--color-cyber-text-light)]">{exp.company}</span> • {exp.location}
                  </div>
                  <ul className="space-y-2 text-sm">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-[var(--color-cyber-blue)] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <SectionHeading title={t.keyProjects} icon={Code} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...t.projectsList].sort((a, b) => {
              const aHasImage = !!(a as any).image;
              const bHasImage = !!(b as any).image;
              if (aHasImage && !bHasImage) return -1;
              if (!aHasImage && bHasImage) return 1;
              return 0;
            }).map((project, index) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index} 
                className="glass-panel rounded-3xl p-8 flex flex-col h-full hover:-translate-y-2 transition-all duration-300 hover:border-[var(--color-cyber-blue)]/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cyber-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {(project as any).image && (
                  <div className="relative z-10 mb-6 rounded-2xl aspect-video bg-[var(--color-cyber-dark)] border-2 border-[var(--color-cyber-blue)]/20 p-1.5 shadow-[0_0_15px_rgba(14,165,233,0.1)] group-hover:border-[var(--color-cyber-blue)]/60 group-hover:shadow-[0_0_25px_rgba(14,165,233,0.3)] transition-all duration-500">
                    <div className="w-full h-full overflow-hidden rounded-xl relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cyber-dark)]/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      <img 
                        src={`/images/${(project as any).image}`} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                )}

                <div className="relative z-10 flex justify-between items-start mb-4">
                  <div className="p-3 rounded-2xl bg-[var(--color-cyber-border)] text-[var(--color-cyber-text-light)] group-hover:bg-[var(--color-cyber-blue)] group-hover:text-white transition-colors">
                    <Terminal size={20} />
                  </div>
                  <a href={(project as any).link || `https://github.com/${DATA.github}`} target="_blank" rel="noreferrer" className="text-[var(--color-cyber-text)] hover:text-[var(--color-cyber-text-light)] transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-cyber-text-light)] mb-3">{project.title}</h3>
                <p className="text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-full bg-[var(--color-cyber-border)]/50 text-[var(--color-cyber-text-light)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <SectionHeading title={t.techArsenal} icon={Server} />
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(DATA.skills).map(([category, skills], index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={category} 
                className="glass-panel p-8 rounded-3xl hover:border-[var(--color-cyber-blue)]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] group"
              >
                <h3 className="text-xl font-mono text-[var(--color-cyber-text-light)] mb-6 flex items-center gap-2 group-hover:text-[var(--color-cyber-blue)] transition-colors">
                  <span className="text-[var(--color-cyber-blue)]">#</span> {t.skillsCategories[category as keyof typeof t.skillsCategories] || category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[...skills].sort((a, b) => {
                    const scoreA = STRONG_SKILLS.includes(a) ? 2 : (SIMPLE_SKILLS.includes(a) ? 0 : 1);
                    const scoreB = STRONG_SKILLS.includes(b) ? 2 : (SIMPLE_SKILLS.includes(b) ? 0 : 1);
                    return scoreB - scoreA;
                  }).map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 rounded-full border border-[var(--color-cyber-border)] bg-[var(--color-cyber-dark)]/50 text-sm hover:border-[var(--color-cyber-blue)] hover:text-[var(--color-cyber-text-light)] hover:bg-[var(--color-cyber-blue)]/10 transition-all duration-300 cursor-default hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeading title={t.education} icon={GraduationCap} />
              <div className="space-y-6">
                {t.educationList.map((edu, index) => (
                  <div key={index} className="glass-panel p-8 rounded-3xl border-l-4 border-l-[var(--color-cyber-blue)] hover:translate-x-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)]">
                    <h3 className="font-bold text-[var(--color-cyber-text-light)] text-lg">{edu.degree}</h3>
                    <div className="text-[var(--color-cyber-blue)] font-mono text-sm my-2">{edu.school}</div>
                    <div className="text-sm font-mono">{edu.date}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <SectionHeading title={t.certifications} icon={Award} />
              <div className="glass-panel p-8 rounded-3xl hover:border-[var(--color-cyber-blue)]/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)]">
                <ul className="space-y-4">
                  {t.certificationsList.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Award size={18} className="text-[var(--color-cyber-blue)] shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--color-cyber-text-light)]">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
          <div className="font-mono text-[var(--color-cyber-blue)] mb-4">{t.whatsNext}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-cyber-text-light)] mb-6">{t.getInTouch}</h2>
          <p className="text-lg mb-10 leading-relaxed">
            {t.contactText}
          </p>
          <a 
            href={`mailto:${DATA.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--color-cyber-blue)] text-[var(--color-cyber-blue)] hover:bg-[var(--color-cyber-blue)] hover:text-white transition-all duration-300 font-mono text-lg hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:scale-105"
          >
            {t.sayHello} <Mail size={20} />
          </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-cyber-border)] py-8 text-center font-mono text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a href={`https://github.com/${DATA.github}`} target="_blank" rel="noreferrer" className="text-[var(--color-cyber-text)] hover:text-[var(--color-cyber-blue)] transition-colors">
            <Github size={20} />
          </a>
          <a href={`https://linkedin.com/in/${DATA.linkedin}`} target="_blank" rel="noreferrer" className="text-[var(--color-cyber-text)] hover:text-[var(--color-cyber-blue)] transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${DATA.email}`} className="text-[var(--color-cyber-text)] hover:text-[var(--color-cyber-blue)] transition-colors">
            <Mail size={20} />
          </a>
        </div>
        <p>
          {t.designedBy} <span className="text-[var(--color-cyber-text-light)]">{DATA.name}</span>
        </p>
        <p className="text-xs mt-2 opacity-50">
          © {new Date().getFullYear()} {t.allRights}
        </p>
      </footer>
    </div>
  );
}
