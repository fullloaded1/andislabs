const sharp = require('sharp');
async function run() {
  try {
    const { data, info } = await sharp('public/logo.png').ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    for (let i = 0; i < data.length; i += info.channels) {
      const r = data[i], g = data[i+1], b = data[i+2];
      const brightness = (r + g + b) / 3;
      
      // If the pixel is very bright (white-ish), make it fully transparent
      if (brightness > 245) {
        data[i+3] = 0;
      } 
      // If it's somewhat bright (edge of the text), give it partial transparency to avoid white fringing
      else if (brightness > 200) {
        const alpha = Math.max(0, 255 - ((brightness - 200) * (255 / 45)));
        data[i+3] = Math.floor(alpha);
      }
    }
    await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
      .png().toFile('public/logo-transparent.png');
    console.log("Done");
  } catch(e) {
    console.error(e);
  }
}
run();
