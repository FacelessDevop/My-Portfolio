

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.width = bar.getAttribute('class').includes("html") ? "90%" :
                              bar.getAttribute('class').includes("css") ? "85%" :
                              bar.getAttribute('class').includes("js") ? "80%" :
                              bar.getAttribute('class').includes("bootstrap") ? "75%" :
                              bar.getAttribute('class').includes("react") ? "70%" :
                              bar.getAttribute('class').includes("node") ? "65%" : "0%";
        }, index * 300); // Delays animations for step-by-step effect
    });
});
AOS.init({
    duration: 1000,
    easing: "ease-in-out",
});
document.addEventListener("DOMContentLoaded", () => {
    const texts = ["Frontend Designer", "Freelancer", "Web Developer", "UI/UX Enthusiast"];
    const typingSpeed = 100; // milliseconds
    const erasingSpeed = 50; // milliseconds
    const delayBetweenTexts = 2000; // milliseconds
    const typingTextElement = document.getElementById("typing-text");

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting && charIndex < texts[textIndex].length) {
            typingTextElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            typingTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, erasingSpeed);
        } else if (!isDeleting && charIndex === texts[textIndex].length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenTexts);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // Loop back to the first text
            setTimeout(typeEffect, typingSpeed);
        }
    }

    typeEffect();
});
