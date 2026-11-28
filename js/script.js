/* =====================================================================
   script.js — ONE shared script for every page of the Huwa site.
   WHAT IT IS:   all the site-wide interactivity in one file.
   WHAT IT DOES: runs the mobile menu, a scroll progress bar, a shrink-on-
                 scroll header, a back-to-top button, and scroll-reveal
                 animations.
   WHAT IT MEANS: putting it here means every page gets the same behaviour
                 from one file, and I only maintain it in one place.
   ===================================================================== */

/* ---------------------------------------------------------------------
   0) REDUCED MOTION CHECK
   WHAT IT IS:   a test of the visitor's motion preference.
   WHAT IT DOES: reads the OS "reduce motion" setting.
   WHAT IT MEANS: if someone asked their system for less motion, I skip the
                 animations so the site does not make them dizzy (accessibility).
   --------------------------------------------------------------------- */
var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------------------------------------------------------------
   1) MOBILE NAVIGATION HAMBURGER
   WHAT IT DOES: opens/closes the nav; closes on link tap or Escape.
   WHAT IT MEANS: aria-expanded always tells a screen reader the real state.
   --------------------------------------------------------------------- */
var navToggle = document.getElementById('navToggle');
var primaryNav = document.getElementById('primaryNav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', function () {
    var isOpen = primaryNav.classList.toggle('nav--open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close when a link is tapped.
  primaryNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      primaryNav.classList.remove('nav--open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when Escape is pressed (a second close path for keyboard users).
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      primaryNav.classList.remove('nav--open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ---------------------------------------------------------------------
   2) SCROLL PROGRESS BAR (new site-wide feature)
   WHAT IT IS:   a thin bar across the top that fills as you scroll.
   WHAT IT DOES: its width grows from 0% to 100% as the page scrolls down.
   WHAT IT MEANS: it gives the reader a sense of how far through the page
                 they are — a small, polished touch.
   --------------------------------------------------------------------- */
var progress = document.createElement('div');
progress.id = 'scroll-progress';
document.body.appendChild(progress);

/* ---------------------------------------------------------------------
   3) BACK-TO-TOP BUTTON (new site-wide feature)
   WHAT IT IS:   a round button that appears after you scroll down.
   WHAT IT DOES: clicking it jumps the page back to the top.
   WHAT IT MEANS: on long pages it saves the visitor scrolling all the way up.
   --------------------------------------------------------------------- */
var toTop = document.createElement('button');
toTop.id = 'back-to-top';
toTop.setAttribute('aria-label', 'Back to top');
toTop.innerHTML = '&uarr;';
document.body.appendChild(toTop);

toTop.addEventListener('click', function () {
  // Honour reduced-motion: jump instantly instead of smooth-scrolling.
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});

/* ---------------------------------------------------------------------
   4) ONE SCROLL HANDLER for the progress bar, header shrink and button.
   WHAT IT DOES: on every scroll it updates the bar width, adds/removes the
                 header "shrunk" class, and shows/hides the back-to-top button.
   WHAT IT MEANS: doing all three in one listener keeps scrolling smooth.
   --------------------------------------------------------------------- */
var header = document.querySelector('.site-header');

function onScroll() {
  var scrollTop = window.scrollY;
  var docHeight = document.documentElement.scrollHeight - window.innerHeight;
  var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  progress.style.width = pct + '%';                 // fill the progress bar

  if (header) header.classList.toggle('is-shrunk', scrollTop > 40); // shrink header
  toTop.classList.toggle('show', scrollTop > 400);  // reveal the button lower down
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // set the correct state on first load

/* ---------------------------------------------------------------------
   5) SCROLL-REVEAL ANIMATION
   WHAT IT IS:   a gentle fade-and-rise for blocks as they enter the screen.
   WHAT IT DOES: adds the .is-visible class the first time each element is
                 scrolled into view, which the CSS animates.
   WHAT IT MEANS: content eases in instead of popping, which feels intentional.
                 It is skipped entirely when the visitor prefers reduced motion.
   --------------------------------------------------------------------- */
var revealTargets = document.querySelectorAll(
  '.section, .hero, .page-hero, .cta, .card, .service, .value, .photo, .media__item'
);

if (reduceMotion || !('IntersectionObserver' in window)) {
  // No animation: just show everything right away.
  revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
} else {
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // reveal once, then stop watching
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(function (el) { observer.observe(el); });
}
