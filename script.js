//Initialize AOS library
AOS.init();

//Control Navigation dropdown visibility
function hamburg() {
    document.querySelector(".dropdown").classList.add("active");
}

function cancel() {
    document.querySelector(".dropdown").classList.remove("active");
}

//Animate typewriter effect in main container
const texts = ["DEVELOPER", "DESIGNER", "FREELANCER"];
let textIndex = 0;
let charIndex = 0;

function type() {
    const current = texts[textIndex];
    const typed = current.slice(0, charIndex++);
    document.querySelector('.typewriter-text').textContent = typed;

    if (charIndex <= current.length) {
        setTimeout(type, 100);
    } else {
        setTimeout(() => {
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length;
        type();
        }, 1500); // Pause before next word
    }
}

type();