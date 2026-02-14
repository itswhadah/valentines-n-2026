const noBtn = document.getElementById('nooo');
const yesBtn = document.getElementById('yessir');
const container = document.getElementById('hearts-container');

// 1. Make the "NO" button dodge the mouse
noBtn.addEventListener('mouseover', () => {
    // Calculate random positions within the browser window
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. Action when she clicks "SÍ"
yesBtn.addEventListener('click', () => {
    alert('Obvio que si ❤️');
});

// 3. Logic for the floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Randomly pick between a red or pink heart emoji
    const heartTypes = ['❤️', '💖', '💝', '💕'];
    heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Between 3-5 seconds
    
    container.appendChild(heart);
    
    // Clean up the heart after the animation ends to keep the site fast
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create a new heart every 300 milliseconds
setInterval(createHeart, 300);