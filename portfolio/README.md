# Hemant Patidar — Portfolio

Premium personal portfolio website for **Hemant Patidar**, Java Full Stack Developer.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** — animations & scroll effects
- **GSAP** — available for advanced animations
- **EmailJS** — contact form (optional)
- **Lucide React** + **React Icons**

## Getting Started

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production URL for SEO/canonical |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID (optional) |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID (optional) |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key (optional) |

Without EmailJS, the contact form opens the user's email client via `mailto:`.

## Build & Deploy

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push the `portfolio` folder to a GitHub repository
2. Import the repo at [vercel.com](https://vercel.com)
3. Set root directory to `portfolio` (if monorepo)
4. Add environment variables from `.env.example`
5. Deploy

## Project Structure

```
portfolio/
├── public/
│   ├── Hemant_Patidar_Resume.pdf
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── layout.tsx      # SEO, fonts, schema markup
│   │   ├── page.tsx        # Main page
│   │   ├── not-found.tsx   # 404 page
│   │   └── globals.css     # Theme & utilities
│   ├── components/
│   │   ├── effects/        # Background, mouse glow
│   │   ├── layout/         # Navbar, footer, loading
│   │   ├── sections/       # All page sections
│   │   └── ui/             # Reusable UI components
│   └── data/
│       └── portfolio.ts    # Resume content (source of truth)
└── package.json
```

## Maintenance

- **Content updates**: Edit `src/data/portfolio.ts`
- **Resume**: Replace `public/Hemant_Patidar_Resume.pdf`
- **SEO**: Update `src/app/layout.tsx` metadata and `public/sitemap.xml`
- **Styling**: Theme colors in `src/app/globals.css`

## License

Private — © Hemant Patidar
