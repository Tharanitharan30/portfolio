import { skills } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-surface">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-accent/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="reveal">
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm tracking-widest">02.</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-100 glow-text">Skills & Arsenal</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, idx) => (
              <div 
                key={group.category}
                className="group relative p-6 sm:p-8 rounded-2xl bg-surface-2/40 border border-border backdrop-blur-sm hover:bg-surface-2/60 transition-colors duration-500 overflow-hidden"
              >
                {/* Glow Line on Hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center border border-border group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors duration-300">
                    <span className="text-accent font-mono text-sm shadow-sm">{(idx + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-slate-200 group-hover:text-accent transition-colors duration-300">
                    {group.category}
                  </h3>
                </div>

                {/* Skills Container */}
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-surface/50 border border-border/50 text-slate-300 hover:text-accent hover:border-accent/40 hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1 cursor-default shadow-sm hover:shadow-md"
                    >
                      <span className="text-lg leading-none" role="img" aria-label={skill.name}>{skill.icon}</span>
                      <span className="text-sm font-medium leading-none tracking-wide">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
