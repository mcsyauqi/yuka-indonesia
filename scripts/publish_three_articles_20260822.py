from pathlib import Path
import html, subprocess

ROOT = Path(__file__).resolve().parents[1]
BLOG = ROOT / 'blog.html'
BASE = 'https://www.yukaindonesia.com'
articles = [
    {
        'slug': 'hearing-aid-vs-cochlear-implant-anak',
        'title': 'Hearing Aid vs Cochlear Implant Anak: Perbedaan dan Cara Memilih',
        'desc': 'Hearing aid vs cochlear implant anak memiliki mekanisme dan proses pendampingan yang berbeda. Pahami pemeriksaan, manfaat, keterbatasan, dan dukungan sekolah sebelum mengambil keputusan.',
        'image': 'Dokumentasi/candi-plaosan-keluarga-kostum-tradisional-candi-borobudur-068.webp',
        'category': 'Pendidikan',
    },
    {
        'slug': 'media-pembelajaran-braille-untuk-tunanetra',
        'title': 'Media Pembelajaran Braille untuk Tunanetra: Jenis dan Cara Memilih',
        'desc': 'Media pembelajaran Braille untuk tunanetra membantu anak membaca, menulis, dan belajar mandiri. Kenali jenis media, prinsip pemilihan, dan contoh aktivitas inklusif.',
        'image': 'Dokumentasi/candi-plaosan-keluarga-wisata-candi-borobudur-011.webp',
        'category': 'Pendidikan',
    },
    {
        'slug': 'seni-dan-kreativitas-untuk-anak-disabilitas',
        'title': 'Seni dan Kreativitas untuk Anak Disabilitas: Ide Kegiatan Inklusif',
        'desc': 'Seni dan kreativitas untuk anak disabilitas membantu ekspresi, komunikasi, dan partisipasi. Simak ide kegiatan serta cara menyesuaikannya di rumah dan sekolah.',
        'image': 'Dokumentasi/candi-plaosan-keluarga-wisata-candi-borobudur-005.webp',
        'category': 'Pendidikan',
    },
]


def card(a):
    return f'''                <!-- Article: {html.escape(a['title'])} -->
                <article class="card blog-card animate-on-scroll">
                    <div class="card-image">
                        <img src="{a['image']}" alt="{html.escape(a['title'])}" loading="lazy">
                    </div>
                    <div class="card-body">
                        <span class="card-category">{a['category']}</span>
                        <h3 class="card-title">
                            <a href="artikel/{a['slug']}">{html.escape(a['title'])}</a>
                        </h3>
                        <p class="card-text">{html.escape(a['desc'])}</p>
                        <div class="card-meta">
                            <span>22 Agu 2026</span>
                            <span>15 menit baca</span>
                        </div>
                    </div>
                </article>'''

blog = BLOG.read_text(encoding='utf-8')
marker = '<div class="blog-grid" id="blogGrid">'
if marker not in blog:
    raise SystemExit('blog grid marker not found')
for a in reversed(articles):
    href = f'artikel/{a["slug"]}'
    if href in blog or f'{href}.html' in blog:
        print('blog duplicate', a['slug'])
        continue
    blog = blog.replace(marker, marker + '\n' + card(a), 1)
BLOG.write_text(blog, encoding='utf-8')

for a in articles:
    subprocess.run(['node', 'scripts/update-feed.js', a['slug'], a['title'], a['desc'], '2026-08-22'], cwd=ROOT, check=True)

print('published_blog_cards', len(articles))
