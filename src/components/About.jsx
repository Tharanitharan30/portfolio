import { Lightbulb, MapPin } from 'lucide-react';
import { personal } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="reveal">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-accent text-xs tracking-widest">01.</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-100">About Me</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <div className="md:col-span-3 space-y-5">
            <p className="text-slate-400 leading-relaxed text-base">
              {personal.bio}
            </p>

            <div className="flex items-start gap-3 p-4 rounded-xl border border-accent/20 bg-accent/5">
              <Lightbulb size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-mono text-xs text-accent mb-1 tracking-wider">FUN FACT</p>
                <p className="text-slate-400 text-sm leading-relaxed">{personal.funFact}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-500 text-sm font-mono">
              <MapPin size={13} className="text-accent/60" />
              {personal.location}
            </div>
          </div>

          {/* Avatar card */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-surface-3 to-surface-2 border border-border relative overflow-hidden glow-sm animate-float shadow-2xl shadow-accent/10">
                <img
                  src="/1751555924499.jpeg"
                  alt="Tharanitharan S profile photo"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-blue-500/10" />
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 border-r-2 border-b-2 border-accent/30 rounded-br-xl" />
              <div className="absolute -top-2 -left-2 w-12 h-12 border-l-2 border-t-2 border-accent/20 rounded-tl-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
