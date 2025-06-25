import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesToOptimize = [
  { input: 'src/assets/wall_desktop.jpg', output: 'src/assets/wall_desktop_optimized.webp' },
  { input: 'src/assets/enhanced.webp', output: 'src/assets/enhanced_optimized.webp' },
  { input: 'src/assets/gallery/laptop.webp', output: 'src/assets/gallery/laptop_optimized.webp' },
  { input: 'src/assets/gallery/lounge01.webp', output: 'src/assets/gallery/lounge01_optimized.webp' },
  { input: 'src/assets/gallery/lounge02.webp', output: 'src/assets/gallery/lounge02_optimized.webp' },
  { input: 'src/assets/gallery/lounge03.webp', output: 'src/assets/gallery/lounge03_optimized.webp' },
  { input: 'src/assets/gallery/lounge04.webp', output: 'src/assets/gallery/lounge04_optimized.webp' },
  { input: 'src/assets/made-to-fit.png', output: 'src/assets/made-to-fit.webp' },
  { input: 'src/assets/level-up-marketing.png', output: 'src/assets/level-up-marketing.webp' },
  { input: 'src/assets/space.png', output: 'src/assets/space.webp' },
  { input: 'src/assets/surface.png', output: 'src/assets/surface.webp' },
  { input: 'src/assets/built-in-email.png', output: 'src/assets/built-in-email.webp' },
  { input: 'src/assets/fully-interactive.png', output: 'src/assets/fully-interactive.webp' },
  { input: 'src/assets/mobile_insights.png', output: 'src/assets/mobile_insights.webp' },
  // New PNG images to optimize
  { input: 'src/assets/dark_logo.png', output: 'src/assets/dark_logo.webp' },
  { input: 'src/assets/binary.png', output: 'src/assets/binary.webp' },
  { input: 'src/assets/white_rp_logo.png', output: 'src/assets/white_rp_logo.webp' },
  { input: 'src/assets/email_mobile.png', output: 'src/assets/email_mobile.webp' },
  { input: 'src/assets/seo-ready.png', output: 'src/assets/seo-ready.webp' },
  { input: 'src/assets/cms_mobile.png', output: 'src/assets/cms_mobile.webp' },
  { input: 'src/assets/switch_mobile.png', output: 'src/assets/switch_mobile.webp' },
  { input: 'src/assets/interactive_mobile.png', output: 'src/assets/interactive_mobile.webp' },
  { input: 'src/assets/r-block.png', output: 'src/assets/r-block.webp' },
  { input: 'src/assets/inner-circle.png', output: 'src/assets/inner-circle.webp' },
  { input: 'src/assets/powerful_mobile.png', output: 'src/assets/powerful_mobile.webp' },
  { input: 'src/assets/easy_onboarding.png', output: 'src/assets/easy_onboarding.webp' },
  // Icon files - keeping as PNG for compatibility
  // { input: 'src/assets/icons/check_circle_blue.png', output: 'src/assets/icons/check_circle_blue.webp' },
  // { input: 'src/assets/icons/check_circle.png', output: 'src/assets/icons/check_circle.webp' },
  // { input: 'src/assets/icons/chevron_left.png', output: 'src/assets/icons/chevron_left.webp' },
  // { input: 'src/assets/icons/chevron_right.png', output: 'src/assets/icons/chevron_right.webp' },
  // { input: 'src/assets/icons/magic_stick.png', output: 'src/assets/icons/magic_stick.webp' },
  // { input: 'src/assets/icons/slider.png', output: 'src/assets/icons/slider.webp' }
];

async function optimizeImages() {
  console.log('🚀 Starting image optimization...\n');
  
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
      } else {
        console.log(`⚠️  ${image.input} not found`);
      }
    } catch (error) {
      console.error(`❌ Error optimizing ${image.input}:`, error.message);
    }
  }
  
  console.log('\n🎉 Image optimization complete!');
}

optimizeImages(); 