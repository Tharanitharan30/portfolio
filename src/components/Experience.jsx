import { experience } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24 bg-surface-2/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-accent text-xs tracking-widest">05.</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-100">Experience</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

            <div className="space-y-10 pl-12">
              {experience.map((item, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-surface glow-sm" />

                  {/* Card */}
                  <div className="rounded-xl border border-border bg-surface-2 p-6 hover:border-accent/30 transition-all hover:-translate-y-0.5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-display font-semibold text-slate-100 text-lg">{item.role}</h3>
                        <p className="font-mono text-xs text-accent/70 tracking-wide mt-0.5">{item.company}</p>
                      </div>
                      <span className="font-mono text-xs text-slate-500 border border-border rounded-full px-3 py-1 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
