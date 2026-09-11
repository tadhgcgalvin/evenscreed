# EvenScreed website

Static site for EvenScreed (liquid screed, underfloor heating screed overlays
and floor levelling across Munster, Ireland). Plain HTML/CSS/JS — no build
step, so it's ready to host directly on GitHub Pages.

## Still to confirm

- The "Why EvenScreed" stats/claims are generic placeholders — swap in real
  detail (years trading, insurance provider, certifications, etc.) once you
  confirm them.

## Publish on GitHub Pages (free)

Already live at [evenscreed.com](https://evenscreed.com) (repo:
[github.com/tadhgcgalvin/evenscreed](https://github.com/tadhgcgalvin/evenscreed)),
hosted via GitHub Pages with `evenscreed.com` as the custom domain
(see the `CNAME` file in this repo).

### Custom domain DNS (Squarespace Domains)
In the Squarespace Domains DNS settings for `evenscreed.com`:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | tadhgcgalvin.github.io |

Then in GitHub → Settings → Pages → Custom domain, confirm it shows
`evenscreed.com` and tick **Enforce HTTPS** once GitHub finishes verifying
DNS (can take a few hours to propagate).

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
