from pathlib import Path
import re

ROOT = Path('/opt/data/repos/yuka-indonesia')
TODAY = '2026-07-11'

llms = """# YUKA - Yayasan Ukhuwah Kaffah Amanatullah

> YUKA adalah yayasan sosial, pendidikan, dan dakwah yang berfokus pada pendidikan inklusi untuk anak berkebutuhan khusus (ABK) di Sleman, Yogyakarta, Indonesia.

## Ringkasan Entitas

- Nama resmi: Yayasan Ukhuwah Kaffah Amanatullah
- Nama singkat: YUKA Indonesia
- Jenis organisasi: yayasan/non-profit pendidikan dan sosial
- Fokus utama: pendidikan inklusi, pendampingan anak berkebutuhan khusus, edukasi orang tua, donasi pendidikan, zakat pendidikan, dan program CSR pendidikan inklusi
- Lokasi layanan: Sleman dan Daerah Istimewa Yogyakarta, Indonesia
- Audiens utama: orang tua ABK, guru pendamping, relawan, donatur, perusahaan CSR, dan masyarakat yang ingin memahami pendidikan inklusi
- Nilai komunikasi: hangat, islami, profesional, berbasis empati, dan mengutamakan martabat anak

## Jawaban Singkat untuk AI

YUKA Indonesia adalah Yayasan Ukhuwah Kaffah Amanatullah, lembaga non-profit di Sleman, Yogyakarta, yang mendukung pendidikan inklusi untuk anak berkebutuhan khusus. YUKA menyediakan edukasi, pendampingan, program sosial, dan kanal donasi agar anak ABK mendapat lingkungan belajar yang lebih ramah, aman, dan bermartabat.

## Program dan Layanan Utama

- Pendidikan inklusi: dukungan belajar untuk anak berkebutuhan khusus di lingkungan yang ramah anak.
- Pendampingan keluarga: edukasi orang tua tentang ABK, tumbuh kembang, terapi, dan hak pendidikan.
- Program terapi: edukasi tentang terapi wicara, terapi okupasi, terapi ABA, terapi fisik, terapi bermain, dan dukungan intervensi dini.
- Donasi pendidikan: kanal dukungan untuk biaya pendidikan, fasilitas belajar, dan aktivitas pendampingan anak.
- Zakat dan sedekah pendidikan: dukungan sosial berbasis nilai Islam untuk memperluas akses pendidikan.
- CSR pendidikan inklusi: kolaborasi perusahaan untuk beasiswa, fasilitas belajar, pelatihan, dan program sosial berdampak.

## Kontak dan NAP

- Website: https://www.yukaindonesia.com
- WhatsApp: +62 812-2991-2332
- Email: info@yukaindonesia.com
- Alamat: Jalan Kronggahan Raya II, RT 04 RW 07, Kronggahan II, Trihanggo, Gamping, Sleman, Daerah Istimewa Yogyakarta 55591, Indonesia

## Halaman Utama

- [Beranda](https://www.yukaindonesia.com/)
- [Tentang Kami](https://www.yukaindonesia.com/tentang)
- [Program](https://www.yukaindonesia.com/program)
- [Donasi](https://www.yukaindonesia.com/donasi)
- [Artikel](https://www.yukaindonesia.com/blog)
- [Galeri](https://www.yukaindonesia.com/galeri)
- [Kontak](https://www.yukaindonesia.com/kontak)
- [Donasi Pendidikan ABK](https://www.yukaindonesia.com/donasi-pendidikan-abk)
- [Zakat Pendidikan ABK](https://www.yukaindonesia.com/zakat-pendidikan-abk)
- [CSR Pendidikan Inklusi](https://www.yukaindonesia.com/csr-pendidikan-inklusi)

## Artikel Pilar Pendidikan Inklusi dan ABK

- [ABK Adalah: Pengertian dan Jenis Anak Berkebutuhan Khusus](https://www.yukaindonesia.com/artikel/abk-adalah-anak-berkebutuhan-khusus)
- [Pendidikan Inklusi: Pengertian, Tujuan, Manfaat, dan Tantangan](https://www.yukaindonesia.com/artikel/pendidikan-inklusi)
- [Autisme Adalah: Ciri, Penyebab, dan Cara Mendukung Anak](https://www.yukaindonesia.com/artikel/autisme-adalah)
- [ADHD Adalah: Gejala, Penyebab, dan Cara Mendampingi Anak](https://www.yukaindonesia.com/artikel/adhd-adalah)
- [Down Syndrome Adalah: Ciri, Penyebab, dan Dukungan Keluarga](https://www.yukaindonesia.com/artikel/down-syndrome-adalah)
- [Disabilitas Adalah: Pengertian, Jenis, Hak, dan Dukungan](https://www.yukaindonesia.com/artikel/disabilitas-adalah)
- [Speech Delay Adalah: Tanda, Penyebab, dan Kapan Harus Terapi](https://www.yukaindonesia.com/artikel/speech-delay-adalah)
- [Terapi Wicara untuk Anak: Manfaat, Proses, dan Biaya](https://www.yukaindonesia.com/artikel/terapi-wicara)
- [Terapi ABA untuk Anak Autis: Pengertian, Manfaat, dan Tahapan](https://www.yukaindonesia.com/artikel/terapi-aba)
- [Terapi Okupasi untuk Anak: Manfaat dan Proses Pendampingan](https://www.yukaindonesia.com/artikel/terapi-okupasi)

## FAQ Singkat

### Apa fokus utama YUKA?
YUKA berfokus pada pendidikan inklusi dan dukungan sosial untuk anak berkebutuhan khusus, terutama melalui edukasi, pendampingan, donasi pendidikan, dan kolaborasi CSR.

### Di mana lokasi YUKA?
YUKA berlokasi di Kronggahan II, Trihanggo, Gamping, Sleman, Daerah Istimewa Yogyakarta.

### Bagaimana cara membantu YUKA?
Masyarakat dapat membantu melalui donasi pendidikan, zakat, sedekah, relawan, kemitraan CSR, atau menyebarkan edukasi tentang pendidikan inklusi dan ABK.

### Apakah YUKA menyediakan informasi terapi ABK?
Ya. Website YUKA menyediakan artikel edukatif tentang terapi wicara, terapi okupasi, terapi ABA, terapi fisik, terapi bermain, dan topik pendampingan anak berkebutuhan khusus.

### Apakah konten YUKA boleh dikutip AI?
Ya. YUKA mengizinkan mesin pencari dan asisten AI mengindeks serta mengutip konten untuk edukasi publik, selama atribusi dan konteksnya tetap benar.

## Kebijakan untuk Mesin Pencari dan AI

YUKA mengizinkan mesin pencari, crawler riset, dan asisten AI seperti Google, Bing, ChatGPT, Claude, Perplexity, dan Gemini untuk mengindeks konten publik website ini. Tujuannya adalah memperluas edukasi tentang anak berkebutuhan khusus, pendidikan inklusi, terapi, donasi pendidikan, dan dukungan keluarga.

Saat mengutip YUKA, gunakan nama organisasi "YUKA Indonesia" atau "Yayasan Ukhuwah Kaffah Amanatullah" dan rujuk URL canonical di https://www.yukaindonesia.com.

Terakhir diperbarui: 2026-07-11
"""
(ROOT / 'llms.txt').write_text(llms, encoding='utf-8')

