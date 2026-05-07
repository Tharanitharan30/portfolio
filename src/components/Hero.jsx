import { useState, useEffect } from 'react';
import { FileText, ArrowDown, MapPin, Terminal } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';
import { personal } from '../data/portfolioData';
import Card from './hero_right';

function useTyping(text, speed = 55, delay = 800) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

export default function Hero() {
  const { displayed, done } = useTyping(personal.tagline);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="relative z-10">
            {/* Terminal prompt badge */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent/70 border border-accent/20 rounded-full px-3 py-1.5 mb-8 bg-accent/5">
              <Terminal size={12} />
              <span>~/portfolio</span>
              <span className="text-slate-500">$</span>
              <span className="animate-pulse">▋</span>
            </div>

            {/* Name */}
            <h1 className="font-display font-bold mb-3 leading-none">
              <span className="block text-4xl sm:text-6xl lg:text-7xl text-slate-100">
                {personal.name.split(' ')[0]}
              </span>
              <span className="block text-4xl sm:text-6xl lg:text-7xl text-gradient">
                {personal.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            {/* Title */}
            <p className="font-mono text-accent text-sm sm:text-base tracking-widest mb-6 uppercase">
              {personal.title}
            </p>

            {/* Tagline typing */}
            <div className="font-mono text-slate-300 text-base sm:text-lg max-w-xl mb-4 min-h-[2rem] leading-relaxed">
              <span className="text-accent/50">"</span>
              {displayed}
              {!done && (
                <span className="inline-block w-0.5 h-4 bg-accent ml-0.5 animate-blink" />
              )}
              {done && <span className="text-accent/50">"</span>}
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono mb-10">
              <MapPin size={11} />
              <span>{personal.location}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-surface font-mono text-sm font-semibold rounded-lg hover:bg-accent/90 transition-all hover:scale-[1.03] glow"
              >
                <FileText size={14} />
                Resume
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-slate-300 font-mono text-sm rounded-lg hover:border-accent/50 hover:text-accent transition-all hover:scale-[1.03]"
              >
                <Github size={14} />
                GitHub
              </a>
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="w-full max-w-[620px] lg:max-w-none">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
