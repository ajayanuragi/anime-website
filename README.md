<p align="center">
  <img src="https://raw.githubusercontent.com/ajayos/anime-website/master/public/images/one-piece.jpeg" alt="Anime Website" width="600"/>
</p>

<h1 align="center">Anime Website</h1>

<p align="center">
  <strong>A modern, responsive single-page application for discovering and browsing anime series.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19"/>
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite" alt="Vite 6"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss" alt="Tailwind CSS v4"/>
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter" alt="React Router 7"/>
</p>

---

## Overview

Browse trending, popular, and recent anime, search for any series, and dive into detailed pages with trailers, recommendations, related anime, and episode lists — all powered by the [Consumet API](https://github.com/consumet/api.consumet.org) (AniList Meta provider).

## Features

- **Animated landing page** — gradient background with a clean entry point
- **Trending / Popular / Recent** — tabbed browsing with paginated grids
- **Live search** — debounced autocomplete dropdown (top 5 results) + full browse page
- **Anime detail pages** — cover art, metadata, YouTube trailer, recommendations, relations, and searchable episode list with pagination
- **Client-side caching** — localStorage with 1-hour expiry for trending, popular, and anime info

## Built With

| | |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite 6](https://vite.dev/) | Build tool & dev server |
| [React Router 7](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Axios](https://axios-http.com/) | HTTP client |
| [ESLint](https://eslint.org/) | Code linting |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ or [Bun](https://bun.sh/)

### Installation

```sh
git clone <repo-url>
cd anime-website
npm install    # or bun install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_ANIME_API=https://api.consumet.org
```

This points to a Consumet API-compatible instance. You can self-host one or use a public instance.

### Development

```sh
npm run dev    # or bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `dev` | Start the Vite dev server with HMR |
| `build` | Production build into `dist/` |
| `preview` | Preview the production build |
| `lint` | Run ESLint |

Run with `npm run <script>` or `bun run <script>`.

## Project Structure

```
src/
├── api/              # Axios instance & API config
├── assets/           # Static assets
├── components/       # Reusable UI components
│   ├── anime-info/   # Detail page components + tabs
│   ├── browse/       # Search result cards
│   └── home-page/    # Navbar, cards, trending/popular/recent grids
├── layouts/          # Shared layout (navbar + outlet)
├── pages/            # Route-level page components
├── App.jsx           # Route definitions
├── main.jsx          # Entry point
└── index.css         # Tailwind import
```

## Deployment

```sh
npm run build    # or bun run build
```

Serve the `dist/` directory with any static server — Nginx, Vercel, Netlify, Cloudflare Pages, etc.