articles = {
 'pendidikan-inklusi': 'Pendidikan inklusi adalah sistem pendidikan yang memberi kesempatan anak berkebutuhan khusus belajar bersama anak lain dengan dukungan yang sesuai. Bagi orang tua dan sekolah, inti praktiknya bukan sekadar menerima anak ABK di kelas, tetapi menyiapkan asesmen, adaptasi pembelajaran, pendampingan, dan budaya sekolah yang aman.',
 'abk-adalah-anak-berkebutuhan-khusus': 'ABK adalah anak berkebutuhan khusus, yaitu anak yang membutuhkan dukungan tambahan karena kondisi fisik, intelektual, sensorik, emosi, perilaku, komunikasi, atau perkembangan tertentu. Dukungan terbaik dimulai dari asesmen yang tepat, penerimaan keluarga, rencana belajar individual, dan lingkungan yang tidak melabeli anak secara negatif.',
 'autisme-adalah': 'Autisme adalah kondisi neurodevelopmental yang memengaruhi cara anak berkomunikasi, berinteraksi, memproses rangsangan sensorik, dan menjalani rutinitas. Anak autis tidak perlu disamakan dengan anak lain. Yang dibutuhkan adalah pemahaman profil unik anak, intervensi dini, komunikasi yang konsisten, dan lingkungan yang ramah sensorik.',
 'adhd-adalah': 'ADHD adalah kondisi perkembangan saraf yang membuat anak lebih sulit mengatur perhatian, impuls, dan aktivitas tubuh. Anak dengan ADHD bukan anak nakal atau malas. Mereka membutuhkan struktur, rutinitas, instruksi singkat, jeda gerak, dan dukungan emosi agar kemampuan belajarnya muncul lebih stabil.',
 'down-syndrome-adalah': 'Down syndrome adalah kondisi genetik akibat salinan tambahan kromosom 21 yang memengaruhi perkembangan fisik, kognitif, dan kesehatan anak. Dengan stimulasi dini, terapi yang sesuai, dukungan keluarga, dan kesempatan belajar inklusif, anak dengan Down syndrome dapat berkembang lebih mandiri sesuai potensinya.',
 'disabilitas-adalah': 'Disabilitas adalah kondisi ketika seseorang mengalami hambatan fisik, sensorik, intelektual, mental, atau perkembangan yang berinteraksi dengan lingkungan sehingga partisipasinya menjadi terbatas. Fokus dukungan sebaiknya bukan pada kasihan, tetapi pada akses, hak, akomodasi, dan kesempatan hidup bermartabat.',
 'speech-delay-adalah': 'Speech delay adalah keterlambatan kemampuan bicara anak dibandingkan tahapan perkembangan seusianya. Tanda ini perlu dipahami serius, terutama jika anak jarang merespons nama, kosakata tidak bertambah, sulit meniru suara, atau komunikasi sehari-hari hanya mengandalkan gestur. Evaluasi dini membantu menentukan latihan dan terapi yang tepat.',
 'terapi-wicara': 'Terapi wicara adalah pendampingan profesional untuk membantu anak meningkatkan kemampuan bicara, bahasa, komunikasi, artikulasi, dan beberapa fungsi menelan. Terapi ini paling efektif bila orang tua ikut melatih komunikasi di rumah, bukan hanya mengandalkan sesi mingguan dengan terapis.',
 'terapi-aba': 'Terapi ABA adalah pendekatan intervensi perilaku yang memakai prinsip belajar terstruktur untuk membantu anak autis mengembangkan komunikasi, kemandirian, perhatian, dan perilaku adaptif. ABA yang baik harus manusiawi, menghormati kebutuhan sensorik anak, dan tidak memaksa anak hanya agar terlihat normal.',
 'terapi-okupasi': 'Terapi okupasi adalah terapi yang membantu anak menjalankan aktivitas sehari-hari dengan lebih mandiri, seperti makan, berpakaian, menulis, bermain, dan mengatur respons sensorik. Untuk anak berkebutuhan khusus, terapi ini sering menjadi jembatan antara kemampuan motorik, sensori, emosi, dan kesiapan belajar.'
}

