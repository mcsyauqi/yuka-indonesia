from pathlib import Path
import re

repo = Path('/opt/data/repos/yuka-indonesia')
changed = set()

ANSWER_BLOCKS = {
    'autisme-adalah': '''        <div class="answer-summary" style="background:#f0f9ff;border-left:4px solid #4AACDC;border-radius:0 12px 12px 0;padding:18px 22px;margin:24px 0;">
            <p style="margin:0 0 8px;font-weight:700;color:#1A516F;">Ringkasan cepat: autisme itu apa?</p>
            <p><strong>Autisme adalah</strong> kondisi perkembangan saraf yang memengaruhi komunikasi, interaksi sosial, pola minat, dan respons sensorik anak. Ciri yang sering terlihat adalah kontak mata terbatas, terlambat bicara, perilaku berulang, sangat terpaku pada rutinitas, serta sensitif pada suara, cahaya, atau tekstur tertentu.</p>
            <p>Yang sering keliru dipahami, autisme bukan akibat pola asuh dan bukan penyakit yang perlu disembuhkan. Pendampingan yang tepat berfokus pada komunikasi, kemandirian, regulasi emosi, dan lingkungan belajar yang ramah anak.</p>
        </div>
''',
    'adhd-adalah': '''        <div class="answer-summary" style="background:#f0f9ff;border-left:4px solid #4AACDC;border-radius:0 12px 12px 0;padding:18px 22px;margin:24px 0;">
            <p style="margin:0 0 8px;font-weight:700;color:#1A516F;">Ringkasan cepat: ciri-ciri ADHD</p>
            <p><strong>ADHD adalah</strong> kondisi perkembangan saraf yang membuat anak lebih sulit mengatur perhatian, impuls, dan aktivitas tubuh dibanding anak seusianya. Ciri yang paling sering terlihat adalah mudah terdistraksi, sulit duduk tenang, sering memotong pembicaraan, lupa instruksi, dan bertindak sebelum berpikir.</p>
            <p>Menurut saya, tanda yang perlu diperhatikan bukan sekadar anak aktif. Yang penting adalah apakah pola tersebut konsisten mengganggu belajar, relasi sosial, dan rutinitas harian anak.</p>
        </div>
''',
    'disleksia-adalah': '''        <div class="answer-summary" style="background:#f0f9ff;border-left:4px solid #4AACDC;border-radius:0 12px 12px 0;padding:18px 22px;margin:24px 0;">
            <p style="margin:0 0 8px;font-weight:700;color:#1A516F;">Ringkasan cepat: ciri-ciri disleksia</p>
            <p><strong>Disleksia adalah</strong> kesulitan belajar spesifik yang terutama memengaruhi kemampuan membaca, mengeja, dan mengenali bunyi huruf. Ciri yang umum muncul adalah lambat membaca, sering tertukar huruf, kesulitan mengeja kata sederhana, dan cepat lelah saat menghadapi teks panjang.</p>
            <p>Yang sering terlewat, disleksia tidak sama dengan malas belajar. Banyak anak disleksia justru kuat di penalaran visual, kreativitas, dan pemecahan masalah jika cara belajarnya disesuaikan.</p>
        </div>
''',
    'down-syndrome-adalah': '''        <div class="answer-summary" style="background:#f0f9ff;border-left:4px solid #4AACDC;border-radius:0 12px 12px 0;padding:18px 22px;margin:24px 0;">
            <p style="margin:0 0 8px;font-weight:700;color:#1A516F;">Ringkasan cepat: down syndrome karena apa?</p>
            <p><strong>Down syndrome adalah</strong> kondisi genetik yang umumnya terjadi karena adanya salinan ekstra kromosom 21. Kondisi ini dapat memengaruhi perkembangan fisik, kemampuan belajar, tonus otot, serta kebutuhan dukungan kesehatan dan pendidikan anak.</p>
            <p>Intinya, down syndrome bukan kesalahan orang tua. Dukungan paling penting adalah stimulasi dini, pemeriksaan kesehatan rutin, lingkungan belajar inklusif, dan target kemandirian yang realistis.</p>
        </div>
'''
}

