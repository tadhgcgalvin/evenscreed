# Adding your photos

Drop your images into this `images/` folder, then update `index.html`:

## Gallery (6 photos)
Each gallery slot in the "Recent Screeding Projects" section is currently a
placeholder `<div class="gallery-item placeholder">`. Replace each one with:

```html
<div class="gallery-item">
  <img src="images/gallery-1.jpg" alt="Liquid screed installation in Cork kitchen extension" loading="lazy">
</div>
```

Repeat for `gallery-2.jpg` through `gallery-6.jpg`. Use descriptive,
keyword-rich file names and `alt` text (e.g. "underfloor heating screed
overlay Limerick new build") — this helps Google Images and local SEO.

## Social preview image
Add a 1200x630px image named `og-cover.jpg` — this is what shows up when the
site is shared on WhatsApp, Facebook, LinkedIn, etc.

## Favicon
Add a small square logo/icon named `favicon.png` (e.g. 512x512px).

## Tips
- Compress photos before adding them (e.g. squoosh.app) — large images will
  slow the site down, which hurts both SEO and user experience.
- Keep individual images under ~300KB where possible.
