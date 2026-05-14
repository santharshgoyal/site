# Personal Website — les archives de harsh:

## Problem Statement
Build a personal website landing page (matching user's mockup screenshot) with subsequent blog functionality. Pure static frontend, dark minimalist monospace aesthetic.

## User Choices
- Functional nav links → placeholder pages for each section
- Keep design exactly like screenshot + subtle motion
- Contact = mailto link

## Architecture
- Frontend-only React app (no backend usage yet); FastAPI/MongoDB available but unused
- Routes: `/`, `/blog`, `/blog/:slug`, `/artworks`, `/random-thoughts`, `/links`
- Shared `BlogSidebar` for blog area; `PlaceholderPage` for upcoming sections

## Implemented (Dec 2025)
- Landing page: "les archives de harsh:" with bottom nav (blog, artworks, random thoughts, contact me)
- Subtle CSS entrance animations (fade + slide); hover underline reveal on nav links
- Blog Archives (`/blog`): category tabs (All/Law/Economics/Random), Sort By dropdown (Latest/Oldest), 8 sample posts
- Blog Post (`/blog/:slug`): underlined title, right-aligned date, lorem body, signature block (Sant Harsh Goyal, Follow on X, Email)
- Placeholder pages: Artworks, Random Thoughts, Links (back link to home)
- JetBrains Mono font; #0a0a0a background; #e8e8e8 text
- Programmatic navigation via `useNavigate` for reliable routing in preview env

## Backlog (P1/P2)
- P1: Real artworks/paintings gallery page
- P1: Real random-thoughts feed
- P2: MDX/markdown blog content instead of lorem
- P2: RSS feed, search, dark/light toggle
- P2: Replace mailto with real address; X handle
