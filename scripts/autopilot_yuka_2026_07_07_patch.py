from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]

social_urls = [
    "https://www.instagram.com/yukaindonesia",
    "https://www.facebook.com/yukaindonesia",
    "https://www.youtube.com/@yukaindonesia",
    "https://www.linkedin.com/company/yukaindonesia",
    "https://wa.me/6281229912332",
]

# 1) Branded search: normalize NGO/Organization sameAs on core public pages.
for rel in ["index.html", "program.html", "donasi.html"]:
    p = root / rel
    html = p.read_text()
    html = re.sub(
        r'"sameAs"\s*:\s*\[[\s\S]*?\n\s*\]',
        '"sameAs": [\n' + ',\n'.join(f'                    "{u}"' for u in social_urls) + '\n                ]',
        html,
        count=1,
    )
    p.write_text(html)

# 2) Replace placeholder footer/social links on homepage and lightweight tools pages.
replacements = {
    '<a href="#" aria-label="Instagram">': '<a href="https://www.instagram.com/yukaindonesia" target="_blank" rel="noopener" aria-label="Instagram YUKA Indonesia">',
    '<a href="#" aria-label="Facebook">': '<a href="https://www.facebook.com/yukaindonesia" target="_blank" rel="noopener" aria-label="Facebook YUKA Indonesia">',
    '<a href="#" aria-label="YouTube">': '<a href="https://www.youtube.com/@yukaindonesia" target="_blank" rel="noopener" aria-label="YouTube YUKA Indonesia">',
}
for rel in ["index.html", "tools/tes-kesehatan-mental-depresianxiety-online.html", "tools/skrining-deteksi-dini-tumbuh-kembang-anak-milestone-red-flag-abk.html", "tools/kalkulator-zakat.html", "tools/kalkulator-berat-tinggi-anak-status-gizi-z-score-who.html"]:
    p = root / rel
    html = p.read_text()
    for old, new in replacements.items():
        html = html.replace(old, new)
    p.write_text(html)

# 3) Quick-win article: add answer-first summary and related internal cluster to ranking article.
p = root / "artikel" / "inklusi-sosial.html"
html = p.read_text()
if 'id="ringkasan-teori-inklusi-sosial"' not in html:
    answer = '''
            <div id="ringkasan-teori-inklusi-sosial" class="answer-summary" style="background:#f0f9ff;border-left:4px solid #4AACDC;border-radius:0 12px 12px 0;padding:18px 22px;margin:24px 0;">
                <p style="margin:0 0 8px;font-weight:700;color:#1A516F;">Ringkasan cepat: teori inklusi sosial</p>
                <p style="margin:0;color:#243b53;line-height:1.75;">Teori inklusi sosial menjelaskan bagaimana masyarakat, sekolah, lembaga sosial, dan negara membuka akses yang adil agar kelompok rentan tetap bisa berpartisipasi. Dalam praktik YUKA, teori ini bukan hanya soal menerima anak berkebutuhan khusus di satu ruang, tetapi memastikan dukungan belajar, lingkungan, dan relasi sosialnya ikut disiapkan.</p>
            </div>
'''
    html = html.replace('            <p>Artikel ini akan membahas secara mendalam tentang <strong>pengertian inklusi sosial</strong>, prinsip-prinsip yang mendasarinya, perbedaannya dengan eksklusi sosial, serta bagaimana konsep ini diterapkan di Indonesia. Kami juga akan membagikan pengalaman nyata YUKA dalam mewujudkan <strong>masyarakat inklusif</strong> di tingkat komunitas. Untuk memahami lebih lanjut tentang anak-anak yang menjadi salah satu kelompok penerima manfaat inklusi sosial, silakan baca artikel kami tentang <a href="abk-adalah-anak-berkebutuhan-khusus">Anak Berkebutuhan Khusus (ABK)</a>.</p>\n', '            <p>Artikel ini akan membahas secara mendalam tentang <strong>pengertian inklusi sosial</strong>, prinsip-prinsip yang mendasarinya, perbedaannya dengan eksklusi sosial, serta bagaimana konsep ini diterapkan di Indonesia. Kami juga akan membagikan pengalaman nyata YUKA dalam mewujudkan <strong>masyarakat inklusif</strong> di tingkat komunitas. Untuk memahami lebih lanjut tentang anak-anak yang menjadi salah satu kelompok penerima manfaat inklusi sosial, silakan baca artikel kami tentang <a href="abk-adalah-anak-berkebutuhan-khusus">Anak Berkebutuhan Khusus (ABK)</a>.</p>\n' + answer)
