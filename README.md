# Vinay Sharma — Personal Profile Site

Static site for GitHub Pages. Review locally first, then publish from your **personal** GitHub account (`Vinay08sharma`), not the work account (`vinay-suki`).

## Preview locally

```bash
cd github-pages
python3 -m http.server 8080
# open http://localhost:8080
```

Or just open `index.html` in a browser.

## Files to publish

```
github-pages/
  index.html
  styles.css
  script.js
  README.md   # optional on the live site
```

---

## Host on GitHub Pages (personal account)

### Option A — User site (recommended URL)

Live URL will be: `https://Vinay08sharma.github.io/`

1. Sign in to GitHub as **Vinay08sharma** (personal).
2. Create a **new public repo** named exactly:
   ```
   Vinay08sharma.github.io
   ```
3. On your machine (with personal account SSH/HTTPS auth):
   ```bash
   cd /Users/vinaykumarsharma/Desktop/vinay/career-profile/github-pages
   git init
   git add index.html styles.css script.js
   git commit -m "Add personal impact profile site"
   git branch -M main
   git remote add origin git@github.com:Vinay08sharma/Vinay08sharma.github.io.git
   git push -u origin main
   ```
4. Repo → **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: `main` / `/ (root)`
   - Save
5. Wait 1–2 minutes → open `https://Vinay08sharma.github.io/`

### Option B — Project site

Live URL will be: `https://Vinay08sharma.github.io/<repo-name>/`

1. Create any public repo, e.g. `profile` or `portfolio`.
2. Push the same three files to `main` **at the repo root** (or use `/docs`).
3. Settings → Pages → branch `main` / root.
4. Site URL becomes `https://Vinay08sharma.github.io/profile/`  
   If you use a subfolder deploy, set relative asset paths carefully (current CSS/JS already use `./`).

---

## Auth nuance (work vs personal)

| Account | Use for |
|---|---|
| `vinay-suki` / work SSO | Suki repos only |
| `Vinay08sharma` | This Pages site + public portfolio |

If `git push` hits the wrong account:

```bash
# check which account git is using for GitHub
gh auth status
# or use an SSH host alias / personal PAT for this repo only
```

For HTTPS with a personal PAT:

```bash
git remote set-url origin https://github.com/Vinay08sharma/Vinay08sharma.github.io.git
# when prompted, use personal username + PAT (not work credentials)
```

---

## After you review — suggested edits before go-live

- [ ] Confirm email, LinkedIn, GitHub links
- [ ] Soften or remove any company-internal phrasing you’re unsure about claiming publicly
- [ ] Pin Medium article URLs that still point at the Medium home listing
- [ ] Optional: add a headshot under `.hero` later

## Custom domain (optional later)

1. Add a `CNAME` file in the repo with `yourdomain.com`
2. Point DNS A/ALIAS/CNAME per GitHub Pages docs
3. Enable HTTPS in Pages settings
