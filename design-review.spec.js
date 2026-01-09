const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const screenshotDir = path.join(__dirname, 'design-review-screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('=== PHASE 0: PREPARATION ===');
  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  // Initial desktop viewport
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.screenshot({ path: path.join(screenshotDir, '01-desktop-initial.png'), fullPage: true });
  console.log('✓ Desktop initial screenshot captured');

  console.log('\n=== PHASE 1: INTERACTION AND USER FLOW ===');

  // Test navigation links
  const navLinks = await page.locator('nav a').all();
  console.log(`Found ${navLinks.length} navigation links`);

  // Test hover states on main CTA
  const resumeBtn = page.locator('a:has-text("Resume")').first();
  await resumeBtn.hover();
  await page.screenshot({ path: path.join(screenshotDir, '02-resume-hover.png') });
  console.log('✓ Resume button hover state captured');

  // Test mobile menu interaction
  await page.setViewportSize({ width: 375, height: 667 });
  await page.screenshot({ path: path.join(screenshotDir, '03-mobile-initial.png'), fullPage: true });

  const hamburgerMenu = page.locator('label.hamburger input');
  const isVisible = await hamburgerMenu.isVisible();
  console.log(`Hamburger menu visible: ${isVisible}`);

  // Click hamburger to open menu
  await page.locator('label.hamburger').click();
  await page.waitForTimeout(600); // Wait for animation
  await page.screenshot({ path: path.join(screenshotDir, '04-mobile-menu-open.png'), fullPage: true });
  console.log('✓ Mobile menu open captured');

  // Close menu
  await page.locator('label.hamburger').click();
  await page.waitForTimeout(600);
  console.log('✓ Mobile menu closed');

  console.log('\n=== PHASE 2: RESPONSIVENESS TESTING ===');

  // Test various viewport sizes
  const viewports = [
    { width: 375, height: 667, name: 'mobile-375' },
    { width: 768, height: 1024, name: 'tablet-768' },
    { width: 1024, height: 768, name: 'desktop-1024' },
    { width: 1440, height: 900, name: 'desktop-1440' }
  ];

  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.screenshot({
      path: path.join(screenshotDir, `05-responsive-${viewport.name}.png`),
      fullPage: true
    });
    console.log(`✓ ${viewport.name} screenshot captured`);
  }

  console.log('\n=== PHASE 3: VISUAL POLISH ===');
  await page.setViewportSize({ width: 1440, height: 900 });

  // Capture hero section
  const heroSection = page.locator('section[aria-label="Hero Section"]');
  await heroSection.screenshot({ path: path.join(screenshotDir, '06-hero-section.png') });
  console.log('✓ Hero section captured');

  // Scroll to technology stack
  await page.evaluate(() => window.scrollBy(0, 600));
  await page.screenshot({ path: path.join(screenshotDir, '07-tech-stack.png') });
  console.log('✓ Technology stack captured');

  // Scroll to projects
  await page.evaluate(() => window.scrollBy(0, 600));
  await page.screenshot({ path: path.join(screenshotDir, '08-projects.png') });
  console.log('✓ Projects section captured');

  // Footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.screenshot({ path: path.join(screenshotDir, '09-footer.png') });
  console.log('✓ Footer captured');

  console.log('\n=== PHASE 4: ACCESSIBILITY ===');

  // Test keyboard navigation
  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  // Tab through interactive elements
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);
  }
  await page.screenshot({ path: path.join(screenshotDir, '10-keyboard-focus.png') });
  console.log('✓ Keyboard navigation tested');

  // Check for proper HTML structure
  const headings = await page.locator('h1, h2, h3, h4, h5, h6').count();
  console.log(`Found ${headings} headings`);

  const images = await page.locator('img').all();
  console.log(`Found ${images.length} images`);

  let imagesWithoutAlt = 0;
  for (const img of images) {
    const alt = await img.getAttribute('alt');
    if (!alt || alt.trim() === '') {
      imagesWithoutAlt++;
    }
  }
  console.log(`Images without alt text: ${imagesWithoutAlt}`);

  console.log('\n=== PHASE 5: ROBUSTNESS TESTING ===');

  // Test Projects page
  await page.goto('http://localhost:3000/project');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: path.join(screenshotDir, '11-projects-page.png'), fullPage: true });
  console.log('✓ Projects page captured');

  // Test Blog page
  await page.goto('http://localhost:3000/blog');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: path.join(screenshotDir, '12-blog-page.png'), fullPage: true });
  console.log('✓ Blog page captured');

  console.log('\n=== PHASE 7: CONSOLE ERRORS ===');

  // Listen for console messages
  const consoleMessages = [];
  page.on('console', msg => {
    consoleMessages.push({ type: msg.type(), text: msg.text() });
  });

  // Reload to capture console messages
  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  const errors = consoleMessages.filter(m => m.type === 'error');
  const warnings = consoleMessages.filter(m => m.type === 'warning');

  console.log(`Console errors: ${errors.length}`);
  console.log(`Console warnings: ${warnings.length}`);

  if (errors.length > 0) {
    console.log('Errors:', errors);
  }
  if (warnings.length > 0) {
    console.log('Warnings:', warnings);
  }

  // Test horizontal scroll on mobile
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  const hasHorizontalScroll = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log(`\nHorizontal scroll on mobile: ${hasHorizontalScroll}`);

  console.log('\n=== REVIEW COMPLETE ===');
  console.log(`Screenshots saved to: ${screenshotDir}`);

  await browser.close();
})();
