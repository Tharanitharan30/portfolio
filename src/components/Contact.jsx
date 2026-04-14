import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';
import { personal } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — wire up to Formspree / EmailJS in production
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  const socials = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Github, label: 'GitHub', value: 'github.com/tharanitharan', href: personal.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/tharanitharan', href: personal.linkedin },
  ];

  return (
    <section id="contact" className="py-24 bg-surface-2/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-accent text-xs tracking-widest">07.</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-100">Contact</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left */}
            <div className="space-y-6">
              <p className="text-slate-400 leading-relaxed">
                Have a project in mind, want to collaborate, or just say hi? My inbox is open. I'll get back to you as soon as I can.
              </p>

              <div className="space-y-4">
                {socials.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface-2 hover:border-accent/40 hover:bg-surface-3 transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-slate-500 tracking-wider mb-0.5">{label}</p>
                      <p className="text-sm text-slate-300 group-hover:text-accent transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div>
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 p-8 rounded-xl border border-accent/30 bg-accent/5 text-center">
                  <CheckCircle size={40} className="text-accent" />
                  <p className="font-display font-semibold text-slate-100 text-lg">Message sent!</p>
                  <p className="text-slate-400 text-sm">Thanks for reaching out. I'll reply soon.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="font-mono text-xs text-accent hover:underline mt-2"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {[
                    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block font-mono text-xs text-slate-500 tracking-wider mb-1.5">
                        {label}
                      </label>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[id]}
                        onChange={handleChange}
                        className="w-full bg-surface-2 border border-border rounded-lg px-4 py-2.5 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all font-mono"
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" className="block font-mono text-xs text-slate-500 tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What's on your mind?"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-surface-2 border border-border rounded-lg px-4 py-2.5 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-accent text-surface font-mono text-sm font-semibold rounded-lg hover:bg-accent/90 transition-all hover:scale-[1.02] glow disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {loading ? (
                      <span className="inline-block w-4 h-4 border-2 border-surface/40 border-t-surface rounded-full animate-spin" />
                    ) : (
                      <Send size={14} />
                    )}
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
