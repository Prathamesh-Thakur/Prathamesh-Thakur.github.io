// Typewriter Effect
const dynamicText = document.querySelector(".dynamic-text");
const words = ["AI Engineer", "Machine Learning Engineer", "Data Scientist", "Data Analyst"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    
    dynamicText.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length) {
        // Typing condition
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        // Deleting condition
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        // Word finished or deleted
        isDeleting = !isDeleting;
        
        if (!isDeleting) {
            // Move to next word
            wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        }
        
        // Pause before typing or deleting
        setTimeout(typeEffect, isDeleting ? 1000 : 200);
    }
}

// Start Typewriter
typeEffect();


// Scroll Animation (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } 
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));