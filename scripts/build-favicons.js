// Regenerates favicons from Logo/Logo YUKA.png.
// The old root Icon.ico was 136 KB and was fetched on every page load.
const fs = require('fs');
const path = require('path');
const sharp = require('D:/Projects/Creativism App/node_modules/sharp');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'Logo', 'Logo YUKA.png');
const IMG = path.join(ROOT, 'assets', 'images');

// ICO container: 6-byte header + 16-byte directory entry per image + PNG payloads.
// Windows/Chrome both accept PNG-compressed ICO entries, so no BMP encoding needed.
function buildIco(pngs) {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type: icon
    header.writeUInt16LE(pngs.length, 4);

    const dir = Buffer.alloc(16 * pngs.length);
    let offset = header.length + dir.length;
    pngs.forEach(({ size, data }, i) => {
        const e = i * 16;
        dir.writeUInt8(size >= 256 ? 0 : size, e + 0); // width (0 == 256)
        dir.writeUInt8(size >= 256 ? 0 : size, e + 1); // height
        dir.writeUInt8(0, e + 2);  // palette count
        dir.writeUInt8(0, e + 3);  // reserved
        dir.writeUInt16LE(1, e + 4);  // color planes
        dir.writeUInt16LE(32, e + 6); // bits per pixel
        dir.writeUInt32LE(data.length, e + 8);
        dir.writeUInt32LE(offset, e + 12);
        offset += data.length;
    });
    return Buffer.concat([header, dir, ...pngs.map(p => p.data)]);
}

(async () => {
    fs.mkdirSync(IMG, { recursive: true });

    const png = (size, opts = {}) =>
        sharp(SRC).resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .png({ compressionLevel: 9, ...opts }).toBuffer();

    await sharp(await png(32)).toFile(path.join(IMG, 'favicon-32.png'));
    await sharp(await png(16)).toFile(path.join(IMG, 'favicon-16.png'));

    // iOS ignores transparency and composites onto black, so flatten to white.
    await sharp(SRC).resize(180, 180, { fit: 'contain', background: '#ffffff' })
        .flatten({ background: '#ffffff' })
        .png({ compressionLevel: 9 })
        .toFile(path.join(IMG, 'apple-touch-icon.png'));

    const ico = buildIco([
        { size: 16, data: await png(16) },
        { size: 32, data: await png(32) },
        { size: 48, data: await png(48) },
    ]);
    fs.writeFileSync(path.join(ROOT, 'favicon.ico'), ico);

    for (const f of ['favicon.ico', 'assets/images/favicon-32.png', 'assets/images/favicon-16.png', 'assets/images/apple-touch-icon.png']) {
        console.log(f, fs.statSync(path.join(ROOT, f)).size, 'bytes');
    }
    console.log('old Icon.ico', fs.statSync(path.join(ROOT, 'Icon.ico')).size, 'bytes');
})();
