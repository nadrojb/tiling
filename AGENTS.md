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
  id: '<project-name>', // stable slug, same as folder
  title: 'Short title describing the project',
  shortTitle: 'Short label for the gallery card',
  tag: 'Wall Tiling', // or 'Floor Tiling'
  area: 'Xm²',
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
- **ID:** use the same slug as the folder, so related projects and page scripts can reference it
- **Cover image:** first photo in the array is used as the thumbnail
- **Alt texts:** describe each photo, include tile size, room type, and location (Trowbridge/Wiltshire)
- **Descriptions:** include tile size, material, room type, and area (m²)
- **All gallery photos should be portrait** from iPhone
- **Noscript links:** add the new project to the `<noscript>` list in `gallery/index.html` so search engines always see a static link to the project page

## Video structured data (VideoObject)

Pages that embed a video should include a `VideoObject` JSON-LD block. `uploadDate` **must be a full ISO 8601 datetime with a time zone** — a bare date like `2026-10-26` is rejected by Google (invalid datetime / missing time zone).

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Short descriptive title",
  "description": "What the video shows, including tile size, material and location.",
  "thumbnailUrl": "https://avonsidetiling.co.uk/images/gallery/<project-name>/video-poster.jpg",
  "contentUrl": "https://avonsidetiling.co.uk/images/gallery/<project-name>/video.mp4",
  "uploadDate": "2026-10-26T12:00:00+00:00",
  "duration": "PT30S"
}
</script>
```

### Rules

- **`uploadDate`:** always include time and a timezone offset, e.g. `2026-10-26T12:00:00+00:00` (use `+01:00` during British Summer Time, `+00:00` otherwise)
- **Required fields:** `name`, `description`, `thumbnailUrl`, `contentUrl`, `uploadDate`
- **`duration`:** ISO 8601 duration, e.g. `PT31S` for 31 seconds
- **`thumbnailUrl` / `contentUrl`:** absolute URLs on `https://avonsidetiling.co.uk`

### Validate before merging

```bash
node scripts/validate-structured-data.mjs
```

This checks every JSON-LD block on the site and fails on malformed JSON or invalid/missing-timezone dates. A GitHub Actions workflow runs the same check automatically on every pull request, so a failing check blocks the merge. For video pages, also paste the page URL into Google's [Rich Results Test](https://search.google.com/test/rich-results) before merging.

## Sitemap

- **New gallery projects** do NOT require sitemap updates (they all live on `/gallery`)
- **New pages added to the site** (e.g. a services page, area page) DO require adding the URL to `sitemap.xml`