LINK_BLOCKS = {
    'autisme-adalah': '''
            <div class="related-cluster" style="background:#fff8e6;border:1px solid #f6d88b;border-radius:12px;padding:18px 20px;margin:26px 0;">
                <p style="margin:0 0 8px;font-weight:700;color:#8a5b00;">Baca juga klaster perkembangan anak</p>
                <ul style="margin:0;padding-left:20px;line-height:1.8;">
                    <li><a href="/artikel/adhd-adalah">ciri-ciri ADHD pada anak</a></li>
                    <li><a href="/artikel/disleksia-adalah">ciri-ciri disleksia yang sering terlambat dikenali</a></li>
                    <li><a href="/artikel/down-syndrome-adalah">penyebab down syndrome dan dukungan keluarga</a></li>
                </ul>
            </div>
''',
    'adhd-adalah': '''
            <div class="related-cluster" style="background:#fff8e6;border:1px solid #f6d88b;border-radius:12px;padding:18px 20px;margin:26px 0;">
                <p style="margin:0 0 8px;font-weight:700;color:#8a5b00;">Baca juga klaster perkembangan anak</p>
                <ul style="margin:0;padding-left:20px;line-height:1.8;">
                    <li><a href="/artikel/autisme-adalah">perbedaan tanda autisme dan ADHD</a></li>
                    <li><a href="/artikel/disleksia-adalah">tanda disleksia pada anak usia sekolah</a></li>
                    <li><a href="/artikel/down-syndrome-adalah">pendampingan anak down syndrome</a></li>
                </ul>
            </div>
''',
    'disleksia-adalah': '''
            <div class="related-cluster" style="background:#fff8e6;border:1px solid #f6d88b;border-radius:12px;padding:18px 20px;margin:26px 0;">
                <p style="margin:0 0 8px;font-weight:700;color:#8a5b00;">Baca juga klaster perkembangan anak</p>
                <ul style="margin:0;padding-left:20px;line-height:1.8;">
                    <li><a href="/artikel/autisme-adalah">ciri-ciri autisme pada anak</a></li>
                    <li><a href="/artikel/adhd-adalah">ciri-ciri ADHD dan kapan perlu asesmen</a></li>
                    <li><a href="/artikel/down-syndrome-adalah">dukungan belajar untuk anak down syndrome</a></li>
                </ul>
            </div>
''',
    'down-syndrome-adalah': '''
            <div class="related-cluster" style="background:#fff8e6;border:1px solid #f6d88b;border-radius:12px;padding:18px 20px;margin:26px 0;">
                <p style="margin:0 0 8px;font-weight:700;color:#8a5b00;">Baca juga klaster perkembangan anak</p>
                <ul style="margin:0;padding-left:20px;line-height:1.8;">
                    <li><a href="/artikel/autisme-adalah">pengertian autisme dan ciri awalnya</a></li>
                    <li><a href="/artikel/adhd-adalah">ciri-ciri ADHD pada anak</a></li>
                    <li><a href="/artikel/disleksia-adalah">cara mengenali disleksia sejak dini</a></li>
                </ul>
            </div>
'''
}

for path in list(repo.glob('*.html')) + list((repo/'artikel').glob('*.html')):
    text = path.read_text(encoding='utf-8')
    original = text
    # Public canonical/social URLs must consistently use www.
    text = text.replace('https://yukaindonesia.com/', 'https://www.yukaindonesia.com/')
    # Remove em/en dashes from public HTML content.
    text = text.replace('—', ', ')
    text = text.replace('–', '-')
    # Add twitter card tags when missing and Open Graph data exists.
    if 'name="twitter:card"' not in text and 'property="og:title"' in text:
        title = re.search(r'<meta property="og:title" content="([^"]*)">', text)
        desc = re.search(r'<meta property="og:description" content="([^"]*)">', text)
        image = re.search(r'<meta property="og:image" content="([^"]*)">', text)
        twitter = [
            '',
            '    <!-- X / Twitter -->',
            '    <meta name="twitter:card" content="summary_large_image">',
        ]
        if title:
            twitter.append(f'    <meta name="twitter:title" content="{title.group(1)}">')
        if desc:
            twitter.append(f'    <meta name="twitter:description" content="{desc.group(1)}">')
        if image:
            twitter.append(f'    <meta name="twitter:image" content="{image.group(1)}">')
        twitter.append('')
        if image:
            text = text.replace(image.group(0), image.group(0) + '\n' + '\n'.join(twitter), 1)
        else:
            text = text.replace('    <!-- Favicon -->', '\n'.join(twitter) + '    <!-- Favicon -->', 1)
    slug = path.stem if path.parent.name == 'artikel' else None
    if slug in ANSWER_BLOCKS and 'class="answer-summary"' not in text:
        text = text.replace('        <div class="article-body">\n', '        <div class="article-body">\n' + ANSWER_BLOCKS[slug], 1)
    if slug in LINK_BLOCKS and 'class="related-cluster"' not in text:
        marker = '            <div class="toc">'
        idx = text.find(marker)
        if idx != -1:
            text = text[:idx] + LINK_BLOCKS[slug] + text[idx:]
        else:
            text = text.replace('        <div class="article-body">\n', '        <div class="article-body">\n' + LINK_BLOCKS[slug], 1)
    if text != original:
        path.write_text(text, encoding='utf-8')
        changed.add(str(path.relative_to(repo)))

print('changed_files', len(changed))
for f in sorted(changed): print(f)
