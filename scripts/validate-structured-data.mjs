#!/usr/bin/env node

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SKIP_DIRS = new Set(['.git', 'node_modules', '.github']);
const SKIP_FILES = new Set(['.DS_Store']);
const LD_JSON_RE =
  /<script\b[^>]*\btype\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
const DATETIME_WITH_TZ_RE =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:\d{2})$/;
const DATE_ONLY_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIMEZONED_DATE_KEYS = new Set(['uploadDate', 'datePublished', 'dateModified']);

const repoRoot = path.resolve(
  process.argv[2] ? path.resolve(process.argv[2]) : path.dirname(fileURLToPath(import.meta.url)) + '/..',
);

const errors = [];
let htmlFiles = 0;
let jsonLdBlocks = 0;
let videoObjects = 0;

async function collectHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      files.push(...(await collectHtmlFiles(path.join(dir, entry.name))));
    } else if (entry.isFile()) {
      if (SKIP_FILES.has(entry.name)) continue;
      if (entry.name.toLowerCase().endsWith('.html')) files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

function addError(file, message) {
  errors.push(`${path.relative(repoRoot, file)}: ${message}`);
}

function typesOf(node) {
  const type = node['@type'];
  if (typeof type === 'string') return [type];
  if (Array.isArray(type)) return type.filter((t) => typeof t === 'string');
  return [];
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim() !== '';
}

function validateVideoObject(file, video) {
  videoObjects += 1;
  for (const field of ['name', 'description', 'thumbnailUrl', 'contentUrl']) {
    if (!isNonEmptyString(video[field])) {
      addError(file, `VideoObject is missing required "${field}"`);
    }
  }

  if (!isNonEmptyString(video.uploadDate)) {
    addError(file, 'VideoObject is missing required "uploadDate"');
  } else if (DATE_ONLY_RE.test(video.uploadDate)) {
    addError(
      file,
      `VideoObject "uploadDate" is a date without a time zone ("${video.uploadDate}"); use e.g. "2026-10-26T12:00:00+00:00"`,
    );
  } else if (!DATETIME_WITH_TZ_RE.test(video.uploadDate) || Number.isNaN(Date.parse(video.uploadDate))) {
    addError(
      file,
      `VideoObject "uploadDate" is not a valid ISO 8601 datetime with a time zone ("${video.uploadDate}")`,
    );
  }

  if (video.duration !== undefined && (typeof video.duration !== 'string' || !/^P/.test(video.duration))) {
    addError(file, `VideoObject "duration" is not a valid ISO 8601 duration ("${video.duration}")`);
  }
}

function walk(file, node) {
  if (Array.isArray(node)) {
    for (const item of node) walk(file, item);
    return;
  }
  if (node === null || typeof node !== 'object') return;

  const isVideoObject = typesOf(node).includes('VideoObject');

  for (const [key, value] of Object.entries(node)) {
    if (!TIMEZONED_DATE_KEYS.has(key) || typeof value !== 'string') continue;
    if (key === 'uploadDate' && isVideoObject) continue;
    if (DATE_ONLY_RE.test(value)) {
      addError(file, `"${key}" is a date without a time zone ("${value}")`);
    } else if (!DATETIME_WITH_TZ_RE.test(value) || Number.isNaN(Date.parse(value))) {
      addError(file, `"${key}" is not a valid ISO 8601 datetime with a time zone ("${value}")`);
    }
  }

  if (isVideoObject) validateVideoObject(file, node);

  for (const value of Object.values(node)) walk(file, value);
}

async function main() {
  const files = await collectHtmlFiles(repoRoot);
  htmlFiles = files.length;

  for (const file of files) {
    const html = await readFile(file, 'utf8');
    LD_JSON_RE.lastIndex = 0;
    let match;
    while ((match = LD_JSON_RE.exec(html)) !== null) {
      jsonLdBlocks += 1;
      let data;
      try {
        data = JSON.parse(match[1]);
      } catch (error) {
        addError(file, `invalid JSON-LD: ${error.message}`);
        continue;
      }
      walk(file, data);
    }
  }

  if (errors.length > 0) {
    console.error(`\n✖ Structured data validation failed (${errors.length} issue(s)):\n`);
    for (const error of errors) console.error(`  - ${error}`);
    console.error('');
    process.exit(1);
  }

  console.log(
    `✓ Structured data valid: ${jsonLdBlocks} JSON-LD block(s), ${videoObjects} VideoObject(s) across ${htmlFiles} HTML file(s).`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
