# EvenScreed website

Static site for EvenScreed (liquid screed, underfloor heating screed overlays
and floor levelling across Munster, Ireland). Plain HTML/CSS/JS — no build
step, so it's ready to host directly on GitHub Pages.

## Still to confirm

- The "Why EvenScreed" stats/claims are generic placeholders — swap in real
  detail (years trading, insurance provider, certifications, etc.) once you
  confirm them.
- `evenscreed.ie` is used throughout for canonical/SEO tags — connect the
  real domain (see below) or point these back at the `github.io` URL if you
  don't end up registering it.

## Publish on GitHub Pages (free)

1. Create a new **public** repo on GitHub, e.g. `evenscreed-website`.
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial EvenScreed website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/evenscreed-website.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages** → Source: `main` branch, `/ (root)` folder → Save.
4. Your site will be live at `https://<your-username>.github.io/evenscreed-website/`
   within a minute or two.

### Optional: custom domain (recommended for SEO/credibility)
1. Buy a domain (e.g. `evenscreed.ie` via a registrar like Blacknight or
   LetsHost, or `.com`/`.co.uk` via Namecheap/GoDaddy).
2. In your domain's DNS settings, add a `CNAME` record pointing to
   `<your-username>.github.io`.
3. In GitHub → Settings → Pages → Custom domain, enter your domain and save.
   GitHub will create a `CNAME` file in the repo automatically and can
   provision a free HTTPS certificate for you (enable "Enforce HTTPS").
4. Update `index.html`, `robots.txt` and `sitemap.xml` to use the real domain.

## Local SEO checklist (already built in)

- [x] Unique `<title>` and meta description with target keywords + region
- [x] `LocalBusiness` (`HomeAndConstructionBusiness`) JSON-LD structured data
      with `areaServed` for all 6 Munster counties
- [x] Single H1, clear H2/H3 hierarchy
- [x] Dedicated "Areas We Cover" section naming towns per county
- [x] FAQ section (good for Google featured snippets)
- [x] `robots.txt` + `sitemap.xml`
- [x] Mobile-responsive layout
- [ ] **Register a Google Business Profile** for EvenScreed once you have a
      real address/phone — this matters as much as the website for local
      "screeding near me" searches.
- [ ] Add real customer reviews/testimonials once available.
- [ ] Get listed on Irish trade directories (e.g. relevant trade
      associations, Golden Pages) linking back to the site.
