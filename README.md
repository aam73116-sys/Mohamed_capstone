# Huwa — A Nubian Cultural Channel

A five-page capstone website for **Huwa**, a cultural content channel that shares
the heritage of Nubia — its language, food, music, and traditions — through short
videos and simple lessons.

## Live site
- **Live URL:** https://aam73116-sys.github.io/Mohamed_capstone/
- **Repository:** https://github.com/aam73116-sys/Mohamed_capstone

## Pages
1. **Home** (`index.html`) — hero, feature cards, and a call to action.
2. **About** (`about.html`) — the project's story, a values grid, and a pull-quote.
3. **Content** (`services.html`) — a services grid plus a Tailwind membership section.
4. **Gallery** (`gallery.html`) — a photo gallery with an embedded video and audio sample.
5. **Contact** (`contact.html`) — a working Formspree contact form and contact details.

## Technologies used
- **HTML5** — semantic landmarks (`header`, `main`, `footer`, `figure`, `address`).
- **CSS3** — custom properties (design tokens), Flexbox, CSS Grid (`auto-fit` + `minmax`),
  fluid typography with `clamp()`, and media queries (mobile-first).
- **JavaScript (vanilla)** — mobile navigation, scroll progress bar, shrink-on-scroll
  header, back-to-top button, and scroll-reveal animations.
- **Tailwind CSS (Play CDN)** — the membership pricing section only.
- **Formspree** — the contact form backend (no server code, no exposed email).
- **SVG** — a hand-written logo and all gallery illustrations.
- **Google Fonts** — Playfair Display (headings) and Inter (body).

## Features
- Responsive at 375px, 768px, and 1280px — no horizontal scrolling.
- Consistent design system: one shared stylesheet, one palette, one logo, same header
  and footer on every page.
- Sticky site header that **shrinks on scroll**, with a mobile hamburger menu that closes
  on link-tap and on the **Escape** key.
- Hand-drawn SVG logo (a Nubian domed house beneath the sun).
- CSS Grid photo gallery with captions and `object-fit: cover`.
- Embedded `<video>` and `<audio>` with controls, fallbacks, and transcript links (no autoplay).
- Tailwind-only three-tier membership pricing section.
- Working contact form with browser validation (`required`, `type="email"`, `minlength`)
  and a thank-you redirect.
- **Site-wide extras:** a scroll **progress bar**, a **back-to-top** button, and gentle
  **scroll-reveal** animations.
- Accessibility: meaningful `alt` text, paired form labels, visible keyboard focus
  (`:focus-visible`), 4.5:1+ contrast, and full **reduced-motion** support.

## Reflection
- **Strongest part:** The strongest part of my site is its consistent look. Every page uses
  the same header, footer, color palette, and logo, so the whole thing feels like one real,
  finished site instead of five separate pages.
- **What I learned about responsive design and interactivity:** The biggest thing I learned
  was CSS Grid. Using Grid (with `auto-fit` and `minmax`) let me build layouts that adjust
  on their own from phone to desktop, which made responsive design much easier than I
  expected.
- **Feedback that changed my approach the most:** The feedback about color contrast changed
  my approach the most. Making sure my text has enough contrast against the background so it
  is easy to read changed how I choose colors now.
- **If I had another month:** If I had another month, I would add new, real photos and videos —
  especially my own Nubian footage — to replace the placeholder media and make the site feel
  more personal.

## Credits
- **Fonts:** Google Fonts — Playfair Display and Inter.
- **Form backend:** Formspree.
- **Images & logo:** all illustrations and the SVG logo are original (hand-made for this project).
- **Sample video:** "Big Buck Bunny" (Blender Foundation, Creative Commons) — placeholder.
- **Sample audio:** SoundHelix instrumental sample (free to use) — placeholder.
