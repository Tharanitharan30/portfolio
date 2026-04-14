# Tharanitharan S — Portfolio

A production-ready React portfolio built with **Vite + Tailwind CSS**.

## 🚀 Getting Started

```bash
npm install
npm run dev        # development server
npm run build      # production build
npm run preview    # preview production build
```

## 📁 Project Structure

```
src/
├── data/
│   └── portfolioData.js     ← All personal data lives here
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   └── useScrollReveal.js
├── App.jsx
├── main.jsx
└── index.css
```

## ✏️ Customization

All portfolio content is in **`src/data/portfolioData.js`** — edit your name, bio, projects, skills, experience, and education there. No other files need to change for content updates.

## 🌐 Deployment

**Vercel:** `vercel --prod`  
**Netlify:** Drag & drop the `dist/` folder, or connect the repo. The `_redirects` file handles SPA routing.

## 🎨 Theme

- Accent color: `#22D3EE` — change in `tailwind.config.js` under `colors.accent`
- Dark/light toggle built in
- Fonts: JetBrains Mono + DM Sans + Space Grotesk (Google Fonts)

## 📬 Contact Form

The form is wired with a simulated delay. To make it real, replace the `setTimeout` in `Contact.jsx` with a [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com) call.
