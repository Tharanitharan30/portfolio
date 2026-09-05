import React from 'react';
import Dock from './Dock';
import {
  Home,
  User,
  Cpu,
  Award,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Mail,
  Terminal
} from 'lucide-react';

export default function NavigationDock({ onOpenTerminal }) {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const items = [
    {
      icon: <Home size={20} />,
      label: 'Home',
      onClick: () => scrollToSection('hero')
    },
    {
      icon: <User size={20} />,
      label: 'About',
      onClick: () => scrollToSection('about')
    },
    {
      icon: <Cpu size={20} />,
      label: 'Skills',
      onClick: () => scrollToSection('skills')
    },
    {
      icon: <Award size={20} />,
      label: 'Certificates',
      onClick: () => scrollToSection('certificates')
    },
    {
      icon: <FolderGit2 size={20} />,
      label: 'Projects',
      onClick: () => scrollToSection('projects')
    },
    {
      icon: <Briefcase size={20} />,
      label: 'Experience',
      onClick: () => scrollToSection('experience')
    },
    {
      icon: <GraduationCap size={20} />,
      label: 'Education',
      onClick: () => scrollToSection('education')
    },
    {
      icon: <Mail size={20} />,
      label: 'Contact',
      onClick: () => scrollToSection('contact')
    },
    {
      icon: <Terminal size={20} className="text-emerald-400" />,
      label: 'Terminal',
      onClick: onOpenTerminal,
      className: 'border-emerald-500/40 bg-emerald-950/30'
    }
  ];

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-auto">
      <Dock
        items={items}
        panelHeight={64}
        baseItemSize={44}
        magnification={60}
        distance={140}
      />
    </div>
  );
}
