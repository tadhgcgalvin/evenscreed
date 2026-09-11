# Adding your photos

Drop your images into this `images/` folder, then update `index.html`:

## Gallery
The "Recent Screeding Projects" section (`#gallery-carousel`) is currently an
empty placeholder (`.gallery-empty`) — no photos are wired in. To add photos
back in, replace it with a `.gallery-carousel-track` of
`.gallery-carousel-slide` divs (one `<img>` each, first one gets `class="active"`),
plus `#gallery-prev`/`#gallery-next` arrow buttons, a `#gallery-counter-current`/
`#gallery-counter-total` counter, and an empty `#gallery-dots` div (the JS in
`js/main.js` auto-generates the dot buttons). See the git history for the
exact markup used previously if useful as a reference.

The hero carousel (`#hero-carousel`) works the same way with `.hero-slide`
divs using inline `background-image` styles — it's also currently empty.

Use descriptive, keyword-rich file names and `alt` text (e.g. "underfloor
heating screed overlay Limerick new build") — this helps Google Images and
local SEO.

## Social preview image
Add a 1200x630px image named `og-cover.jpg` — this is what shows up when the
site is shared on WhatsApp, Facebook, LinkedIn, etc.

## Favicon
Add a small square logo/icon named `favicon.png` (e.g. 512x512px).

## Tips
- Compress photos before adding them (e.g. squoosh.app) — large images will
  slow the site down, which hurts both SEO and user experience.
- Keep individual images under ~300KB where possible.
