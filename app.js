document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only apply smooth scroll to internal links
        if (this.getAttribute('href').length > 1) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const body = document.body;
    const letters = document.querySelectorAll('.intro-text .letter');
    
    const animationDuration = 0.5; // CSS duration in seconds
    const staggerDelay = 0.1;      // Delay between each letter reveal

    // 1. STAGGER THE TEXT ANIMATION
    letters.forEach((letter, index) => {
        // Apply a unique animation delay to each letter
        letter.style.animationDelay = `${index * staggerDelay}s`;
    });

    // Calculate total time needed for text animation to finish
    const totalTextAnimationTime = (letters.length * staggerDelay) + animationDuration;
    
    // Set a minimum visible time for the entire preloader phase (e.g., 2.5 seconds total)
    const totalPreloaderTime = Math.max(2500, totalTextAnimationTime * 1000 + 500); 


    // 2. CONTROL THE FADE OUT
    setTimeout(function() {
        // Start the fade-out for the preloader
        preloader.classList.add('fade-out');
        
        // Add the 'loaded' class to the body to make the portfolio fade in
        body.classList.add('loaded');

        // Optional: Remove preloader from DOM after its CSS transition finishes (1s)
        setTimeout(function() {
            preloader.remove();
        }, 1000); 

    }, totalPreloaderTime);
});

