const slideData = [
  {
    title: "Cosmic Glitch Games",
    text: "We design experiences that are easy to pick up and impossible to put down",
    svg: `
    <svg class="slide-svg svg-couch" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="43" y="22" width="34" height="18" rx="2" stroke="#00ffcc" stroke-width="2.5"/>
      <rect class="tv-screen" x="46" y="25" width="28" height="12" rx="1" fill="#ff00ff" opacity="0.5"/>
      <rect class="tv-scan" x="46" y="25" width="28" height="2.5" fill="#00ffcc" opacity="0.8"/>
      <path d="M60 40v4M52 46h16" stroke="#00ffcc" stroke-width="2" stroke-linecap="round"/>
      <path d="M60 46q-3 15 0 31" stroke="#00ffcc" stroke-width="1.5" opacity="0.5"/>
      <rect x="51" y="77" width="18" height="6" rx="2" stroke="#00ffcc" stroke-width="2"/>
      <path d="M13 84q2-13 13-13q11 0 13 13" stroke="#00ffcc" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="26" cy="49" r="6" stroke="#00ffcc" stroke-width="2.5"/>
      <path d="M20 54q6 11 12 0" stroke="#00ffcc" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="23" cy="49" r="1.7" stroke="#00ffcc" stroke-width="1.2"/>
      <circle cx="29" cy="49" r="1.7" stroke="#00ffcc" stroke-width="1.2"/>
      <path d="M24.8 49h2.4" stroke="#00ffcc" stroke-width="1.2"/>
      <path d="M27 70l9 3" stroke="#00ffcc" stroke-width="2.5" stroke-linecap="round"/>
      <rect class="ctl" x="33" y="68" width="12" height="6.5" rx="3.25" stroke="#ff00ff" stroke-width="2"/>
      <path d="M39 70.5v1.5M38.25 71.25h1.5" stroke="#ff00ff" stroke-width="1.2"/>
      <path d="M85 84q1-11 9-11q8 0 9 11" stroke="#00ffcc" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="94" cy="51" r="5" stroke="#00ffcc" stroke-width="2.5"/>
      <path d="M89.5 48q4.5-4 9 0" stroke="#00ffcc" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M92 72l-9 2" stroke="#00ffcc" stroke-width="2.5" stroke-linecap="round"/>
      <rect class="ctl" x="73" y="69" width="12" height="6.5" rx="3.25" stroke="#ff00ff" stroke-width="2"/>
      <path d="M79 71.5v1.5M78.25 72.25h1.5" stroke="#ff00ff" stroke-width="1.2"/>
      <path d="M8 86h104" stroke="#00ffcc" stroke-width="1.5" opacity="0.25"/>
    </svg>`
  },
  {
    title: "Our Philosophy",
    text: "It has to feel right",
    svg: `
    <svg class="slide-svg svg-gamepad" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M40 36h40a22 22 0 0 1 22 22v6a22 22 0 0 1-22 22H40a22 22 0 0 1-22-22V58a22 22 0 0 1 22-22z" stroke="#00ffcc" stroke-width="2.5"/>
      <path d="M33 50v16M25 58h16" stroke="#00ffcc" stroke-width="3" stroke-linecap="round"/>
      <circle class="pad-btn b1" cx="78" cy="54" r="3.5" fill="#ff00ff"/>
      <circle class="pad-btn b2" cx="88" cy="64" r="3.5" fill="#ff00ff"/>
      <circle class="pad-btn b3" cx="78" cy="74" r="3.5" fill="#00ffcc"/>
    </svg>`
  },
  {
    title: "Dedication & Detail",
    text: "The details are the product",
    svg: `
    <svg class="slide-svg svg-search" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="#00ffcc">
        <circle cx="26" cy="36" r="1.6"/><circle cx="34" cy="36" r="1.6"/><circle cx="42" cy="36" r="1.6"/>
        <circle cx="26" cy="44" r="1.6"/><circle cx="34" cy="44" r="1.6" class="hot-dot"/><circle cx="42" cy="44" r="1.6"/>
        <circle cx="26" cy="52" r="1.6"/><circle cx="34" cy="52" r="1.6"/><circle cx="42" cy="52" r="1.6"/>
      </g>
      <g class="glass">
        <circle cx="70" cy="54" r="16" stroke="#00ffcc" stroke-width="2.5"/>
        <path d="M82 66l12 12" stroke="#00ffcc" stroke-width="5" stroke-linecap="round"/>
        <path d="M70 40a14 14 0 0 1 14 14" stroke="#ff00ff" stroke-width="2" stroke-linecap="round"/>
      </g>
    </svg>`
  },
  {
    title: "Built for Everyone",
    text: "Any player. Any device. Any moment",
    svg: `
    <svg class="slide-svg svg-planet" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="60" cy="60" rx="46" ry="17" stroke="#00ffcc" stroke-width="1.5" opacity="0.45"/>
      <ellipse cx="60" cy="60" rx="46" ry="17" stroke="#00ffcc" stroke-width="1" opacity="0.35" transform="rotate(90 60 60)" stroke-dasharray="2 9"/>
      <circle class="planet-core" cx="60" cy="60" r="24" stroke="#ff00ff" stroke-width="2.5"/>
      <circle class="planet-core" cx="60" cy="60" r="15" stroke="#ff00ff" stroke-width="1" opacity="0.35"/>
      <g class="orbit-dot"><circle cx="14" cy="60" r="4" fill="#00ffcc"/></g>
      <g class="orbit-dot2"><circle cx="106" cy="60" r="3" fill="#ff00ff"/></g>
    </svg>`
  },
  {
    title: "Infinite Ambition",
    text: "We play the long game",
    svg: `
    <svg class="slide-svg svg-rocket" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path class="flame" d="M60 84c-6 0-8.5-6-6.5-10 3.5-2 9.5-2 13 0 2 4-.5 10-6.5 10z" fill="#ff00ff" opacity="0.9"/>
      <path d="M60 26l15 36c0 8-6.5 14-15 14s-15-6-15-14l15-36z" stroke="#00ffcc" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="60" cy="49" r="6" stroke="#00ffcc" stroke-width="2"/>
      <path d="M45 58 33 70l12 5M75 58l12 12-12 5" stroke="#00ffcc" stroke-width="2.5" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: "SpreadShift",
    text: "The galaxy fights back. So do you",
    link: "spreadshift/index.html"
  },
  {
    title: "Alien Ascent",
    text: "Make your way to the stars",
    link: "alienascent/index.html"
  }
];

const container = document.getElementById('slides');

// Only dynamically generate slides if not already pre-rendered in HTML
if (container && container.children.length === 0) {
  slideData.forEach(slide => {
    const div = document.createElement('div');
    div.className = 'slide';
    div.innerHTML = `
      <div class="slide-card">
        ${slide.svg ? `<div class="slide-art">${slide.svg}</div>` : ''}
        <h2 class="trippy">${slide.title}</h2>
        <p>${slide.text}</p>
        ${slide.link ? `<a href="${slide.link}" class="slide-cta">Play Now</a>` : ''}
      </div>
    `;
    container.appendChild(div);
  });
}
