# Huwa — A Nubian Cultural Channel

A five-page capstone website for **Huwa**, a cultural content channel that shares
the heritage of Nubia — its language, food, music, and traditions — through short
videos and simple lessons.

## Live site
- **Live URL:** https://aam73116-sys.github.io/Mohamed_capstone1/
- **Repository:** https://github.com/aam73116-sys/Mohamed_capstone1

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
> *(This is a draft — please rewrite it in your own words before submitting.)*

- **Strongest part:** I'm proudest of how consistent the whole site feels. Every page
  shares one header, footer, palette, and logo, so it reads as one real project rather
  than five separate exercises.
- **What I learned about responsive design and interactivity:** I learned to build
  mobile-first and let CSS Grid's `auto-fit` + `minmax` handle most of the responsiveness
  without lots of media queries, and that small interactions (a hamburger, a progress bar,
  scroll reveals) make a static site feel alive when they're used with restraint.
- **Feedback that changed my approach the most:** paying closer attention to accessibility —
  writing `alt` text that actually describes each image, pairing a label with every form
  field, and respecting reduced-motion — changed how I think about "finished."
- **If I had another month:** I would replace the placeholder media with my own Nubian
  video and music, add real photography, and build out the About and Gallery pages further.

## Credits
- **Fonts:** Google Fonts — Playfair Display and Inter.
- **Form backend:** Formspree.
- **Images & logo:** all illustrations and the SVG logo are original (hand-made for this project).
- **Sample video:** "Big Buck Bunny" (Blender Foundation, Creative Commons) — placeholder.
- **Sample audio:** SoundHelix instrumental sample (free to use) — placeholder.
