# EvenScreed website

Static site for EvenScreed (liquid screed, underfloor heating screed overlays
and floor levelling across Munster, Ireland). Plain HTML/CSS/JS — no build
step, so it's ready to host directly on GitHub Pages.

## Before going live — replace placeholders

Search the project for `[YOUR PHONE NUMBER]` and `[YOUR EMAIL ADDRESS]` and
replace every instance (they appear in `index.html` in the hero, contact
section, footer, structured data block, and in `js/main.js`).

```bash
grep -rn "\[YOUR PHONE NUMBER\]\|\[YOUR EMAIL ADDRESS\]" .
```

Also update:
- The placeholder domain `evenscreed.ie` in `index.html`, `robots.txt` and
  `sitemap.xml` once you know your real domain (or your `github.io` URL).
- Add real photos — see [`images/README.md`](images/README.md).
- The "Why EvenScreed" stats/claims are generic placeholders — swap in real
  detail (years trading, insurance provider, certifications, etc.) once you
  confirm them.

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

## Contact form note

GitHub Pages only serves static files — there's no server to receive form
submissions. The current form opens the visitor's email client with the
enquiry pre-filled (see `js/main.js`). For a proper inbox-delivered form with
spam filtering, sign up for a free plan on a form backend service and point
the `<form>` action at it — search for one that suits (e.g. a form-to-email
API), then follow their embed instructions in place of the current mailto
script.

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
