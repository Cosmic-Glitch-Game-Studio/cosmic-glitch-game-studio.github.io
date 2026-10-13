const canvas = document.getElementById('stars');
if (canvas) {
  const ctx = canvas.getContext('2d');
   
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
   
  // Resize canvas if window resizes
  window.addEventListener('resize', () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  });
   
  let stars = [];
  for (let i = 0; i < 300; i++) {
    stars.push({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      delta: Math.random() * 0.02
    });
  }
   
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    stars.forEach(star => {
      ctx.globalAlpha = star.alpha;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
      star.alpha += star.delta;
      if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;
    });
    requestAnimationFrame(drawStars);
  }
   
  function startAnimations() {
    drawStars();
  }
   
  window.addEventListener('load', startAnimations);
}

// Auto-inject shooting stars container if not already present in HTML
function initShootingStars() {
  if (!document.querySelector('.shooting-stars')) {
    const container = document.createElement('div');
    container.className = 'shooting-stars';
    container.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < 7; i++) {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      container.appendChild(star);
    }
    document.body.appendChild(container);
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initShootingStars);
} else {
  initShootingStars();
}
