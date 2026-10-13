/**
 * social-menu.js
 * Injects the fixed side social menu into any page that includes this script.
 * To update social links, edit the `links` array below — no other files need changing.
 */

(function () {
  const links = [
    {
      label: 'BlueSky',
      href:  'https://bsky.app/profile/cosmicglitchgames.bsky.social',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.204-.659-.299-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
      </svg>`
    },
    {
      label: 'Instagram',
      href:  'https://instagram.com/cosmicglitchgames',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>`
    },
    {
      label: 'X (Twitter)',
      href:  'https://x.com/CosmicGlitchGS',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>`
    }
  ];

  const menu = document.createElement('div');
  menu.className = 'side-menu';
  menu.setAttribute('aria-label', 'Social Media Links');
  menu.innerHTML = links.map(({ label, href, svg }) => `
    <a href="${href}" target="_blank" rel="noopener noreferrer" class="side-btn" title="${label}" aria-label="${label}">
      ${svg}
    </a>
  `).join('');

  document.body.appendChild(menu);
})();
