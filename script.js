const balloonImg = 'balloon.png';

function createBalloon(initial = false) {
   const balloon = document.createElement('img');
   balloon.src = balloonImg;
   balloon.className = 'balloon';

   balloon.style.left = Math.random() * 100 + 'vw';

   const duration = 8 + Math.random() * 6;
   const size = 100 + Math.random() * 300;
   balloon.style.width = `${size}px`;
   balloon.style.animationDuration = `${duration}s`;

   if (initial) {
      const delay = Math.random() * duration;
      balloon.style.animationDelay = `-${delay}s`;
   }

   document.body.appendChild(balloon);

   setTimeout(() => {
      balloon.remove();
   }, (duration + 1) * 5000);
}

window.addEventListener('DOMContentLoaded', () => {
   for (let i = 0; i < 5; i++) {
      createBalloon(true);
   }

   setInterval(() => createBalloon(), 700);
});
