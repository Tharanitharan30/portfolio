import { Mail, Heart  } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';
import { personal } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <a href="#hero" className="font-mono text-accent text-sm font-semibold tracking-widest">
            &lt;TS /&gt;
          </a>

          {/* Copy */}
          <p className="font-mono text-xs text-slate-600 flex items-center gap-1.5">
            © {year} {personal.name} — Built with
            <Heart size={11} className="text-accent/60 fill-accent/40" />
            React & Tailwind
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { href: personal.github, icon: Github, label: 'GitHub' },
              { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-600 hover:text-accent transition-colors"
              >
                <Icon size={25} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
