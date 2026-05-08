const Jimp = require('jimp');

Jimp.read('TAC Logo.jpg').then(image => {
  const colorCounts = {};
  // To avoid noise, let's round colors to nearest multiple of 10
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    let r = this.bitmap.data[idx + 0];
    let g = this.bitmap.data[idx + 1];
    let b = this.bitmap.data[idx + 2];
    const a = this.bitmap.data[idx + 3];

    // ignore transparent
    if (a < 128) return;
    
    // ignore white or very light colors (background)
    if (r > 240 && g > 240 && b > 240) return;
    // ignore black or very dark colors
    if (r < 15 && g < 15 && b < 15) return;

    r = Math.round(r / 10) * 10;
    g = Math.round(g / 10) * 10;
    b = Math.round(b / 10) * 10;

    const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    colorCounts[hex] = (colorCounts[hex] || 0) + 1;
  });

  let maxCount = 0;
  let dominantColor = '';
  for (const hex in colorCounts) {
    if (colorCounts[hex] > maxCount) {
      maxCount = colorCounts[hex];
      dominantColor = hex;
    }
  }

  console.log('Dominant Color:', dominantColor);
}).catch(err => {
  console.error(err);
});
