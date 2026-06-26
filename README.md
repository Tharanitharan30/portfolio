# Tharanitharan S — Portfolio

Personal portfolio for **Full Stack Developer | ML Engineer** — built with React, Vite, and Tailwind CSS. Features animated loading screen, interactive particles, hackathon certificates, projects, experience, and a contact form.

[![GitHub](https://img.shields.io/badge/GitHub-Tharanitharan30-22D3EE?style=for-the-badge&logo=github)](https://github.com/Tharanitharan30)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-tharanitharan--s-22D3EE?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/tharanitharan-s/)
[![Email](https://img.shields.io/badge/Email-tharanitharan3011@gmail.com-22D3EE?style=for-the-badge&logo=gmail)](mailto:tharanitharan3011@gmail.com)

## Tech Stack

Same icon rows as the desktop Skills section in `Skills.jsx`.

![Frontend](https://skillicons.dev/icons?i=html,css,js,ts,react,nextjs,flutter,tailwind,react,vite&perline=10)

![Backend & Database](https://skillicons.dev/icons?i=bootstrap,nodejs,express,nestjs,django,mongodb,mysql,sqlite&perline=8)

![Languages](https://skillicons.dev/icons?i=python,java,c,dart&perline=4)
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" width="48" height="48" alt="NumPy" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" width="48" height="48" alt="Pandas" />

![ML & Version Control](https://skillicons.dev/icons?i=opencv,git,github&perline=3)
<img src="https://go-skill-icons.vercel.app/api/icons?i=matplotlib" width="48" height="48" alt="Matplotlib" />

![Tools](https://skillicons.dev/icons?i=gitlab,vscode,figma,npm&perline=4)

## Featured Projects

| Project | Stack | Description |
|---------|-------|-------------|
| **AquaSense** | React Native, Django, ML | Smart water quality monitoring with real-time alerts |
| **TaxPal** | React, Express.js, MongoDB | Tax calculator and expense tracking |
| **Brain Tumor Classifier** | Python, EfficientNet-B4, TensorFlow, OpenCV | MRI classification with GradCAM visualization |
| **Weather App** | React, Vite, OpenWeatherMap | Geolocation weather with dynamic UI |
| **Movie Recommendation System** | React, Django, DRF, scikit-learn, PostgreSQL | AI-powered movie discovery with TMDB API |

## Getting Started

```bash
npm install
npm run dev        # development server
npm run build      # production build
npm run preview    # preview production build
npm run lint       # ESLint
```

## Project Structure

```
src/
├── data/
│   └── portfolioData.js       ← Personal data, skills, projects, experience
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx             ← Desktop skill icon rows (skillicons.dev)
│   ├── Certificates.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── LoadingScreen.jsx
│   ├── InteractiveParticles.jsx
│   ├── MatrixBackground.jsx
│   └── BrandIcons.jsx
├── hooks/
│   └── useScrollReveal.js
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

All portfolio content lives in **`src/data/portfolioData.js`** — edit name, bio, skills, hackathon certificates, projects, experience, and education there. Skill icon rows in **`src/components/Skills.jsx`** use [skillicons.dev](https://skillicons.dev) URLs; add or map new skills in the `skillIcons` object.

## Deployment

**Vercel:** Connect the repo or run `vercel --prod`  
**Netlify:** Deploy the `dist/` folder or connect the repo. The `_redirects` file handles SPA routing.

## Theme

- Accent color: `#22D3EE` — change in `tailwind.config.js` under `colors.accent`
- Dark theme with cyan accents
- Fonts: JetBrains Mono + DM Sans + Space Grotesk (Google Fonts)
- Loading screen (~3s) with animated intro

## Contact Form

The form uses a simulated delay. To connect a real backend, replace the `setTimeout` in `Contact.jsx` with [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com).
