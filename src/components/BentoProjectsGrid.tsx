import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Shield, Cpu, Layers, Activity, ArrowUpRight, Sparkles } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface Project {
  title: string;
  stack: string[];
  description: string;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  badge?: string;
  category?: 'soc' | 'net' | 'dev';
  featured?: boolean;
}

interface BentoProjectsGridProps {
  projects: Project[];
  onOpenArchModal: (title: string) => void;
  lang: 'fr' | 'en';
}

export const BentoProjectsGrid: React.FC<BentoProjectsGridProps> = ({ projects, onOpenArchModal, lang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'soc' | 'net' | 'dev'>('all');

  // Categorize projects intelligently
  const enrichedProjects = projects.map((p) => {
    let category: 'soc' | 'net' | 'dev' = 'dev';
    const titleLower = p.title.toLowerCase();
    const descLower = p.description.toLowerCase();

    if (
      titleLower.includes('argus') ||
      titleLower.includes('oktopus') ||
      titleLower.includes('voc') ||
      titleLower.includes('nids') ||
      titleLower.includes('soc') ||
      descLower.includes('cve') ||
      descLower.includes('vulnerability') ||
      descLower.includes('siem')
    ) {
      category = 'soc';
    } else if (
      titleLower.includes('network') ||
      titleLower.includes('voip') ||
      titleLower.includes('windows server') ||
      descLower.includes('cisco') ||
      descLower.includes('huawei') ||
      descLower.includes('vlan') ||
      descLower.includes('active directory')
    ) {
      category = 'net';
    }

    const githubUrl = p.githubUrl || (p.link?.includes('github.com') ? p.link : undefined);
    const demoUrl = p.demoUrl || (p.link && !p.link.includes('github.com') ? p.link : undefined);

    const isFeatured =
      titleLower.includes('argus') || titleLower.includes('rja3chi') || titleLower.includes('oktopus') || titleLower.includes('octupus');

    return {
      ...p,
      githubUrl,
      demoUrl,
      category,
      featured: isFeatured
    };
  });

  const filtered = activeCategory === 'all'
    ? enrichedProjects
    : enrichedProjects.filter((p) => p.category === activeCategory);

  const categories = [
    { id: 'all', label: lang === 'fr' ? 'Tous les Projets' : 'All Projects' },
    { id: 'soc', label: lang === 'fr' ? 'Sécurité & SOC' : 'Security & SOC' },
    { id: 'net', label: lang === 'fr' ? 'Systèmes & Réseaux' : 'Systems & Networks' },
    { id: 'dev', label: lang === 'fr' ? 'Développement Full-Stack' : 'Full-Stack Apps' }
  ];

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeCategory === cat.id
                ? 'bg-sky-500 text-white font-bold shadow-md scale-105'
                : 'ios-pill text-[var(--color-cyber-text)] hover:text-[var(--color-cyber-text-light)]'
            }`}
          >
            {cat.id === 'soc' && <Shield size={14} />}
            {cat.id === 'net' && <Cpu size={14} />}
            {cat.id === 'dev' && <Layers size={14} />}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Bento Grid - Uniform Gapless Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => {
            const isSOC = project.category === 'soc';

            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="flex flex-col h-full"
              >
                <SpotlightCard className="h-full p-6 flex flex-col justify-between group hover:border-sky-500/50">
                  <div>
                    {/* Card Top Row */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        {project.badge && (
                          <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/15 text-sky-600 dark:text-sky-300 border border-sky-500/30 flex items-center gap-1">
                            <Sparkles size={12} /> {project.badge}
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono text-[var(--color-cyber-text)] bg-sky-500/10 border border-sky-500/20">
                          {project.category === 'soc'
                            ? 'SOC & Threat Intel'
                            : project.category === 'net'
                            ? 'Systems & Networks'
                            : 'Full-Stack'}
                        </span>
                      </div>

                      {/* Action Triggers */}
                      <div className="flex items-center gap-2">
                        {isSOC && (
                          <button
                            onClick={() => onOpenArchModal(project.title)}
                            className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-600 dark:text-sky-400 text-xs font-mono hover:bg-sky-500 hover:text-white transition flex items-center gap-1 font-semibold"
                            title="View System Architecture Diagram"
                          >
                            <Activity size={14} /> Arch
                          </button>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-[var(--color-cyber-text)] hover:text-sky-500 transition hover:bg-sky-500/10"
                            title="View GitHub Repository"
                          >
                            <Github size={16} />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold transition flex items-center gap-1 shadow-xs hover:scale-105 active:scale-95"
                            title="View Live Application"
                          >
                            <ExternalLink size={13} /> Live
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Image Preview if provided */}
                    {project.image && (
                      <div className="relative mb-5 rounded-xl overflow-hidden border border-[var(--color-cyber-border)] bg-slate-950/60 max-h-56 group-hover:border-sky-500/40 transition">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                      </div>
                    )}

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold font-display text-[var(--color-cyber-text-light)] group-hover:text-sky-500 transition-colors mb-2 flex items-center gap-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--color-cyber-text)] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-4 border-t border-[var(--color-cyber-border)] flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs font-mono bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
