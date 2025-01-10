

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
