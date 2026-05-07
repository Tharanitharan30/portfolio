import { useState } from 'react';
import { Award, ExternalLink, ImageOff } from 'lucide-react';
import { hackathonCertificates } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

function CertificateImage({ src, alt }) {
  const [broken, setBroken] = useState(false);

  if (!src || broken) {
    return (
      <div className="aspect-[16/10] w-full rounded-lg border border-border bg-surface-3/60 flex items-center justify-center mb-4">
        <div className="text-center">
          <ImageOff size={18} className="text-slate-500 mx-auto mb-1.5" />
          <p className="font-mono text-[10px] text-slate-500 tracking-wide uppercase">Add Certificate Image</p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-[16/10] w-full rounded-lg border border-border overflow-hidden mb-4 bg-surface-3/40">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setBroken(true)}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}

export default function Certificates() {
  const ref = useScrollReveal();

  return (
    <section id="certificates" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-accent text-xs tracking-widest">03.</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-100">Hackathon Certificates</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hackathonCertificates.map((item) => (
              <article
                key={`${item.title}-${item.year}`}
                className="rounded-xl border border-border bg-surface-2 p-5 hover:border-accent/40 transition-all hover:-translate-y-1"
              >
                <CertificateImage src={item.image} alt={`${item.title} certificate`} />

                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                    <Award size={16} className="text-accent" />
                  </div>
                  <span className="font-mono text-xs text-slate-500 border border-border rounded-full px-2.5 py-1 whitespace-nowrap">
                    {item.year}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-slate-100 text-lg leading-tight">{item.title}</h3>
                <p className="font-mono text-xs text-accent/70 tracking-wide mt-1">{item.organizer}</p>

                <p className="text-slate-400 text-sm leading-relaxed mt-3">{item.summary}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">
                    {item.achievement}
                  </span>
                  {item.link && item.link !== '#' && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-accent transition-colors"
                    >
                      View
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}