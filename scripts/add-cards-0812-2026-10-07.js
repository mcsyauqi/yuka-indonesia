#!/usr/bin/env node
'use strict';
/*
 * Cycle #74 (2026-10-07): 22 artikel batch catchup 2026-08-12 tayang sejak Agustus tanpa kartu di
 * blog.html. Skrip ini menyisipkan kartu kanonik (markup sama dengan publish-scheduled.yml) di posisi
 * tanggalnya: sesudah kartu 14 Aug terakhir, sebelum kartu tuna-netra-rungu (11 Aug).
 * Urutan diatur supaya kartu bersebelahan tidak memakai foto/suasana yang sama
 * (museum, kelas memasak, candi, ruang kelas bergantian). Idempoten: slug yang sudah punya kartu dilewati.
 */
const fs = require('fs');
const path = require('path');
const { stripTags } = require('./lib/article-page');

const ROOT = path.resolve(__dirname, '..');
const ORDER = [
  'kartu-disabilitas', 'bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh',
  'jenis-disabilitas', 'apa-saja-3-pilar-pendidikan', 'disabilitas', 'konsep-inklusi-sosial',
  'augmentative-communication-untuk-anak-di-rumah', 'teori-inklusi-sosial', 'makanan-yang-harus-dihindari-anak-adhd',
  'prinsip-inklusi-sosial', 'yayasan-disabilitas', 'peer-tutoring-di-kelas-inklusi',
  'systematic-review-intervensi-dini-autisme', 'apa-saja-terapi-anak-berkebutuhan-khusus',
  'bagaimana-cara-membuat-kartu-disabilitas', 'liburan-dengan-anak-berkebutuhan-khusus',
  'reward-system-efektif-untuk-anak-autis', 'penerapan-inklusi-sosial', 'co-teaching-dalam-kelas-inklusi',
  'terapi-bermain-child-centered-play-therapy', 'disabilitas-intelektual', 'yayasan-sosial',
];
const ANCHOR = 'href="artikel/tuna-netra-rungu"';

function card(slug) {
  const h = fs.readFileSync(path.join(ROOT, 'artikel', `${slug}.html`), 'utf8');
  const h1 = stripTags(h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]);
  const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
  const img = h.match(/class="article-featured-image"[\s\S]*?<img[^>]+src="\.\.\/([^"]+)"/)[1];
  const cat = stripTags(h.match(/class="card-category"[^>]*>([\s\S]*?)<\/span>/)[1]);
  const metaSpans = [...h.match(/<div class="article-meta">([\s\S]*?)<\/div>/)[1].matchAll(/<span>([\s\S]*?)<\/span>/g)].map((m) => stripTags(m[1]));
  const pub = h.match(/"datePublished":"([^"]+)"/)[1];
  const d = new Date(new Date(pub).getTime() + 7 * 3600e3);
  const mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getUTCMonth()];
  const date = `${String(d.getUTCDate()).padStart(2, '0')} ${mon} ${d.getUTCFullYear()}`;
  return `<!-- Article: ${h1.replace(/--/g, '-')} -->
                <article class="card blog-card animate-on-scroll">
                    <div class="card-image">
                        <img src="${img}" alt="${h1.replace(/"/g, '&quot;')}" loading="lazy">
                    </div>
                    <div class="card-body">
                        <span class="card-category">${cat}</span>
                        <h3 class="card-title">
                            <a href="artikel/${slug}">${h1}</a>
                        </h3>
                        <p class="card-text">${desc}</p>
                        <div class="card-meta">
                            <span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                    <line x1="16" y1="2" x2="16" y2="6"/>
                                    <line x1="8" y1="2" x2="8" y2="6"/>
                                    <line x1="3" y1="10" x2="21" y2="10"/>
                                </svg>
                                ${date}
                            </span>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                ${metaSpans[1]}
                            </span>
                        </div>
                    </div>
                </article>`;
}

const fb = path.join(ROOT, 'blog.html');
let blog = fs.readFileSync(fb, 'utf8');
const todo = ORDER.filter((s) => !blog.includes(`href="artikel/${s}"`));
const at0 = blog.indexOf(ANCHOR);
if (at0 < 0) throw new Error('anchor tuna-netra-rungu tidak ketemu');
let at = blog.lastIndexOf('<article class="card blog-card', at0);
const cm = blog.slice(0, at).match(/<!-- Article:[^>]*-->\s*$/);
if (cm) at -= cm[0].length;
blog = blog.slice(0, at) + todo.map(card).join('\n                ') + '\n                ' + blog.slice(at);
fs.writeFileSync(fb, blog, 'utf8');
console.log(`kartu ditambah: ${todo.length}`);