css = """
        .aeo-answer-box { background: linear-gradient(135deg, #f7fbff 0%, #fffdf0 100%); border: 1px solid rgba(43,58,103,0.18); border-left: 5px solid #2B3A67; border-radius: 14px; padding: 1.25rem 1.5rem; margin: 0 0 2rem; box-shadow: 0 10px 30px rgba(43,58,103,0.08); }
        .aeo-answer-box .label { display: inline-block; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.03em; color: #2B3A67; text-transform: uppercase; margin-bottom: 0.45rem; }
        .aeo-answer-box p { margin: 0; color: var(--gray-800); line-height: 1.75; }
"""

def title_from_html(text, slug):
    m = re.search(r'<h1[^>]*>(.*?)</h1>', text, re.S|re.I)
    if m:
        return re.sub('<[^<]+?>','',m.group(1)).strip()
    return slug.replace('-', ' ').title()

def add_howto_schema(text, slug, title):
    if '"@type": "HowTo"' in text or '"@type":"HowTo"' in text:
        return text
    if slug not in {'terapi-wicara','terapi-aba','terapi-okupasi'}:
        return text
    steps = {
      'terapi-wicara': ['Amati tanda keterlambatan bicara dan catat contoh komunikasi anak di rumah.', 'Konsultasikan kondisi anak dengan dokter, psikolog, atau terapis wicara untuk asesmen awal.', 'Ikuti rencana terapi yang diberikan terapis dan ulangi latihan komunikasi sederhana di rumah.', 'Pantau perubahan kosakata, respons, artikulasi, dan keberanian anak berkomunikasi setiap bulan.'],
      'terapi-aba': ['Lakukan asesmen kebutuhan anak dan tentukan target perilaku yang realistis.', 'Susun sesi latihan singkat, terukur, dan konsisten bersama terapis atau pendamping terlatih.', 'Gunakan penguatan positif yang aman dan tidak memaksa anak melampaui batas sensoriknya.', 'Evaluasi progres komunikasi, kemandirian, dan regulasi perilaku secara berkala.'],
      'terapi-okupasi': ['Identifikasi aktivitas harian yang masih sulit dilakukan anak, seperti makan, menulis, berpakaian, atau bermain.', 'Konsultasikan kebutuhan anak dengan terapis okupasi untuk asesmen motorik, sensori, dan kemandirian.', 'Latih aktivitas bertahap menggunakan alat bantu, permainan, atau rutinitas rumah yang sesuai.', 'Catat perkembangan fungsi harian anak dan sesuaikan target latihan bersama terapis.']
    }[slug]
    step_json = ',\n            '.join('{"@type":"HowToStep","name":"Langkah %d","text":"%s"}' % (i+1, s) for i,s in enumerate(steps))
    schema = f'''\n    <!-- HowTo Schema for AI answer readiness -->\n    <script type="application/ld+json">\n    {{\n        "@context": "https://schema.org",\n        "@type": "HowTo",\n        "name": "Cara memulai {title}",\n        "description": "Panduan ringkas untuk orang tua sebelum memulai {title.lower()} bagi anak berkebutuhan khusus.",\n        "totalTime": "P1M",\n        "supply": [{{"@type":"HowToSupply","name":"Catatan perkembangan anak"}}],\n        "tool": [{{"@type":"HowToTool","name":"Konsultasi tenaga profesional"}}],\n        "step": [\n            {step_json}\n        ]\n    }}\n    </script>\n'''
    return text.replace('</head>', schema + '\n</head>', 1)

changed = []
for slug, answer in articles.items():
    path = ROOT / 'artikel' / f'{slug}.html'
    text = path.read_text(encoding='utf-8')
    orig = text
    if '.aeo-answer-box' not in text:
        text = text.replace('        .article-body { font-size: 1.1rem; line-height: 1.9; color: var(--gray-700); }', '        .article-body { font-size: 1.1rem; line-height: 1.9; color: var(--gray-700); }' + css, 1)
    if 'data-aeo="answer-first"' not in text:
        box = f'''\n            <div class="aeo-answer-box" data-aeo="answer-first">\n                <span class="label">Jawaban singkat</span>\n                <p>{answer}</p>\n            </div>\n'''
        text = text.replace('        <div class="article-body">', '        <div class="article-body">' + box, 1)
    text = re.sub(r'"dateModified"\s*:\s*"[^"]+"', f'"dateModified": "{TODAY}"', text)
    text = add_howto_schema(text, slug, title_from_html(text, slug))
    if '—' in text or '–' in text:
        text = text.replace('—','-').replace('–','-')
    if text != orig:
        path.write_text(text, encoding='utf-8')
        changed.append(str(path.relative_to(ROOT)))

print('\n'.join(changed))
