import { education } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-accent text-xs tracking-widest">06.</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-100">Education</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-xl border border-border bg-surface-2 hover:border-accent/30 transition-all group"
              >
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/15 transition-colors">
                  <GraduationCap size={22} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-slate-100 text-lg">{edu.institution}</h3>
                  <p className="font-mono text-xs text-accent/70 tracking-wide mt-0.5">{edu.degree}</p>
                  {edu.note && <p className="text-slate-500 text-xs mt-1">{edu.note}</p>}
                </div>
                <span className="font-mono text-xs text-slate-500 border border-border rounded-full px-3 py-1 whitespace-nowrap self-start sm:self-center">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
