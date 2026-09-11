import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Shield, Download, Mail, Phone, Code, Briefcase, Server, Check, Terminal, ExternalLink } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (sectionId: string) => void;
  onOpenArchModal?: (title: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenArchModal
}) => {
  const [query, setQuery] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setQuery('');
      setStatusMsg(null);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleScrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('+216 46-345-226');
    setCopiedPhone(true);
    setStatusMsg('Numéro copié : +216 46-345-226');
    setTimeout(() => {
      setCopiedPhone(false);
      setStatusMsg(null);
    }, 2500);
  };

  const commandGroups = [
    {
      category: 'Navigation Rapide',
      items: [
        {
          id: 'nav-projects',
          label: 'Voir les Projets Clés',
          desc: 'ARGUS VOC, Oktopus SIEM, Rja3chi, LMS...',
          icon: Code,
          action: () => handleScrollTo('projects')
        },
        {
          id: 'nav-experience',
          label: 'Parcours & Expériences',
          desc: 'TDS (VOC), Topnet (PFE SOC), Tunisie Telecom...',
          icon: Briefcase,
          action: () => handleScrollTo('experience')
        },
        {
          id: 'nav-skills',
          label: 'Arsenal Technique & Compétences',
          desc: 'Cisco, ELK Stack, Linux, Laravel, React...',
          icon: Server,
          action: () => handleScrollTo('skills')
        },
        {
          id: 'nav-contact',
          label: 'Contact Direct',
          desc: 'Prendre contact avec TBINI Mustapha Amin',
          icon: Mail,
          action: () => handleScrollTo('contact')
        }
      ]
    },
    {
      category: 'Projets & Architectures SOC',
      items: [
        {
          id: 'arch-argus',
          label: 'Architecture ARGUS VOC',
          desc: 'Diagramme de flux Threat Intel & Alerte Telegram',
          icon: Shield,
          action: () => {
            if (onOpenArchModal) onOpenArchModal('ARGUS VOC');
            onClose();
          }
        },
        {
          id: 'arch-oktopus',
          label: 'Architecture Oktopus SOC',
          desc: 'Pipeline SIEM / IDS / IPS & MITRE ATT&CK',
          icon: Shield,
          action: () => {
            if (onOpenArchModal) onOpenArchModal('Oktopus SOC');
            onClose();
          }
        }
      ]
    },
    {
      category: 'Actions Directes',
      items: [
        {
          id: 'act-cv',
          label: 'Télécharger le CV (PDF)',
          desc: 'Obtenir le CV de TBINI Mustapha Amin',
          icon: Download,
          action: () => {
            const a = document.createElement('a');
            a.href = '/TBINI_Mustapha_Amine_CV.pdf';
            a.download = 'TBINI_Mustapha_Amine_CV.pdf';
            a.click();
            onClose();
          }
        },
        {
          id: 'act-email',
          label: 'Envoyer un Email',
          desc: 'mustaphaamintbini@gmail.com',
          icon: Mail,
          action: () => {
            window.location.href = 'mailto:mustaphaamintbini@gmail.com';
            onClose();
          }
        },
        {
          id: 'act-phone',
          label: 'Copier le Numéro de Téléphone',
          desc: '+216 46-345-226',
          icon: copiedPhone ? Check : Phone,
          action: copyPhone
        }
      ]
    }
  ];

  // Filter items by search query
  const filteredGroups = commandGroups
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.desc.toLowerCase().includes(query.toLowerCase())
      )
    }))
    .filter((group) => group.items.length > 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#090d18] border border-sky-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3 bg.slate-950/80 border-b border-sky-500/20">
          <Search size={18} className="text-sky-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tapez une commande ou cherchez un projet, CV, contact..."
            className="flex-1 bg-transparent border-none outline-none font-sans text-sm text-slate-100 placeholder-slate-500"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-semibold text-slate-400 bg-slate-800 rounded border border-slate-700">
            ESC
          </kbd>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Action List */}
        <div className="p-2 max-h-[380px] overflow-y-auto space-y-4 font-sans">
          {statusMsg && (
            <div className="m-2 p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
              <Check size={14} /> {statusMsg}
            </div>
          )}

          {filteredGroups.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500 font-mono">
              Aucun résultat pour "{query}".
            </div>
          ) : (
            filteredGroups.map((group) => (
              <div key={group.category}>
                <div className="px-3 py-1.5 text-[10px] font-mono font-bold tracking-wider text-sky-400 uppercase">
                  {group.category}
                </div>
                <div className="space-y-1 mt-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-sky-950/50 hover:border hover:border-sky-500/30 transition group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-slate-900 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition">
                            <Icon size={16} />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-100 group-hover:text-sky-300 transition">
                              {item.label}
                            </div>
                            <div className="text-[11px] text-slate-400">{item.desc}</div>
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-slate-600 group-hover:text-sky-400 transition" />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2 bg-[#050810] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>TBINI Mustapha Amin — Raycast Command Palette</span>
          <span className="text-sky-400/80">⌘K pour fermer</span>
        </div>
      </div>
    </div>
  );
};
