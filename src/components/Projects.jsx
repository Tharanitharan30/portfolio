import { GitBranch, ArrowUpRight, Layers } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ProjectCard({ project, index }) {
  const gradient    = project.gradient    || 'from-slate-500/20 to-slate-600/20';
  const accentColor = project.accentColor || '#6366f1';
  const features    = project.features    || [];
  const stack       = project.stack       || [];
  const tagline     = project.tagline     || project.description || '';

  return (
    <div
      className={`group relative rounded-2xl p-[1px] bg-gradient-to-br ${gradient} overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full`}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl z-0"
        style={{ background: accentColor }}
      />

      {/* Card Body */}
      <div className="relative z-10 rounded-[15px] bg-surface-2/90 backdrop-blur-xl flex flex-col h-full p-6 gap-5">

        {/* Top Row */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full border shrink-0"
              style={{
                color: accentColor,
                borderColor: `${accentColor}40`,
                backgroundColor: `${accentColor}10`,
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display font-semibold text-lg tracking-tight text-slate-100 group-hover:text-white transition-colors">
              {project.name}
            </h3>
          </div>

          {/* Links — always visible */}
            <div className="flex items-center gap-3 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400 hover:text-white transition-colors"
              >
                <GitBranch size={13} />
                Code
              </a>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* Tagline */}
        <p className="text-slate-400 text-sm leading-relaxed">
          {tagline}
        </p>

        {/* Features */}
        <ul className="flex flex-col gap-2 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-slate-400">
              <span
                className="mt-[4px] text-[8px] shrink-0"
                style={{ color: accentColor }}
              >
                ✦
              </span>
              <span className="leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>

        {/* Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
          {stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useScrollReveal();

  // Split into pairs for balanced 2-col grid
  const pairs = [];
  for (let i = 0; i < projects.length; i += 2) {
    pairs.push(projects.slice(i, i + 2));
  }

  return (
    <section id="projects" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="reveal">

          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-accent text-sm tracking-widest">04.</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-100 glow-text">
              Featured Projects
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
          </div>

          {/* Projects Grid — row by row, equal heights */}
          <div className="flex flex-col gap-6">
            {pairs.map((pair, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
                {pair.map((project, i) => (
                  <ProjectCard
                    key={project.name}
                    project={project}
                    index={rowIndex * 2 + i}
                  />
                ))}
                {/* Placeholder to keep last odd card left-aligned */}
                {pair.length === 1 && (
                  <div className="hidden sm:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          {/* View All */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/Tharanitharan30"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-surface-2/50 border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
            >
              <Layers size={16} className="text-accent group-hover:rotate-12 transition-transform" />
              <span className="font-mono text-sm text-slate-300 group-hover:text-white transition-colors">
                View Complete Archive on GitHub
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}