import React from "react";

const skillRows = [
  [
    "html",
    "css",
    "javascript",
    "typescript",
    "react",
    "next.js",
    "flutter",
    "tailwind css",
    "react native",
    "vite",
  ],

  [
    "bootstrap",
    "node.js",
    "express.js",
    "nestjs",
    "django",
    "mongodb",
    "mysql",
    "sqlite",
  ],

  [
    "python",
    "java",
    "c",
    "dart",
    "numpy",
    "pandas",
  ],

  [
    "opencv",
    "matplotlib",
    "git",
    "github",
  ],

  [
    "gitlab",
    "vs code",
    "figma",
  ],

  [
    "npm",
  ],
];

const skillIcons = {
  react: "https://skillicons.dev/icons?i=react",
  "react native": "https://skillicons.dev/icons?i=react",
  "next.js": "https://skillicons.dev/icons?i=nextjs",
  flutter: "https://skillicons.dev/icons?i=flutter",
  "tailwind css": "https://skillicons.dev/icons?i=tailwind",
  vite: "https://skillicons.dev/icons?i=vite",
  html: "https://skillicons.dev/icons?i=html",
  css: "https://skillicons.dev/icons?i=css",
  bootstrap: "https://skillicons.dev/icons?i=bootstrap",
  javascript: "https://skillicons.dev/icons?i=js",
  typescript: "https://skillicons.dev/icons?i=ts",
  python: "https://skillicons.dev/icons?i=python",
  dart: "https://skillicons.dev/icons?i=dart",
  c: "https://skillicons.dev/icons?i=c",
  java: "https://skillicons.dev/icons?i=java",
  "node.js": "https://skillicons.dev/icons?i=nodejs",
  "express.js": "https://skillicons.dev/icons?i=express",
  django: "https://skillicons.dev/icons?i=django",
  nestjs: "https://skillicons.dev/icons?i=nestjs",
  mongodb: "https://skillicons.dev/icons?i=mongodb",
  mysql: "https://skillicons.dev/icons?i=mysql",
  sqlite: "https://skillicons.dev/icons?i=sqlite",
  numpy:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  pandas:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  opencv: "https://skillicons.dev/icons?i=opencv",
  matplotlib:
    "https://go-skill-icons.vercel.app/api/icons?i=matplotlib",
  git: "https://skillicons.dev/icons?i=git",
  github: "https://skillicons.dev/icons?i=github",
  gitlab: "https://skillicons.dev/icons?i=gitlab",
  "vs code": "https://skillicons.dev/icons?i=vscode",
  figma: "https://skillicons.dev/icons?i=figma",
  npm: "https://skillicons.dev/icons?i=npm",
};

export default function Skills() {
  return (
    <section className="min-h-screen px-6 py-24 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex items-center w-full mb-16">
          <span className="font-mono text-cyan-400 text-sm mr-4">
            02.
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
            Skills
          </h2>

          <div className="flex-1 h-px bg-slate-700 ml-6" />
        </div>

        {/* Skills Grid */}
        <div className="flex flex-col gap-8">
          {skillRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-6"
            >
              {row.map((skill) => (
                <div
                  key={skill}
                  className="group transition-all duration-300 hover:-translate-y-2"
                >
                  <img
                    src={skillIcons[skill]}
                    alt={skill}
                    title={skill}
                    className="w-18 h-18 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}