import { skills } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Database, Terminal, Code, Layout, Server, Smartphone, Zap, Palette } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const SkillIcon = ({ name, size = 24, className = "" }) => {
  // Brand SVGs for recognized skills
  const brandIcons = {
    "React": (
      <svg width={size} height={size} viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    ),
    "React Native": (
      <svg width={size} height={size} viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    ),
    "Python": (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M11.907 2C7.382 2 7.07 4.088 7.07 4.088l-.023 2.122h4.942v.698H5.215s-2.923-.198-2.923 2.871c0 3.07 2.553 2.946 2.553 2.946h1.222v-2.091c0-2.316 1.942-2.35 1.942-2.35h3.91s2.003-.021 2.003 1.95v2.852s.06 1.98-2.004 1.98H9.378s-2.126-.068-2.126 1.884v1.883s-.295 2.158 2.53 2.158c2.824 0 5.093 0 5.093 0s4.653.255 4.653-3.957v-2.072H14.54s-1.916 0-1.916-1.95V9.923s-.02-1.892 1.916-1.892h3.974s1.85.08 1.85-2.02V4.089s.214-2.089-4.385-2.089H11.907zm-1.834 1.258a1.002 1.002 0 11-.001 2.004 1.002 1.002 0 010-2.004zm5.723 15.485a1.002 1.002 0 110-2.005 1.002 1.002 0 010 2.005z"/>
      </svg>
    ),
    "JavaScript": (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.81.39.015.75.09 1.066.255.45.24.81.6 1.155 1.02.12.165.345.18.51.045l1.635-1.17c.18-.12.225-.375.09-.555-.87-1.155-2.01-1.875-3.525-2.16-1.05-.195-2.13-.15-3.12.195-1.215.435-2.145 1.215-2.61 2.385-.315.825-.36 1.71-.135 2.535.345 1.17 1.23 2 2.505 2.55 1.05.45 2.145.81 2.595 1.485.195.27.24.585.12.885-.135.36-.45.675-.855.825-.435.15-.9.18-1.35.105-.66-.105-1.245-.39-1.725-.855-.42-.405-.75-.885-.975-1.425-.09-.225-.33-.315-.555-.21l-1.755.795c-.21.09-.3.345-.195.555.51 1.035 1.23 1.845 2.13 2.4 1.125.705 2.43 1.05 3.735 1.035 1.035 0 2.055-.225 2.97-.675 1.245-.63 2.16-1.635 2.58-2.94.225-.66.285-1.35.195-2.025zM11.385 19.35V5.55c0-.255-.21-.465-.465-.465H8.76c-.255 0-.465.21-.465.465v10.92c-.015 1.485-.585 2.025-1.485 2.145-.51.075-1.035-.045-1.485-.315-.435-.255-.765-.675-.915-1.155-.06-.18-.255-.285-.435-.225l-1.86.63c-.225.075-.33.33-.225.54.495 1.185 1.305 2.07 2.4 2.595 1.005.48 2.13.66 3.255.525 1.44-.195 2.55-1.005 3.165-2.31.255-.555.375-1.155.375-1.77v-7.14z"/>
      </svg>
    ),
    "Tailwind CSS": (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 6C9 6 7 8 6 12c1.5-2 3-2.5 4.5-1.5 1 0.667 1.571 1.838 2.571 3.5C14.571 16.5 16.5 18 19.5 18c3 0 5-2 6-6-1.5 2-3 2.5-4.5 1.5-1-0.667-1.571-1.838-2.571-3.5C16.929 7.5 15 6 12 6zm-6 6C3 12 1 14 0 18c1.5-2 3-2.5 4.5-1.5C5.5 17.167 6.071 18.338 7.071 20c1.5 2.5 3.429 4 6.429 4 3 0 5-2 6-6-1.5 2-3 2.5-4.5 1.5-1-0.667-1.571-1.838-2.571-3.5C10.929 13.5 9 12 6 12z" fill="currentColor"/>
      </svg>
    ),
    "Vite": <Zap size={size} className={className} />,
    "Flutter": <Smartphone size={size} className={className} />,
    "Django": <Server size={size} className={className} />,
    "Express.js": <Server size={size} className={className} />,
    "MongoDB": <Database size={size} className={className} />,
    "MySQL": <Database size={size} className={className} />,
    "SQLite": <Database size={size} className={className} />,
    "Dart": <Code size={size} className={className} />,
    "C": <Terminal size={size} className={className} />,
    "SQL": <Database size={size} className={className} />,
    "Git": <GithubIcon size={size} className={className} />,
  };

  return brandIcons[name] || <Code size={size} className={className} />;
};

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-surface">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="reveal">
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm tracking-widest">02.</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-100 glow-text">Skills & Arsenal</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, idx) => {
              // Create a bento box layout by spanning columns
              let spanClass = "col-span-1";
              if (group.category === "Frontend" || group.category === "Languages & Tools") {
                 spanClass = "md:col-span-2 lg:col-span-2";
              }

              return (
                <div 
                  key={group.category}
                  className={`group relative p-8 rounded-[2rem] bg-surface-2/40 border border-white/5 backdrop-blur-xl hover:bg-surface-2/60 transition-all duration-500 overflow-hidden ${spanClass}`}
                >
                  {/* Subtle Glow Behind the Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-5 mb-8 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-accent/30 group-hover:bg-accent/10 transition-colors duration-500 shadow-xl">
                      <span className="text-accent font-mono text-sm font-bold shadow-sm">{(idx + 1).toString().padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl tracking-tight text-slate-100 group-hover:text-white transition-colors duration-300">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills Grid inside the Bento Box */}
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4 relative z-10">
                    {group.items.map((skill) => (
                      <div 
                        key={skill.name}
                        className="flex flex-col items-center justify-center gap-4 p-5 rounded-[1.25rem] bg-white/[0.02] border border-white/[0.05] hover:border-accent/30 hover:bg-white/[0.05] hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group/skill"
                      >
                        <div className="text-slate-400 group-hover/skill:text-accent transition-colors duration-300 group-hover/skill:scale-110 drop-shadow-md">
                           <SkillIcon name={skill.name} size={32} />
                        </div>
                        <span className="text-xs font-medium tracking-wide text-slate-300 group-hover/skill:text-white transition-colors text-center leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
