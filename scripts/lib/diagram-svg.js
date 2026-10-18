'use strict';
// Pembuat diagram SVG sederhana untuk gambar isi artikel YUKA (alur, kartu, daftar periksa).
// Teks ditulis sebagai <text> (bukan raster), warna mengikuti brand: navy #2B3A67, gold #FFD700,
// cyan #00BCD4, merah #E53935. Kanvas 1200x760 agar tidak terpotong oleh max-height figure 560px.
const W = 1200, H = 760;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function wrap(text, max) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max) { if (cur) lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim();
  }
  if (cur) lines.push(cur);
  return lines;
}

function tspans(lines, x, y, lh, attrs = '') {
  return lines.map((l, i) => `<text x="${x}" y="${y + i * lh}" ${attrs}>${esc(l)}</text>`).join('');
}

function frame(title, subtitle, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(title)}">
<rect width="${W}" height="${H}" fill="#F7F8FC"/>
<rect width="${W}" height="96" fill="#2B3A67"/>
<rect y="96" width="${W}" height="6" fill="#FFD700"/>
<text x="48" y="58" font-family="Poppins, Arial, sans-serif" font-size="34" font-weight="700" fill="#FFFFFF">${esc(title)}</text>
${subtitle ? `<text x="48" y="142" font-family="Poppins, Arial, sans-serif" font-size="22" fill="#4A5578">${esc(subtitle)}</text>` : ''}
${inner}
<text x="${W - 48}" y="${H - 22}" text-anchor="end" font-family="Poppins, Arial, sans-serif" font-size="18" fill="#7A84A3">Diagram: Tim YUKA (yukaindonesia.com)</text>
</svg>
`;
}

/** Alur langkah bernomor, 2 baris x n/2 kolom. steps: [{h, d}] */
function flow(title, subtitle, steps) {
  const cols = Math.ceil(steps.length / 2);
  const bw = (W - 96 - (cols - 1) * 36) / cols, bh = 250;
  let inner = '';
  steps.forEach((s, i) => {
    const r = Math.floor(i / cols), c = i % cols;
    const x = 48 + c * (bw + 36), y = 176 + r * (bh + 40);
    inner += `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="18" fill="#FFFFFF" stroke="#2B3A67" stroke-width="2"/>`;
    inner += `<circle cx="${x + 38}" cy="${y + 40}" r="24" fill="#FFD700"/><text x="${x + 38}" y="${y + 49}" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-size="24" font-weight="700" fill="#2B3A67">${i + 1}</text>`;
    inner += tspans(wrap(s.h, Math.floor((bw - 90) / 13)), x + 74, y + 36, 28, 'font-family="Poppins, Arial, sans-serif" font-size="23" font-weight="700" fill="#2B3A67"');
    inner += tspans(wrap(s.d, Math.floor(bw / 11.5)), x + 24, y + 108, 27, 'font-family="Poppins, Arial, sans-serif" font-size="19" fill="#333B57"');
    if (c < cols - 1 && i < steps.length - 1) inner += `<path d="M${x + bw + 6} ${y + bh / 2} l24 0 m-10 -10 l10 10 l-10 10" stroke="#00BCD4" stroke-width="4" fill="none"/>`;
  });
  return frame(title, subtitle, inner);
}

/** Kartu perbandingan berwarna. cards: [{h, items: [..], color}] */
function cards(title, subtitle, list) {
  const n = list.length;
  const bw = (W - 96 - (n - 1) * 28) / n;
  const need = (card) => 116 + card.items.reduce((t, it) => t + wrap(it, Math.floor(bw / 12.5)).length * 26 + 16, 0) + 14;
  const bh = Math.min(540, Math.max(...list.map(need)));
  let inner = '';
  list.forEach((card, i) => {
    const x = 48 + i * (bw + 28), y = 176;
    const col = card.color || '#2B3A67';
    inner += `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="18" fill="#FFFFFF" stroke="${col}" stroke-width="3"/>`;
    inner += `<rect x="${x}" y="${y}" width="${bw}" height="78" rx="18" fill="${col}"/><rect x="${x}" y="${y + 50}" width="${bw}" height="28" fill="${col}"/>`;
    inner += tspans(wrap(card.h, Math.floor(bw / 14.5)), x + 22, y + 34, 28, 'font-family="Poppins, Arial, sans-serif" font-size="23" font-weight="700" fill="#FFFFFF"');
    let yy = y + 116;
    for (const it of card.items) {
      const ls = wrap(it, Math.floor(bw / 12.5));
      inner += `<circle cx="${x + 26}" cy="${yy - 7}" r="6" fill="${col}"/>`;
      inner += tspans(ls, x + 42, yy, 26, 'font-family="Poppins, Arial, sans-serif" font-size="19" fill="#333B57"');
      yy += ls.length * 26 + 16;
    }
  });
  return frame(title, subtitle, inner);
}

/** Tabel visual sederhana: header + baris. rows: [[..],[..]] */
function grid(title, subtitle, head, rows, widths) {
  const tw = W - 96;
  const ws = widths || head.map(() => tw / head.length);
  let inner = '';
  let y = 172;
  const rowH = (cells) => Math.max(...cells.map((c, i) => wrap(c, Math.floor(ws[i] / 11.5)).length)) * 26 + 26;
  let x = 48;
  inner += `<rect x="48" y="${y}" width="${tw}" height="56" fill="#2B3A67"/>`;
  head.forEach((h, i) => { inner += `<text x="${x + 16}" y="${y + 36}" font-family="Poppins, Arial, sans-serif" font-size="21" font-weight="700" fill="#FFFFFF">${esc(h)}</text>`; x += ws[i]; });
  y += 56;
  rows.forEach((r, ri) => {
    const h = rowH(r);
    inner += `<rect x="48" y="${y}" width="${tw}" height="${h}" fill="${ri % 2 ? '#FFFFFF' : '#EEF1F8'}" stroke="#D5DAE8"/>`;
    x = 48;
    r.forEach((c, i) => {
      inner += tspans(wrap(c, Math.floor(ws[i] / 11.5)), x + 16, y + 32, 26, `font-family="Poppins, Arial, sans-serif" font-size="19" ${i === 0 ? 'font-weight="700" fill="#2B3A67"' : 'fill="#333B57"'}`);
      x += ws[i];
    });
    y += h;
  });
  if (y > H - 50) throw new Error(`grid "${title}" terlalu tinggi (${y}px), ringkas isinya`);
  return frame(title, subtitle, inner);
}

module.exports = { flow, cards, grid, wrap };
