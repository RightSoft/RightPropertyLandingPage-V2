import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesToOptimize = [
  { input: 'src/assets/made-to-fit.png', output: 'src/assets/made-to-fit.webp' },
  { input: 'src/assets/level-up-marketing.png', output: 'src/assets/level-up-marketing.webp' },
  { input: 'src/assets/space.png', output: 'src/assets/space.webp' },
  { input: 'src/assets/surface.png', output: 'src/assets/surface.webp' },
  { input: 'src/assets/built-in-email.png', output: 'src/assets/built-in-email.webp' },
  { input: 'src/assets/fully-interactive.png', output: 'src/assets/fully-interactive.webp' },
  { input: 'src/assets/mobile_insights.png', output: 'src/assets/mobile_insights.webp' }
];

async function optimizeImages() {
  for (const image of imagesToOptimize) {
    try {
      if (fs.existsSync(image.input)) {
        await sharp(image.input)
          .webp({ quality: 85, effort: 6 })
          .toFile(image.output);
        
        const originalSize = fs.statSync(image.input).size;
        const optimizedSize = fs.statSync(image.output).size;
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        console.log(`✓ ${image.input} → ${image.output} (${savings}% smaller)`);
      }
    } catch (error) {
      console.error(`Error optimizing ${image.input}:`, error);
    }
  }
}

optimizeImages().then(() => {
  console.log('Image optimization complete!');
}); 