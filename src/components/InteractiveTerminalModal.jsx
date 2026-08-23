import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { personal as PERSONAL_INFO, skills as SKILLS_RAW, projects as PROJECTS_DATA } from '../data/portfolioData';

const SKILLS_DATA = SKILLS_RAW.flatMap((cat) => cat.items);

const NEOFETCH_ART = `          .--.        ${PERSONAL_INFO.name}@linux-workstation
         |o_o |       -------------------------------
         |:_/ |       OS          Linux (Arch-based)
        //   \\ \\      Role        ${PERSONAL_INFO.title}
       (|     | )     Location    ${PERSONAL_INFO.location}
      /'\\_   _/\`\\     Status      Online
      \\___)=(___/     Shell       zsh 5.9`;

const HELP_OUTPUT = (
  <div className="text-slate-300 font-mono text-xs sm:text-sm space-y-1">
    <p className="text-emerald-400 font-semibold">Available commands:</p>
    <p><span className="text-cyan-400">help</span> - Display available commands</p>
    <p><span className="text-cyan-400">neofetch</span> - Show system info</p>
    <p><span className="text-cyan-400">projects</span> - List projects</p>
    <p><span className="text-cyan-400">skills</span> - List installed skills</p>
    <p><span className="text-cyan-400">whoami</span> - Show user identity</p>
    <p><span className="text-cyan-400">cat bio.txt</span> - Display developer bio</p>
    <p><span className="text-cyan-400">contact</span> - Get email &amp; social links</p>
    <p><span className="text-cyan-400">goto [section]</span> - Scroll to section (about, skills, projects, experience, education, certificates, contact)</p>
    <p><span className="text-cyan-400">clear</span> - Clear screen</p>
    <p><span className="text-cyan-400">exit</span> - Close terminal</p>
  </div>
);

export const InteractiveTerminalModal = ({ isOpen, onClose, onNavigateSection }) => {
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState([
    {
      command: 'neofetch',
      output: (
        <div className="text-emerald-400 font-mono text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">
          {NEOFETCH_ART}
        </div>
      ),
    },
    {
      command: 'help',
      output: HELP_OUTPUT,
    },
  ]);

  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let outputNode = null;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd === 'exit') {
      onClose();
      setInput('');
      return;
    } else if (cmd === 'help') {
      outputNode = HELP_OUTPUT;
    } else if (cmd === 'neofetch') {
      outputNode = (
        <div className="text-emerald-400 font-mono text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">
          {NEOFETCH_ART}
        </div>
      );
    } else if (cmd === 'projects' || cmd === 'ps' || cmd === 'ps aux') {
      outputNode = (
        <div className="font-mono text-xs sm:text-sm space-y-2">
          <div className="text-slate-400 border-b border-slate-800 pb-1">
            PID &nbsp; PROCESS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; STATUS &nbsp;&nbsp; CPU% &nbsp; MEM%
          </div>
          {PROJECTS_DATA.map((p, idx) => (
            <div key={p.name} className="flex items-center gap-3 text-slate-200">
              <span className="text-emerald-400">{String(101 + idx)}</span>
              <span className="text-cyan-300 w-24 sm:w-32 truncate">{p.name}</span>
              <span className="text-emerald-500 font-bold">RUNNING</span>
              <span className="text-purple-400">{((idx * 7 + 13) % 30) + 5}.4</span>
              <span className="text-slate-400">{((idx * 11 + 21) % 25) + 8}.2%</span>
            </div>
          ))}
        </div>
      );
    } else if (cmd === 'skills' || cmd === 'ls /usr/local/skills' || cmd === 'ls') {
      outputNode = (
        <div className="font-mono text-xs sm:text-sm grid grid-cols-2 sm:grid-cols-3 gap-2 text-slate-300">
          {SKILLS_DATA.map((s) => (
            <div key={s.name} className="p-1.5 rounded bg-slate-800/50 border border-slate-700/50 text-cyan-300">
              [{s.name}]
            </div>
          ))}
        </div>
      );
    } else if (cmd === 'whoami') {
      outputNode = (
        <p className="text-emerald-400 font-mono text-sm">
          {PERSONAL_INFO.name} ({PERSONAL_INFO.title})
        </p>
      );
    } else if (cmd === 'cat bio.txt' || cmd === 'bio') {
      outputNode = (
        <p className="text-slate-300 font-mono text-xs sm:text-sm leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>
      );
    } else if (cmd === 'contact') {
      outputNode = (
        <div className="font-mono text-xs sm:text-sm space-y-1 text-slate-300">
          <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 hover:underline">{PERSONAL_INFO.email}</a></p>
          <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">{PERSONAL_INFO.github}</a></p>
          <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">{PERSONAL_INFO.linkedin}</a></p>
        </div>
      );
    } else if (cmd.startsWith('goto ')) {
      const target = cmd.replace('goto ', '').trim();
      if (onNavigateSection) {
        onNavigateSection(target);
        outputNode = <p className="text-emerald-400 font-mono text-xs">Navigating to section: #{target}...</p>;
      }
    } else if (cmd.startsWith('sudo')) {
      outputNode = (
        <p className="text-amber-400 font-mono text-xs sm:text-sm">
          [sudo] permission granted! You now have root privileges in Tharanitharan's portfolio shell.
        </p>
      );
    } else {
      outputNode = (
        <p className="text-rose-400 font-mono text-xs sm:text-sm">
          zsh: command not found: {cmd}. Type <span className="text-cyan-400 font-bold">help</span> for available commands.
        </p>
      );
    }

    setHistory((prev) => [...prev, { command: input, output: outputNode }]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
      <div
        className={`w-full bg-[#0d1117] border border-emerald-500/30 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isMaximized ? 'h-[95vh] max-w-[98vw]' : 'h-[600px] max-w-3xl'
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer hover:bg-rose-600" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <div className="flex items-center gap-1.5 ml-3 text-xs font-mono text-slate-400">
              <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>tharanitharan@linux-workstation:~</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 hover:text-white rounded hover:bg-slate-800 transition-colors"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:text-white rounded hover:bg-slate-800 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 font-mono text-xs sm:text-sm text-slate-200">
          <div className="text-slate-500 text-xs border-b border-slate-800/80 pb-2">
            Linux 6.12.0-tharanitharan-x86_64 (zsh 5.9). Type <span className="text-emerald-400 font-bold">help</span> to list commands.
          </div>

          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span>➜</span>
                <span className="text-cyan-400">~</span>
                <span className="text-slate-100">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}

          {/* Prompt Input Line */}
          <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-emerald-400 font-bold">➜</span>
            <span className="text-cyan-400 font-bold">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command..."
              className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs sm:text-sm focus:ring-0"
            />
            <button type="submit" className="text-slate-500 hover:text-emerald-400">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
};
