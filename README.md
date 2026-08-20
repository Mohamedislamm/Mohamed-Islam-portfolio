# Mohamed Islam Khaled — Portfolio & Interactive Engineering Lab

A modern, high-performance developer portfolio and interactive engineering sandbox built with React 19, TypeScript, Tailwind CSS, and Framer Motion. Engineered and structured with Google AI Studio.
Check it out 
https://mohamedislamm.github.io/Mohamed-Islam-portfolio/
---

## Overview

This application serves as both a portfolio and an interactive technical showcase for Mohamed Islam Khaled (AI/ML Engineer & Frontend Developer). Rather than displaying static project screenshots, the web app integrates live browser-based simulations of autonomous AI agent loops, genetic algorithm heuristics, full-stack REST/CLI data synchronization, and RAG deduplication pipelines.

---

## Core Features

- **Interactive Engineering Lab**:
  - **Notive Computer-Use Agent**: Step-by-step perception and action execution simulator modeled after Claude 3.5 Sonnet's Computer Use API.
  - **Google ADK Agent**: Multi-target runner simulator (`adk run`, `adk web`, `adk api_server`) evaluating prompts with Gemini 2.5 Flash.
  - **Tetris AI Heuristic Simulator**: Real-time genetic algorithm evaluator tuning height, hole, and bumpiness penalty weights.
  - **Full-Stack Task Tracker & CLI**: Live sync interface toggling between interactive React UI state and simulated `python cli.py` terminal output.
  - **ReadIT Library System**: Role-based access control (RBAC) simulator toggle between Readers and Publishers.
  - **DBSCAN & RAG Pipeline**: Spatial clustering and vector similarity parameter tuning for enterprise deduplication.
- **Dynamic Search & Filtering**: Instant keyword search and category filtering across projects and technical stack skills.
- **Curriculum Vitae Viewer**:
  - In-browser clean modal rendering ATS-ready CV data.
  - One-click plain text copying, Markdown download, and formatted print/PDF generation.
- **Recruiter Fast-Scan Mode**: Executive summary callout toggle for rapid qualification evaluation.
- **Contact Dispatch**: Validated inquiry form and one-click email copy functionality.

---

## Tech Stack & Architecture

- **Frontend Core**: React 19, TypeScript, Vite
- **Styling & Layout**: Tailwind CSS, JetBrains Mono & Plus Jakarta Sans typography
- **Motion & Interactions**: Framer Motion
- **Icons**: Lucide React
- **Built With**: Google AI Studio

---

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx        # Profile overview, principles, and language proficiencies
│   │   ├── ContactSection.tsx      # Direct inquiry form and social channels
│   │   ├── ExperienceTimeline.tsx  # Work history, education, and credentials
│   │   ├── Footer.tsx              # Minimal bottom bar and status indicators
│   │   ├── HeroSection.tsx          # Introduction, CTA actions, and recruiter mode
│   │   ├── Navbar.tsx              # Responsive top navigation and CV launcher
│   │   ├── ProjectModal.tsx        # Deep-dive architecture and code snippet modal
│   │   ├── ResumeModal.tsx         # ATS-ready CV viewer with print and export
│   │   ├── ScrollProgress.tsx      # Top viewport reading indicator
│   │   ├── ShowcaseLibrary.tsx     # Project grid and 6 interactive lab simulators
│   │   └── SkillsSection.tsx       # Searchable technical skills and tool matrix
│   ├── data/
│   │   └── portfolioData.ts        # Centralized typed data source for candidate info & projects
│   ├── types.ts                    # TypeScript interfaces and data contracts
│   ├── App.tsx                     # Root application container & modal coordinator
│   ├── index.css                   # Global styles and Tailwind imports
│   └── main.tsx                    # React application entry point
├── index.html                      # Page metadata, fonts, and OpenGraph tags
├── package.json                    # Project scripts and dependencies
├── tsconfig.json                   # TypeScript compiler configuration
└── vite.config.ts                  # Vite build configuration
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mohamedislamm/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build & Deployment

To create an optimized production bundle:

```bash
npm run build
```

The output will be placed in the `dist/` directory, ready to be hosted on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

---

## License

MIT License. Designed and developed by Mohamed Islam Khaled. Built with Google AI Studio.
