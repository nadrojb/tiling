# AGENTS.md

## Git Workflow — CRITICAL

**NEVER merge directly to `main` without explicit user permission.**

- `main` = production (live site). Merges to `main` require the user's approval.
- `staging` = testing ground. Protected — requires a PR to merge into it.
- `feature/*` = individual tasks. Branch off `staging`, PR into `staging`.

### The workflow for every task:

1. Create a branch from `staging`: `git checkout -b feature-name staging`
2. Make changes, commit, push the branch
3. Create a PR targeting `staging` (NOT `main`)
4. After reviewing on `staging`, ask the user for permission before creating a PR to `main`

### Rules:

- **NEVER** push directly to `main` or `staging`
- **NEVER** create a PR that targets `main` without the user saying "merge to main" or similar
- Always branch off `staging` for new work
- If unsure, ask the user

## Adding a New Gallery Project

### 1. Create the project folder

```bash
mkdir -p images/gallery/<project-name>
```

### 2. Resize images

Generate a cover thumbnail (400px) and full-size photos (1200px):

```bash
# Cover thumbnail
sips -Z 400 /Users/jordanbrewer/Downloads/IMG_XXXX.JPG --out images/gallery/<project-name>/cover.jpg

# Full-size photos
sips -Z 1200 /Users/jordanbrewer/Downloads/IMG_XXXX.JPG --out images/gallery/<project-name>/photo1.jpg
sips -Z 1200 /Users/jordanbrewer/Downloads/IMG_YYYY.JPG --out images/gallery/<project-name>/photo2.jpg
```

### 3. Add project to GALLERY_PROJECTS in app.js

Copy this template and fill in the details:

```js
{
  title: 'Short title describing the project',
  description: 'Description of the work, tile size, material, area.',
  folder: '<project-name>',
  images: [
    { file: 'photo1.jpg', alt: 'Describe what is in the photo for SEO' },
    { file: 'photo2.jpg', alt: 'Describe what is in the photo for SEO' },
  ]
},
```

### Tips

- **Folder names:** lowercase, hyphens only (e.g. `bathroom-wall-tiling`)
- **Cover image:** first photo in the array is used as the thumbnail
- **Alt texts:** describe each photo, include tile size, room type, and location (Trowbridge/Wiltshire)
- **Descriptions:** include tile size, material, room type, and area (m²)
- **All gallery photos should be portrait** from iPhone

## Sitemap

- **New gallery projects** do NOT require sitemap updates (they all live on `/gallery`)
- **New pages added to the site** (e.g. a services page, area page) DO require adding the URL to `sitemap.xml`
