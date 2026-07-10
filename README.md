# Eric Kim — Personal Portfolio

The source for [ericdwkim.io](https://ericdwkim.io) — a personal portfolio for Eric Kim, a
backend &amp; cloud engineer. Single-page site with an animated intro, experience timeline,
projects, skills, and an about section featuring photo and reading carousels.

## Features

- Responsive single-page layout with smooth scroll and active-section tracking
- Animated intro, section reveals, and a scroll cue (Framer Motion)
- Experience timeline with company logos and grouped roles per employer
- Projects with repository and live-site links
- Skills grid with technology icons and a GitHub contributions calendar
- About section with a **hobbies photo carousel** and a **"currently reading" book carousel**
- Contact form backed by a server action (Resend + React Email)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** react-icons
- **Email:** Resend + React Email
- **Deploy:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Pages hot-reload as you edit.

To send email from the contact form locally, set `RESEND_API_KEY` in `.env`.

## Project Structure

```
app/          App Router entry — layout, page, global styles
components/    UI components (intro, about, experience, projects, skills,
              contact, carousel, header, theme-switch, ...)
context/       Theme and active-section providers
lib/data.ts    Site content — links, projects, experiences, skills,
              currently-reading books, and hobbies
actions/       Server actions (sendEmail)
public/        Static assets — logos, book covers, hobby photos, resume
```

## Editing Content

Most content lives in **`lib/data.ts`** — update projects, experiences, skills, the
currently-reading list, and hobby photos there. Images referenced by that file live under
`public/` (`public/logos`, `public/books`, `public/hobbies`).

## Deploy

Deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a production deploy.

## Acknowledgments

This project began as a fork of [github.com/mikestarrdev](https://github.com/mikestarrdev)'s
portfolio, which provided the original foundation. It has since been substantially customized —
content, styling, components, and features.

---

## Roadmap

- [ ] Revisit the light/dark theme toggle (currently disabled)
