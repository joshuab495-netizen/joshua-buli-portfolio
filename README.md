# Joshua C. Buli — Portfolio

Personal portfolio site for Joshua C. Buli, Software Developer / .NET Developer. Built with React 18, Vite, Tailwind CSS, and Framer Motion.

**🔗 Live site: [joshua-buli-portfolio.vercel.app](https://joshua-buli-portfolio.vercel.app)**

## About

Single-page portfolio covering professional summary, work experience, automation/reporting highlights, AI-assisted development workflow, technical skills, education, and contact details.

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

`npm run build` outputs a static production build to `dist/`. `npm run preview` serves that build locally so you can verify it before deploying.

## Project Structure

```
src/
  components/   UI components, one per section (Navbar, Hero, About, Experience, ...)
  data/         Content as plain JS objects/arrays — edit these to update site copy
  hooks/        Small reusable hooks (scroll-spy, mobile breakpoint detection)
```

All page content (experience, skills, education, contact info) lives in `src/data/`, so copy can be edited without touching component code.

## Deployment (Vercel)

This is a static Vite app with no client-side routing (all navigation is same-page anchor links), so no `vercel.json` or custom rewrites are required.

The live site above is deployed on Vercel. To connect automatic deploys on every push:

1. In the [Vercel dashboard](https://vercel.com/dashboard), open the `joshua-buli-portfolio` project.
2. Go to **Settings → Git** and connect this GitHub repository.
3. From then on, every push to `main` triggers a new production deployment automatically (build command `npm run build`, output directory `dist` — auto-detected).
