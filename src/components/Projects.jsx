import { GitBranch, Layers, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ProjectCard({ project, index }) {
  return (
    <div className={`group relative rounded-3xl p-[1px] bg-gradient-to-br ${project.gradient} overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
      {/* Dynamic Glow Behind */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl z-0"
        style={{ background: project.accentColor }}
      />
      
      {/* Inner Card content */}
      <div className="relative h-full z-10 rounded-[23px] bg-surface-2/90 flex flex-col p-8 lg:p-10 backdrop-blur-xl">
        
        {/* Giant Watermark index */}
        <span className="absolute top-4 right-6 text-[120px] font-display font-black leading-none opacity-[0.03] text-white pointer-events-none select-none transition-all duration-700 group-hover:opacity-[0.06] group-hover:scale-110">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Header Section */}
        <div className="flex items-center gap-4 mb-6 relative">
          <div className="w-1.5 h-8 rounded-full shadow-sm" style={{ backgroundColor: project.accentColor }} />
          <h3 className="font-display font-semibold text-2xl tracking-tight text-slate-100 group-hover:text-white transition-colors duration-300">
            {project.name}
          </h3>
        </div>

        {/* Tagline */}
        <p className="text-slate-300/80 text-base leading-relaxed mb-8 max-w-sm relative">
          {project.tagline}
        </p>

        {/* Features Grid */}
        <ul className="grid gap-3 mb-8 relative flex-1">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-slate-400">
              <span className="mt-[3px] opacity-70 text-[10px]" style={{ color: project.accentColor }}>✦</span>
              <span className="leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>

        {/* Bottom Section */}
        <div className="mt-auto relative space-y-8">
          {/* Stack Pills */}
          <div className="flex flex-wrap gap-2.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 backdrop-blur-md shadow-sm transition-colors group-hover:border-white/20 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 pt-6 border-t border-white/5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} GitHub`}
              className="flex items-center gap-2 font-mono text-xs font-medium text-slate-400 hover:text-white transition-colors group/link"
              style={{ '--hover-color': project.accentColor }}
            >
              <GitBranch size={16} className="group-hover/link:stroke-[var(--hover-color)] transition-colors" />
              Source Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live demo`}
                className="flex items-center gap-1.5 font-mono text-xs font-medium text-slate-400 hover:text-white transition-colors group/link ml-auto"
                style={{ '--hover-color': project.accentColor }}
              >
                Live Demo
                <ArrowUpRight size={18} className="group-hover/link:stroke-[var(--hover-color)] transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24 relative bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="reveal">
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm tracking-widest">04.</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-100 glow-text">Featured Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </div>

          {/* View all */}
          <div className="text-center mt-16">
             <a
              href="https://github.com/Tharanitharan30"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-surface-2/50 border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 shadow-sm"
            >
              <Layers size={18} className="text-accent group-hover:rotate-12 transition-transform" />
              <span className="font-mono text-sm text-slate-300 group-hover:text-white transition-colors">View Complete Archive on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
