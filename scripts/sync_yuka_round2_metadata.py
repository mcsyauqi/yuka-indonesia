from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
articles = [
    {
        'slug': 'adhd-dan-gangguan-kecemasan-pada-anak',
        'title': 'ADHD dan Gangguan Kecemasan pada Anak: Memahami Tanda dan Dukungan',
        'desc': 'Pahami hubungan ADHD dan gangguan kecemasan pada anak, tanda yang perlu diamati, dukungan di rumah dan sekolah, serta kapan berkonsultasi.',
        'image': 'Dokumentasi/artikel/perbedaan-adhd-dan-autis-pada-anak-dokumentasi.webp',
        'category': 'Pendidikan', 'date': '08 Okt 2026', 'read': '14 menit baca', 'pub': '2026-10-08',
    },
    {
        'slug': 'cara-mengatur-waktu-tidur-anak-autis',
        'title': 'Cara Mengatur Waktu Tidur Anak Autis dengan Rutinitas yang Konsisten',
        'desc': 'Pelajari cara mengatur waktu tidur anak autis dengan rutinitas visual, penyesuaian sensorik, catatan tidur, dan tanda perlu bantuan profesional.',
        'image': 'Dokumentasi/artikel/strategi-mengajar-anak-autis-di-kelas-kelas.webp',
        'category': 'Pendidikan', 'date': '31 Agu 2026', 'read': '14 menit baca', 'pub': '2026-08-31',
    },
]

blog = ROOT / 'blog.html'
text = blog.read_text()
marker = '<div class="blog-grid" id="blogGrid">'
if marker not in text:
    raise SystemExit('blog grid marker not found')
for a in articles:
    if f'href="artikel/{a["slug"]}"' in text or f'href="artikel/{a["slug"]}.html"' in text:
        print('SKIP blog', a['slug'])
        continue
    card = f'''                <!-- Article: {a['title']} -->
                <article class="card blog-card animate-on-scroll">
                    <div class="card-image">
                        <img src="{a['image']}" alt="{a['title']}" loading="lazy">
                    </div>
                    <div class="card-body">
                        <span class="card-category">{a['category']}</span>
                        <h3 class="card-title">
                            <a href="artikel/{a['slug']}">{a['title']}</a>
                        </h3>
                        <p class="card-text">{a['desc']}</p>
                        <div class="card-meta">
                            <span>{a['date']}</span>
                            <span>{a['read']}</span>
                        </div>
                    </div>
                </article>'''
    text = text.replace(marker, marker + '\n' + card, 1)
    text = re.sub(r'(Menampilkan )([0-9]+)( artikel)', lambda m: f'{m.group(1)}{int(m.group(2))+1}{m.group(3)}', text, count=1)
    print('ADD blog', a['slug'])
blog.write_text(text)
