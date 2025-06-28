const balloonImg = 'balloon.png';

let balloonInterval;

function createBalloon(initial = false) {
   const balloon = document.createElement('img');
   balloon.src = balloonImg;
   balloon.className = 'balloon';

   balloon.style.left = Math.random() * 100 + 'vw';

   const duration = 8 + Math.random() * 6;
   const size = 50 + Math.random() * 150;
   balloon.style.width = `${size}px`;
   balloon.style.animationDuration = `${duration}s`;

   if (initial) {
      const delay = Math.random() * duration;
      balloon.style.animationDelay = `-${delay}s`;
   }

   document.body.appendChild(balloon);

   setTimeout(() => {
      balloon.remove();
   }, (duration + 1) * 1000);
}

function startBalloons() {
   if (!balloonInterval) {
      balloonInterval = setInterval(() => createBalloon(), 7000);
   }
}

function stopBalloons() {
   clearInterval(balloonInterval);
   balloonInterval = null;
}

window.addEventListener('DOMContentLoaded', () => {
   for (let i = 0; i < 2; i++) {
      createBalloon(true);
   }
   startBalloons();
});

document.addEventListener('visibilitychange', () => {
   if (document.hidden) {
      stopBalloons();
   } else {
      startBalloons();
   }
});


function updateScale() {
  const container = document.querySelector('.scale-container');
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const designWidth = 1200;
  const designHeight = 800;

  // Calculate scale for both width and height
  const scaleW = vw / designWidth;
  const scaleH = vh / designHeight;

  // Use the smaller scale to fit both width and height without scroll
  const scale = Math.min(scaleW, scaleH, 1);

  container.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', updateScale);
window.addEventListener('load', updateScale);
