// Follow-up Todo cards for the two SEO Tracker columns that stayed FALSE.
// Both are blocked: one on a PSI API quota reset, one on a design decision.
// Run: node "D:\Projects\Yuka\scripts\trello-followups-2026-07-09.js"
const https = require('https');
const fs = require('fs');

const BOARD = '69b894ffb5e27a49caff86b7';
const TODO_LIST = '69be462e5ee119810b7c2655';

const env = {};
fs.readFileSync('D:/Projects/Creativism App/.env', 'utf8').split(/\r?\n/).forEach((l) => {
    const m = l.match(/^([^=#]+?)=(.*)$/);
    if (m) env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
});
const KEY = env.TRELLO_API_KEY;
const TOKEN = env.TRELLO_TOKEN;

function trelloApi(method, path_, body) {
    return new Promise((resolve, reject) => {
        const sep = path_.includes('?') ? '&' : '?';
        const url = `${path_}${sep}key=${KEY}&token=${TOKEN}`;
        const b = body ? JSON.stringify(body) : null;
        const req = https.request(
            { hostname: 'api.trello.com', path: url, method, headers: { 'Content-Type': 'application/json', ...(b ? { 'Content-Length': Buffer.byteLength(b) } : {}) } },
            (r) => { let d = ''; r.on('data', (c) => (d += c)); r.on('end', () => { try { resolve({ status: r.statusCode, data: JSON.parse(d) }); } catch (e) { resolve({ status: r.statusCode, data: d }); } }); }
        );
        req.on('error', reject);
        if (b) req.write(b);
        req.end();
    });
}

const CARDS = [
    {
        name: 'Ukur ulang PageSpeed Insights homepage Yuka setelah kuota API reset',
        labels: ['Monitoring', 'Technical'],
        due: '2026-07-10T03:00:00.000Z',
        desc: [
            '## Konteks', '',
            'Task ini adalah tindak lanjut dari: **Optimasi Performa Homepage: Lighthouse Mobile 76 ke 88, Desktop 100** (9 Juli 2026)',
            'Trello card sebelumnya: https://trello.com/c/31WFJ2lb', '',
            '## Latar Belakang', '',
            'Pada 9 Juli 2026 homepage yukaindonesia.com dioptimasi lewat 7 commit. Lighthouse 12 lokal (preset mobile, simulated slow 4G, CPU 4x) mengukur median 88 dari 7 run, naik dari 76.',
            '',
            'Masalahnya, kuota harian PageSpeed Insights API sudah habis hari itu, jadi angka resmi dari infrastruktur Google belum pernah didapat setelah perbaikan. Kolom "Page Speed lebih besar sama dengan 90" di SEO Tracker memakai PSI sebagai sumber kebenaran, konsisten dengan baris proyek lain. Historisnya Lighthouse lokal untuk halaman ini membaca sekitar 3 poin lebih tinggi daripada PSI (baseline: PSI 73 vs lokal 76).',
            '',
            'Kuota PSI reset pada tengah malam waktu Pasifik, sekitar 21 jam setelah pengukuran terakhir.',
            '',
            '## Yang Perlu Dikerjakan', '',
            '- Jalankan PSI mobile dan desktop untuk https://www.yukaindonesia.com/ (endpoint `https://www.googleapis.com/pagespeedonline/v5/runPagespeed`, key ada di `GOOGLE_PAGESPEED_API_KEY`).',
            '- Catat angka Performance, LCP, FCP, CLS, TBT untuk keduanya.',
            '- Cek juga apakah `loadingExperience` sudah punya CrUX field data. Per 9 Juli 2026 masih kosong (trafik terlalu rendah).',
            '- Kalau PSI mobile ternyata 90 atau lebih: ubah kolom U (Page Speed) baris 14 SEO Tracker menjadi TRUE.',
            '- Kalau masih di bawah 90: biarkan FALSE, dan lanjutkan ke kartu "Turunkan LCP mobile Yuka ke bawah 2,5 detik".',
            '',
            '## Bahan dan Akses', '',
            '- Repo: `D:\\Projects\\Yuka\\`',
            '- Credentials: `D:\\Projects\\Creativism App\\.env` (`GOOGLE_PAGESPEED_API_KEY`)',
            '- Spreadsheet: https://docs.google.com/spreadsheets/d/1rLkyABNsF459vqPaWbolB3EZp5kudNaXRLYFjUDmhD0/edit (sheet "SEO Tracker", baris 14, kolom U dan V)',
            '- PENTING: petakan kolom berdasarkan nama header di baris 2, bukan urutan posisi.',
            '',
            '## Kriteria Selesai', '',
            '- Angka PSI mobile dan desktop tercatat dengan tanggal pengukuran.',
            '- Status CrUX field data tercatat (ada atau kosong).',
            '- Kolom U di SEO Tracker diperbarui sesuai hasil, dan dibaca ulang untuk konfirmasi.',
            '',
            '## Referensi', '',
            '- PDF Report: `D:\\Projects\\Yuka\\data\\YUKA_Performa_Homepage_Report.pdf`',
            '- Live URL: https://www.yukaindonesia.com/',
        ].join('\n'),
    },
    {
        name: 'Turunkan LCP mobile Yuka ke bawah 2,5 detik (critical CSS + keputusan efek hero)',
        labels: ['Technical', 'UX/CRO'],
        due: '2026-07-16T03:00:00.000Z',
        desc: [
            '## Konteks', '',
            'Task ini adalah tindak lanjut dari: **Optimasi Performa Homepage: Lighthouse Mobile 76 ke 88, Desktop 100** (9 Juli 2026)',
            'Trello card sebelumnya: https://trello.com/c/31WFJ2lb', '',
            '## Latar Belakang', '',
            'Kolom "Core Web Vitals" di SEO Tracker baris 14 masih FALSE. CLS (0,024) dan TBT (3 ms) sudah lolos; yang gagal hanya LCP mobile, 3.416 ms terhadap ambang 2.500 ms.',
            '',
            'Semua perbaikan yang bisa dilakukan tanpa mengubah desain sudah dieksekusi: self-host AOS dan Swiper, hapus GSAP, backdrop hero 95 KB ke 38 KB, preload fetchpriority high, Swiper lazy, AOS desktop-only, kolase hero lazy, GA4 setelah load. Load Delay kini 0 ms.',
            '',
            'Sisa bottleneck adalah Render Delay, sekitar 50 persen dari LCP. Penyebabnya kerja main thread 634 ms, yang dikalikan 4 oleh CPU throttling Lighthouse mobile. Dua sumber utama:',
            '',
            '1. `assets/css/style.min.css` berukuran 51 KB dan render-blocking. Lighthouse melaporkan 0 unused CSS, jadi ukurannya tidak bisa dipangkas dengan sekadar menghapus aturan mati. Yang dibutuhkan adalah ekstraksi critical CSS: aturan above-the-fold di-inline, sisanya dimuat asinkron.',
            '2. Efek visual hero: `backdrop-filter: blur(10px)` pada beberapa kartu kaca, 20 partikel dengan animasi tak berujung, dan gradien overlay setinggi viewport. Ini menyumbang style, layout, dan paint yang tidak bisa dioptimasi lagi tanpa mengurangi efeknya.',
            '',
            'Poin 2 adalah keputusan desain, bukan tuning teknis, sehingga tidak dieksekusi sepihak dan perlu persetujuan Syauqi.',
            '',
            '## Yang Perlu Dikerjakan', '',
            '- Ekstraksi critical CSS untuk homepage. Repo ini tidak punya build step, jadi pilih pendekatan yang tidak menambah tooling rapuh (misalnya generate sekali lewat script, simpan hasilnya, dan dokumentasikan cara regenerate).',
            '- Inline critical CSS di `<head>` index.html, muat `style.min.css` asinkron.',
            '- Pertimbangkan memindahkan `swiper-bundle.min.css` (masih render-blocking, sekitar 166 ms) ke loader lazy yang sama dengan swiper-bundle.min.js. Hati-hati: tanpa CSS-nya slide akan menumpuk vertikal, jadi sediakan aturan penahan tata letak dulu, lalu ukur CLS setelah scroll penuh.',
            '- Ajukan ke Syauqi: apakah `backdrop-filter` pada kartu statistik hero dan 20 partikel boleh dikurangi atau dihapus di viewport mobile saja.',
            '- Setelah setiap perubahan, ukur ulang minimal 5 run dan pakai median, bukan run tunggal. Variansi Lighthouse lokal di mesin ini bisa mencapai 20 poin pada run pertama karena cache dingin.',
            '',
            '## Bahan dan Akses', '',
            '- Repo: `D:\\Projects\\Yuka\\` (static HTML, deploy otomatis ke Vercel dari branch main)',
            '- Berkas kunci: `index.html`, `assets/css/style.min.css`, `assets/css/style.css`, `assets/js/home.js`',
            '- CATATAN: repo ini tidak punya build CSS. Setiap perubahan harus dicerminkan ke `style.css` dan `style.min.css`.',
            '- Credentials: `D:\\Projects\\Creativism App\\.env` (`VERCEL_TOKEN` untuk menunggu state READY, `GOOGLE_PAGESPEED_API_KEY`)',
            '',
            '## Target Output', '',
            '- LCP mobile di bawah 2.500 ms (lab), dan Lighthouse Performance mobile 90 atau lebih.',
            '- CLS tetap di bawah 0,1 setelah scroll penuh ke bawah halaman.',
            '- Galeri Swiper tetap berfungsi: 8 slide, 8 bullet, autoplay aktif.',
            '- AOS tetap me-reveal 44 node di desktop, termasuk saat jendela dilebarkan melewati 768 px setelah halaman dimuat.',
            '- Kolom V (Core Web Vitals) baris 14 SEO Tracker menjadi TRUE, diverifikasi live.',
            '',
            '## Referensi', '',
            '- PDF Report: `D:\\Projects\\Yuka\\data\\YUKA_Performa_Homepage_Report.pdf`',
            '- Kartu terkait: https://trello.com/c/t2pIHlGF (Verifikasi Live 27 Poin SEO Tracker)',
            '- Live URL: https://www.yukaindonesia.com/',
        ].join('\n'),
    },
];

async function main() {
    const labelsRes = await trelloApi('GET', `/1/boards/${BOARD}/labels?fields=id,name`);
    const labelId = (n) => (labelsRes.data.find((l) => l.name === n) || {}).id;

    for (const c of CARDS) {
        // Todo cards are deliberately unassigned; the team picks them up.
        const create = await trelloApi('POST', '/1/cards', { idList: TODO_LIST, name: c.name, desc: c.desc, pos: 'bottom', due: c.due });
        if (create.status !== 200) throw new Error('create failed: ' + JSON.stringify(create.data).slice(0, 200));
        const id = create.data.id;

        for (const ln of c.labels) {
            const lid = labelId(ln);
            if (lid) await trelloApi('POST', `/1/cards/${id}/idLabels?value=${lid}`, null);
            else console.log('  label missing on board:', ln);
        }

        const verify = await trelloApi('GET', `/1/cards/${id}?fields=name,desc,idLabels,due,idMembers`);
        if (/%(0A|23|2[0-9A-F]|3[0-9A-F])/i.test(verify.data.desc)) throw new Error('Rule 0 violated for ' + c.name);
        if (verify.data.idMembers.length) throw new Error('Todo card must stay unassigned: ' + c.name);
        console.log(`todo ok: ${create.data.shortUrl} | labels ${verify.data.idLabels.length} | due ${verify.data.due.slice(0, 10)} | ${c.name.slice(0, 55)}`);
    }

    // Reorder the whole To Do list by due date, nearest deadline on top.
    const cards = (await trelloApi('GET', `/1/lists/${TODO_LIST}/cards?fields=id,due`)).data;
    cards.sort((a, b) => {
        if (!a.due && !b.due) return 0;
        if (!a.due) return 1;
        if (!b.due) return -1;
        return new Date(a.due) - new Date(b.due);
    });
    for (let i = 0; i < cards.length; i++) {
        await trelloApi('PUT', `/1/cards/${cards[i].id}`, { pos: (i + 1) * 1000 });
        if (i % 50 === 0) process.stdout.write(`.`);
        await new Promise((r) => setTimeout(r, 120));
    }
    console.log(`\nreordered ${cards.length} To Do cards by due date`);
}

main().catch((e) => { console.error('FAILED:', e.message); process.exit(1); });
