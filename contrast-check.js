// Color contrast checker for WCAG 2.1 AA compliance
const colors = {
  primary: "#A293FF",
  secondary: "#00F0FF",
  accent: "#000000",
  accent2: "#8E8E8E",
  gray: "#F1F1F1",
  white: "#FFFFFF",
};

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
}

console.log("=== Color Contrast Analysis (WCAG 2.1 AA requires 4.5:1 for normal text, 3:1 for large text) ===\n");

// Common color combinations in the UI
const combinations = [
  { fg: colors.accent, bg: colors.white, name: "Black text on White" },
  { fg: colors.accent2, bg: colors.white, name: "Gray text (accent2) on White" },
  { fg: colors.primary, bg: colors.white, name: "Primary gradient start on White" },
  { fg: colors.secondary, bg: colors.white, name: "Secondary gradient end on White" },
  { fg: colors.white, bg: colors.primary, name: "White text on Primary (gradient button)" },
  { fg: colors.white, bg: colors.secondary, name: "White text on Secondary (gradient button)" },
  { fg: colors.accent, bg: colors.gray, name: "Black text on Gray background" },
];

combinations.forEach(combo => {
  const ratio = getContrastRatio(combo.fg, combo.bg);
  const passesNormal = ratio >= 4.5;
  const passesLarge = ratio >= 3.0;

  console.log(`${combo.name}:`);
  console.log(`  Ratio: ${ratio.toFixed(2)}:1`);
  console.log(`  Normal text (4.5:1): ${passesNormal ? '✓ PASS' : '✗ FAIL'}`);
  console.log(`  Large text (3:1): ${passesLarge ? '✓ PASS' : '✗ FAIL'}`);
  console.log();
});
