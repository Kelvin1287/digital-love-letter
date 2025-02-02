document.getElementById("envelope").addEventListener("click", function() {
    document.getElementById("wrapper").classList.toggle("open");
    generateRandomHearts();
});

function generateRandomHearts() {
    // Generate hearts every 1-3 seconds
    setInterval(function() {
        const heartsContainer = document.getElementById("hearts-container");
        
        // Create a new heart element
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        
        // Random position for the heart (in percentage) within the full viewport
        const left = Math.random() * 100; // 0% to 100% for horizontal positioning
        const top = Math.random() * 100; // 0% to 100% for vertical positioning
        
        // Randomize the size of the heart
        const size = Math.random() * 30 + 20;
        heart.style.fontSize = `${size}px`;
        
        // Random animation duration and delay
        const duration = Math.random() * 2 + 3;
        const delay = Math.random() * 2;

        // Apply random positions and animation timings
        heart.style.left = `${left}%`;
        heart.style.top = `${top}%`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;
        
        heartsContainer.appendChild(heart);

        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, (duration + delay) * 1000);
    }, Math.random() * 2000 + 1000); // Random interval between 1 and 3 seconds
}

