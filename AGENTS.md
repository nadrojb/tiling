# AGENTS.md

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
