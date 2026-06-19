# jurrevriesen.nl

Personal blog of Jurre Vriesen, built with [Eleventy](https://www.11ty.dev/).
Posts are plain Markdown; one shared layout supplies all the HTML.

## Structure

```
.
├── .eleventy.js                  # Eleventy config (input/output, filters)
├── package.json
├── .github/workflows/deploy.yml  # Builds + deploys to GitHub Pages on push
└── src/
    ├── _data/site.json           # Site-wide values (name, links, avatar)
    ├── _includes/
    │   ├── base.njk              # The ONE HTML shell: head, header, footer
    │   └── post.njk              # Post wrapper: title, meta, tags, prev/next
    ├── index.njk                 # Home page + post list
    ├── css/style.css             # Styles (light + dark mode)
    ├── js/theme-init.js          # Sets theme before paint (no flash)
    ├── CNAME                     # Custom domain (jurrevriesen.nl)
    └── posts/
        ├── posts.json            # Shared front matter for every post
        └── *.md                  # One Markdown file per post — content only
```

All the boilerplate lives in `base.njk`. A post is just Markdown with a few
lines of front matter — no `<head>`, no header, no footer.

## Adding a new post

Create a new `.md` file in `src/posts/`:

```markdown
---
title: "My new post"
description: "A short summary for SEO and social cards."
date: 2026-01-15
readTime: "4 min read"
topics: [some, tags]
---

Write the post here in Markdown.
```

That's it. The URL (`/my-new-post/`), layout, header/footer, tag list, and
the newer/older navigation are all handled automatically. The home page list
updates itself too.

## Develop locally

```bash
npm install
npm run serve     # live preview at http://localhost:8080
npm run build     # one-off build into ./_site
```

## Deploy to GitHub Pages

This repo deploys automatically via GitHub Actions — no need to commit the
built site.

1. Push to the `main` branch of your repo (e.g. `jurruh/blog`):

   ```bash
   git init
   git add .
   git commit -m "Eleventy version of the blog"
   git branch -M main
   git remote add origin git@github.com:jurruh/blog.git
   git push -u origin main
   ```

2. In the repo: **Settings → Pages → Build and deployment**, set
   **Source = GitHub Actions**. The workflow in `.github/workflows/deploy.yml`
   then builds with Eleventy and publishes `_site` on every push to `main`.

3. Custom domain: the `src/CNAME` file sets `jurrevriesen.nl` (it's copied into
   the build output). At your DNS provider, point the domain at GitHub Pages:
   - Apex `jurrevriesen.nl` → A records `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - (optional) `www` → CNAME `jurruh.github.io`

   Then enable **Enforce HTTPS** once the certificate is issued. If you don't
   want a custom domain, delete `src/CNAME` and the line for it in
   `.eleventy.js`.
