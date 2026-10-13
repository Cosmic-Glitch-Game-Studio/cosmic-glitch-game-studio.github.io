/**
 * platforms.js
 * Single source of truth for every game's platform availability and links.
 *
 * TO ADD A NEW GAME:
 *   1. Add an entry to GAME_PLATFORMS keyed by your game's ID string.
 *   2. Set `available: true` for each platform you've shipped on.
 *   3. Call renderPlatforms('your-game-id') in the game's index.html.
 *
 * TO LAUNCH ON A NEW PLATFORM:
 *   Find the game entry below, flip `available` to true, and add the href.
 *   No HTML files need touching.
 */
 
// ── SHARED SVG ICONS ─────────────────────────────────────────────────────────
const ICONS = {
  googlePlay: `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.18 23.76C3.59 24 4.1 23.97 4.56 23.7L15.47 12L4.56.3C4.1.03 3.59 0 3.18.24 2.47.65 2 1.44 2 2.34v19.32c0 .9.47 1.69 1.18 2.1z" fill="#EA4335"/>
      <path d="M19.82 10.2L17.2 8.73 14.12 12l3.08 3.27 2.62-1.47C20.61 13.36 21 12.72 21 12s-.39-1.36-1.18-1.8z" fill="#FBBC04"/>
      <path d="M4.56 23.7l10.91-11.7-2.91-2.91L3.18 23.76c.12.07.25.1.39.1.33 0 .67-.05.99-.16z" fill="#34A853"/>
      <path d="M15.47.3 4.56 12l9.38 9.91c.31-.1.6-.28.84-.52L20.18 14c.15-.08.3-.18.44-.28a2.98 2.98 0 0 0 0-3.44c-.14-.1-.29-.2-.44-.28L14.78 6.8 15.47.3z" fill="#4285F4"/>
    </svg>`,
 
  appStore: `
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>`,
 
  pc: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>`,
 
  itchio: `
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.326 0 2.426-1.1 2.426-2.41 0 1.31 1.07 2.41 2.395 2.41 1.326 0 2.367-1.1 2.367-2.41 0 1.31 1.1 2.41 2.487 2.41h.024c1.387 0 2.488-1.1 2.488-2.41 0 1.31 1.04 2.41 2.366 2.41 1.326 0 2.396-1.1 2.396-2.41 0 1.31 1.1 2.41 2.425 2.41C22.78 8.43 24 7.283 24 5.98V4.95c-.02-.622-2.08-2.99-3.13-3.612C19.486.314 4.205.55 3.13 1.338zm9.954 5.7c-.47.46-1.12.74-1.866.74h-.024c-.748 0-1.4-.284-1.872-.748-.47.46-1.12.748-1.896.748a2.768 2.768 0 0 1-1.482-.427v5.568c.34-.07 1.808-.36 2.95-.525l.63 4.748s.877-.088 2.44-.088c1.562 0 2.44.088 2.44.088l.63-4.748c1.14.163 2.61.454 2.95.525V7.35a2.768 2.768 0 0 1-1.48.427c-.78 0-1.428-.288-1.9-.74h.08zm-1.89 4.083c.618 0 1.157.085 1.555.14l-.433 3.27s-.498-.045-1.122-.045c-.625 0-1.123.046-1.123.046l-.432-3.27c.396-.056.936-.14 1.554-.14z"/>
    </svg>`
};
 
// ── GAME PLATFORM REGISTRY ───────────────────────────────────────────────────
const GAME_PLATFORMS = {
 
  'alienascent': [
    {
      id:          'google-play',
      name:        'Google Play',
      available:   true,
      action:      'Download',
      href:        'https://play.google.com/store/apps/details?id=com.cosmicglitchgames.alienascent',
      androidHref: 'market://details?id=com.cosmicglitchgames.alienascent',
      icon:        ICONS.googlePlay
    },
    {
      id:        'app-store',
      name:      'App Store',
      available: false,
      action:    'Download',
      href:      '#',
      icon:      ICONS.appStore
    },
    {
      id:        'pc',
      name:      'PC / Desktop',
      available: false,
      action:    'Download',
      href:      '#',
      icon:      ICONS.pc
    }
  ],
 
  'spreadshift': [
    {
      id:        'browser',
      name:      'Web Browser',
      available: true,
      action:    'Play',
      href:      'https://cosmicglitchgames.itch.io/spreadshift',
      icon:      ICONS.itchio
    },
    {
      id:          'google-play',
      name:        'Google Play',
      available:   false,
      action:      'Download',
      href:        '#',
      androidHref: '#',
      icon:        ICONS.googlePlay
    },
    {
      id:        'app-store',
      name:      'App Store',
      available: false,
      action:    'Download',
      href:      '#',
      icon:      ICONS.appStore
    },
    {
      id:        'pc',
      name:      'PC / Desktop',
      available: false,
      action:    'Download',
      href:      '#',
      icon:      ICONS.pc
    }
  ]
 
};
 
// ── RENDERER ─────────────────────────────────────────────────────────────────
function renderPlatforms(gameId) {
  const grid = document.getElementById('platforms-grid');
  if (!grid) {
    console.warn('renderPlatforms: no #platforms-grid element found.');
    return;
  }
 
  const platforms = GAME_PLATFORMS[gameId];
  if (!platforms) {
    console.warn(`renderPlatforms: no entry found for game id "${gameId}".`);
    return;
  }
 
  const isAndroid = /Android/i.test(navigator.userAgent);
 
  platforms.forEach(p => {
    if (!p.available) return; // hidden until flipped to true
 
    const href = (p.id === 'google-play' && isAndroid && p.androidHref)
      ? p.androidHref
      : p.href;
 
    const card = document.createElement('a');
    card.className = 'platform-card';
    card.href      = href;
    card.target    = '_blank';
    card.rel       = 'noopener noreferrer';
    card.innerHTML = `
      <div class="platform-icon">${p.icon}</div>
      <span class="platform-name">${p.name}</span>
      <span class="platform-action">${p.action}</span>
    `;
    grid.appendChild(card);
  });
}
