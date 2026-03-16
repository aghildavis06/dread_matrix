import fs from 'fs';
import { PNG } from 'pngjs';

const filePath = './src/assets/images/4-Photoroom1.png';

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

fs.createReadStream(filePath)
  .pipe(new PNG())
  .on('parsed', function () {
    const freq = new Map();
    let rSum = 0, gSum = 0, bSum = 0, count = 0;

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = (this.width * y + x) << 2;
        const r = this.data[idx];
        const g = this.data[idx + 1];
        const b = this.data[idx + 2];
        const a = this.data[idx + 3];
        if (a < 128) continue; // skip transparent
        rSum += r; gSum += g; bSum += b; count++;
        const key = `${r},${g},${b}`;
        freq.set(key, (freq.get(key) || 0) + 1);
      }
    }

    if (count === 0) {
      console.error('No opaque pixels found.');
      process.exit(1);
    }

    const avgR = Math.round(rSum / count);
    const avgG = Math.round(gSum / count);
    const avgB = Math.round(bSum / count);

    const averageHex = rgbToHex(avgR, avgG, avgB);

    const top = Array.from(freq.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([k, v]) => ({ rgb: k, count: v, hex: rgbToHex(...k.split(',').map(n => +n)) }));

    console.log('Average color:', averageHex);
    console.log('Top colors:');
    top.forEach((t) => console.log(t.hex, `(${t.count})`));
  })
  .on('error', (err) => {
    console.error('Error reading PNG:', err.message);
    process.exit(1);
  });
