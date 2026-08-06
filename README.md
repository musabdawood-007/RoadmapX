# RoadmapX

Interactive, hand-authored career roadmaps for 64+ tech and non-tech roles. Tools, frameworks, and skills — in the order you actually need them.

**Live Demo:** [roadmapx-rosy.vercel.app](https://roadmapx.vercel.app)

## Features

- **64+ Career Roadmaps** — from Web Developer to Veterinary Medicine
- **Interactive Steps** — click to expand, track progress, mark complete
- **Dark Mode** — beautiful dark-first design with smooth theme toggle
- **Responsive** — works on desktop, tablet, and mobile
- **Categorized** — filter by Development, Design, Data Science, Engineering, Healthcare, Business, and more
- **Difficulty Levels** — Beginner, Intermediate, Advanced, and Expert routes
- **No AI, No Backend** — all content is hand-authored and static

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | App Router, static generation, routing |
| React 19 | UI components and state management |
| Tailwind CSS v4 | Utility-first styling via CSS custom properties |
| Framer Motion | Animations and page transitions |
| ReactFlow | Interactive roadmap visualization |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
roadmapx/
├── app/
│   ├── components/       # Reusable UI components (Navbar)
│   ├── roadmap/[id]/     # Dynamic roadmap detail pages
│   ├── roadmaps/         # Browse/search page
│   ├── globals.css       # Global styles, animations, theme
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Landing page
│   └── theme-provider.tsx
├── roadmaps/             # 64+ roadmap data files (TypeScript)
├── types/                # TypeScript interfaces
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Roadmap Categories

| Category | Examples |
|---|---|
| Development | Frontend, Backend, Full-Stack, Mobile, DevOps |
| Data & AI | Data Scientist, ML Engineer, NLP, Biostatistician |
| Design | UX Designer, UX Researcher, Brand Designer, Game Artist |
| Engineering | Mechanical, Electrical, Aerospace, Civil, Robotics |
| Cybersecurity | Security Analyst, Architect, DevSecOps |
| Healthcare | Clinical Data, Health Informatics, Dietitian |
| Business | Product Manager, Marketing, Sales Engineer |

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

```bash
npx vercel
```

Or push to GitHub and connect your repository on Vercel for automatic deployments.

## Author

**Musab Projects** — [musab-projects.vercel.app](https://musab-projects.vercel.app)

## License

MIT
