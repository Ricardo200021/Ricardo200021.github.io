var slider = document.getElementById("slider");
var slides = slider.getElementsByClassName("slide");
var currentSlide = 0;

function showSlide() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
}

setInterval(showSlide, 1000);


