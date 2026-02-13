// ══════════════════════════════════════════
// Anti-Rot Site Config
// Edit links here — all pages pull from this file
// ══════════════════════════════════════════

const SITE_CONFIG = {
  // ── Brand ──
  name: 'Anti-Rot',
  tagline: 'Guard Your Attention',
  version: 'Beta 0.4',

  // ── Page URLs ──
  // Update these if you change hosting or structure
  // ── Base Path ──
  // Set to '/' for custom domain, or '/repo-name/' for GitHub Pages
  basePath: '/Antirot_web/',

  pages: {
    home: 'index.html',
    privacy: 'privacy.html',
    contact: 'contact.html',
    // Future pages
    login: '#',
    dashboard: '#',
    settings: '#',
  },

  // ── External Links ──
  links: {
    chromeWebStore: 'https://github.com/prshv1/Anti_Rot', // Update when published
    linktree: 'https://linktr.ee/prshv1',
    github: 'https://github.com/prshv1',
    twitter: 'https://x.com/prshv07',
    email: 'galaparshva0@gmail.com',
    domain: 'https://antirot.in',
  },

  // ── API / Backend ──
  api: {
    base: 'https://anti-rot-341863309794.us-central1.run.app',
  },

  // ── Legal ──
  legal: {
    companyName: 'Anti-Rot',
    contactEmail: 'galaparshva0@gmail.com',
    effectiveDate: 'February 2026',
  },
};

// Make config globally available
if (typeof window !== 'undefined') {
  window.SITE_CONFIG = SITE_CONFIG;
  // Helper: resolve a page path with basePath
  window.pageURL = function(page) {
    if (page === '#') return '#';
    return SITE_CONFIG.basePath + page;
  };
}
