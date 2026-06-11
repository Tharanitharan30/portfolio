import { skills } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─────────────────────────────────────────────
   Icon map  –  all keys LOWERCASE for easy lookup
───────────────────────────────────────────── */
const ICON_MAP = {
  // Frontend
  'react':         'https://skillicons.dev/icons?i=react',
  'react native':  'https://skillicons.dev/icons?i=react',
  'next.js':       'https://skillicons.dev/icons?i=nextjs',
  'flutter':       'https://skillicons.dev/icons?i=flutter',
  'tailwind css':  'https://skillicons.dev/icons?i=tailwind',
  'vite':          'https://skillicons.dev/icons?i=vite',
  'html':          'https://skillicons.dev/icons?i=html',
  'css':           'https://skillicons.dev/icons?i=css',
  'bootstrap':     'https://skillicons.dev/icons?i=bootstrap',
  // Languages
  'javascript':    'https://skillicons.dev/icons?i=js',
  'typescript':    'https://skillicons.dev/icons?i=ts',
  'python':        'https://skillicons.dev/icons?i=python',
  'dart':          'https://skillicons.dev/icons?i=dart',
  'c':             'https://skillicons.dev/icons?i=c',
  'java':          'https://skillicons.dev/icons?i=java',
  // Backend
  'node.js':       'https://skillicons.dev/icons?i=nodejs',
  'express.js':    'https://skillicons.dev/icons?i=express',
  'django':        'https://skillicons.dev/icons?i=django',
  'nestjs':        'https://skillicons.dev/icons?i=nestjs',
  // Database
  'mongodb':       'https://skillicons.dev/icons?i=mongodb',
  'mysql':         'https://skillicons.dev/icons?i=mysql',
  'sqlite':        'https://skillicons.dev/icons?i=sqlite',
  // ML & Data
  'numpy':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  'pandas':        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  'opencv':        'https://skillicons.dev/icons?i=opencv',
  'matplotlib':    'https://go-skill-icons.vercel.app/api/icons?i=matplotlib',
  // Tools
  'git':           'https://skillicons.dev/icons?i=git',
  'github':        'https://skillicons.dev/icons?i=github',
  'gitlab':        'https://skillicons.dev/icons?i=gitlab',
  'vs code':       'https://skillicons.dev/icons?i=vscode',
  'figma':         'https://skillicons.dev/icons?i=figma',
  'npm':           'https://skillicons.dev/icons?i=npm',
};

const SkillIcon = ({ name }) => {
  const src = ICON_MAP[name.toLowerCase()];
  if (!src) return null;
  return (
    <img
      src={src}
      alt={name}
      className="w-12 h-12 object-contain select-none pointer-events-none drop-shadow-md"
      loading="lazy"
    />
  );
};

/* ─────────────────────────────────────────────
   Inverted-triangle builder:
   Given N items, return rows with decreasing counts
   e.g. 8 items → [4, 3, 1]  or  6 → [3, 2, 1]
───────────────────────────────────────────── */
function buildInvertedTriangleRows(items) {
  const n = items.length;
  if (n === 0) return [];

  // Determine first-row size: roughly sqrt(2n) rounded up, min 2
  let firstRow = Math.max(2, Math.round(Math.sqrt(2 * n)));
  // Make sure it doesn't exceed n
  firstRow = Math.min(firstRow, n);

  const rows = [];
  let remaining = [...items];

  while (remaining.length > 0) {
    const take = Math.min(firstRow, remaining.length);
    rows.push(remaining.splice(0, take));
    firstRow = Math.max(1, firstRow - 1);
  }

  return rows;
}

/* ─────────────────────────────────────────────
   Category accent colours (matches portfolio palette)
───────────────────────────────────────────── */
const CATEGORY_META = {
  'Frontend':       { color: '#38BDF8', emoji: '🎨' },
  'Backend':        { color: '#34D399', emoji: '⚙️' },
  'Database':       { color: '#A78BFA', emoji: '🗄️' },
  'ML & Data':      { color: '#FB923C', emoji: '🧠' },
  'Languages':      { color: '#F472B6', emoji: '💬' },
  'Tools & DevOps': { color: '#FBBF24', emoji: '🔧' },
};

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-surface">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="reveal">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm tracking-widest">02.</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-100 glow-text">Skills & Arsenal</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
          </div>

          {/* Category grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, idx) => {
              const meta = CATEGORY_META[group.category] || { color: '#22d3ee', emoji: '🔷' };
              const rows = buildInvertedTriangleRows(group.items);

              return (
                <div
                  key={group.category}
                  className="group relative p-8 rounded-[2rem] bg-surface-2/40 border border-white/5 backdrop-blur-xl hover:bg-surface-2/60 transition-all duration-500 overflow-hidden"
                  style={{ '--cat-color': meta.color }}
                >
                  {/* Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]"
                    style={{ background: `radial-gradient(ellipse at top left, ${meta.color}18, transparent 70%)` }}
                  />

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl border border-white/10 group-hover:border-white/20 transition-colors duration-500 shadow-lg"
                      style={{ background: `${meta.color}18` }}
                    >
                      {meta.emoji}
                    </div>
                    <div>
                      <span className="font-mono text-xs tracking-widest" style={{ color: meta.color }}>
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <h3 className="font-display font-bold text-xl tracking-tight text-slate-100 group-hover:text-white transition-colors duration-300">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  {/* ── Inverted-triangle icon rows ── */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    {rows.map((rowItems, rowIdx) => (
                      <div
                        key={rowIdx}
                        className="flex items-center justify-center gap-3 flex-wrap"
                      >
                        {rowItems.map((skill) => (
                          <div
                            key={skill.name}
                            className="group/skill flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 cursor-default"
                            style={{
                              '--hover-shadow': `0 0 18px ${meta.color}33`,
                              boxShadow: 'none',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 18px ${meta.color}33`; }}
                            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
                          >
                            <div className="transition-transform duration-300 group-hover/skill:scale-110">
                              <SkillIcon name={skill.name} />
                            </div>
                            <span className="text-[0.65rem] font-medium tracking-wide text-slate-400 group-hover/skill:text-slate-100 transition-colors text-center leading-tight whitespace-nowrap">
                              {skill.name}
                            </span>
                          </div>
                        ))}
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