if 'id="klaster-inklusi-sosial"' not in html:
    cluster = '''
            <div id="klaster-inklusi-sosial" class="related-cluster" style="background:#fff8e6;border:1px solid #f6d88b;border-radius:12px;padding:18px 20px;margin:26px 0;">
                <p style="margin:0 0 8px;font-weight:700;color:#8a5b00;">Baca juga klaster inklusi dan disabilitas</p>
                <ul style="margin:0;padding-left:20px;line-height:1.8;">
                    <li><a href="pendidikan-inklusi">Pendidikan inklusi untuk anak berkebutuhan khusus</a></li>
                    <li><a href="penyandang-disabilitas">Hak dan dukungan untuk penyandang disabilitas</a></li>
                    <li><a href="difabel-adalah">Memahami istilah difabel dalam konteks sosial</a></li>
                    <li><a href="yayasan-sosial-anak-berkebutuhan-khusus">Peran yayasan sosial untuk anak berkebutuhan khusus</a></li>
                </ul>
            </div>
'''
    html = html.replace('            <p>Dalam kehidupan sehari-hari, inklusi sosial tercermin dalam hal-hal sederhana seperti tersedianya fasilitas ramah disabilitas di gedung publik, kurikulum pendidikan yang mengakomodasi keberagaman, kebijakan ketenagakerjaan yang non-diskriminatif, dan budaya masyarakat yang menghargai perbedaan. Untuk pemahaman lebih lanjut tentang bagaimana inklusi diterapkan bagi <a href="penyandang-disabilitas">penyandang disabilitas</a>, silakan kunjungi artikel terkait di situs kami.</p>\n', '            <p>Dalam kehidupan sehari-hari, inklusi sosial tercermin dalam hal-hal sederhana seperti tersedianya fasilitas ramah disabilitas di gedung publik, kurikulum pendidikan yang mengakomodasi keberagaman, kebijakan ketenagakerjaan yang non-diskriminatif, dan budaya masyarakat yang menghargai perbedaan. Untuk pemahaman lebih lanjut tentang bagaimana inklusi diterapkan bagi <a href="penyandang-disabilitas">penyandang disabilitas</a>, silakan kunjungi artikel terkait di situs kami.</p>\n' + cluster)
# refresh modified date in JSON-LD if present
html = re.sub(r'"dateModified"\s*:\s*"\d{4}-\d{2}-\d{2}"', '"dateModified": "2026-07-07"', html)
p.write_text(html)

# 4) Sitemap index and robots reference.
s = root / "scripts" / "regen-sitemaps.js"
js = s.read_text()
if 'function renderSitemapIndex' not in js:
    js = js.replace("function writeIfChanged(file, content) {\n", "function renderSitemapIndex() {\n  return `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\\n<sitemapindex xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\\n  <sitemap>\\n    <loc>${SITE}/sitemap-pages.xml</loc>\\n    <lastmod>${TODAY}</lastmod>\\n  </sitemap>\\n  <sitemap>\\n    <loc>${SITE}/sitemap-articles.xml</loc>\\n    <lastmod>${TODAY}</lastmod>\\n  </sitemap>\\n</sitemapindex>\\n`;\n}\n\nfunction writeIfChanged(file, content) {\n")
    js = js.replace("main: writeIfChanged('sitemap.xml', renderUrlset(combined, '    ')),\n};", "main: writeIfChanged('sitemap.xml', renderUrlset(combined, '    ')),\n  index: writeIfChanged('sitemap-index.xml', renderSitemapIndex()),\n};")
    s.write_text(js)
robots = root / "robots.txt"
rt = robots.read_text()
if "sitemap-index.xml" not in rt:
    rt = rt.replace("Sitemap: https://www.yukaindonesia.com/sitemap.xml", "Sitemap: https://www.yukaindonesia.com/sitemap-index.xml\nSitemap: https://www.yukaindonesia.com/sitemap.xml")
    robots.write_text(rt)

print('patched yuka autopilot 2026-07-07')
