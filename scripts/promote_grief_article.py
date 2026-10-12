#!/usr/bin/env python3
from pathlib import Path
import re, subprocess
root=Path(__file__).resolve().parents[1]
slug='grief-dan-acceptance-orang-tua-anak-abk'
title='Grief dan Acceptance Orang Tua Anak ABK'
desc='Memahami grief dan acceptance orang tua anak ABK, mengenali emosi, menyusun harapan realistis, membangun dukungan, dan mengetahui kapan perlu bantuan profesional.'
image='Dokumentasi/museum-gunung-merapi-rombongan-wisata-edukasi-gunung-merapi-029.webp'
category='Keluarga dan Pengasuhan'; readtime='10 menit'; display='12 Okt 2026'
blog=root/'blog.html'; text=blog.read_text()
marker='<div class="blog-grid" id="blogGrid">'
if f'href="artikel/{slug}"' not in text and f'href="artikel/{slug}.html"' not in text:
    card=f'''                <!-- Article: {title} -->
                <article class="card blog-card animate-on-scroll">
                    <div class="card-image">
                        <img src="{image}" alt="{title}" loading="lazy">
                    </div>
                    <div class="card-body">
                        <span class="card-category">{category}</span>
                        <h3 class="card-title"><a href="artikel/{slug}">{title}</a></h3>
                        <p class="card-text">{desc}</p>
                        <div class="card-meta">
                            <span>{display}</span>
                            <span>{readtime}</span>
                        </div>
                    </div>
                </article>'''
    if marker not in text: raise SystemExit('blog-grid marker missing')
    text=text.replace(marker, marker+'\n'+card, 1)
    text=re.sub(r'Menampilkan (\d+) artikel', lambda m:f'Menampilkan {int(m.group(1))+1} artikel', text, count=1)
    blog.write_text(text)
    print('blog.html: added card')
else:
    print('blog.html: card already present')
subprocess.run(['node','scripts/update-feed.js',slug,title,desc,'2026-10-12'],cwd=root,check=True)
subprocess.run(['node','scripts/regen-sitemaps.js'],cwd=root,check=True)
