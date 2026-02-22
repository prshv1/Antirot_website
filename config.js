const SITE_CONFIG = {
  // ── Brand ──
  name: 'AntiRot',
  tagline: 'Guard Your Attention',
  version: 'Beta 0.4',

  basePath: '/Antirot_website/',

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
    chromeWebStore: 'https://chromewebstore.google.com/detail/anti-rot/peicgeopikaehdnnaloamfhhikikegan', // URL slug stays as-is
    linktree: 'https://linktr.ee/prshv1',
    github: 'https://github.com/prshv1',
    twitter: 'https://x.com/prshv07',
    email: 'galaparshva0@gmail.com',
    domain: 'https://prshv1.github.io',
  },

  // ── Demo Assets ──
  demo: {
    image: 'media/product_demo.svg',
  },

  // ── API / Backend ──
  api: {
    base: 'https://anti-rot-341863309794.us-central1.run.app',
  },

  // ── Legal ──
  legal: {
    companyName: 'AntiRot',
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
