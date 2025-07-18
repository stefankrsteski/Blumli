const balloonImg = 'balloon.png';

let balloonInterval;

function createBalloon(initial = false) {
    const wrapper = document.createElement('div');
    wrapper.className = 'balloon-wrapper';

    const balloon = document.createElement('img');
    balloon.src = balloonImg;
    balloon.className = 'balloon';
    balloon.alt = 'Balloon Icon';

    const size = 50 + Math.random() * 150;
    const duration = 8 + Math.random() * 6;
    const delay = initial ? Math.random() * duration : 0;

    wrapper.style.left = Math.random() * 100 + 'vw';
    wrapper.style.width = `${size}px`;
    wrapper.style.animation = `floatUp ${duration}s linear ${ - delay}s forwards`;

    balloon.style.width = '100%';

    const wobbleDuration = 6 + Math.random() * 4; // between 6s and 10s
    balloon.style.animation = `wobble ${wobbleDuration}s ease-in-out infinite`;

    wrapper.appendChild(balloon);
    document.body.appendChild(wrapper);

    setTimeout(() => {
        wrapper.remove();
    }, (duration + 1) * 1000);
}

function startBalloons() {
    if (!balloonInterval) {
        balloonInterval = setInterval(() => {
            const count = Math.floor(Math.random() * 4) + 2; // Random 2 to 5 balloons per wave
            for (let i = 0; i < count; i++) {
                createBalloon();
            }
        }, 12000); // Every 12 seconds, one wave
    }
}

function stopBalloons() {
    clearInterval(balloonInterval);
    balloonInterval = null;
}

window.addEventListener('DOMContentLoaded', () => {
    // Spawn 5 balloons when the website is opened
    for (let i = 0; i < 5; i++) {
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

// Toggle entire FAQ section
const faqToggleBtn = document.getElementById("faq-toggle-btn");
const faqContent = document.getElementById("faq-content");

faqToggleBtn.addEventListener("click", () => {
    const isExpanded = faqToggleBtn.getAttribute("aria-expanded") === "true";
    faqToggleBtn.setAttribute("aria-expanded", String(!isExpanded));
    faqContent.classList.toggle("expanded");
});

// Toggle individual questions
document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const isExpanded = btn.getAttribute("aria-expanded") === "true";

        // Toggle ARIA and class
        btn.setAttribute("aria-expanded", String(!isExpanded));
        item.classList.toggle("expanded");
    });
});
