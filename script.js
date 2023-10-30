let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-images")[0];
    let totalSlides = slides.getElementsByTagName("img").length;

    if (n >= totalSlides) { slideIndex = 0; }
    if (n < 0) { slideIndex = totalSlides - 1; }

    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}
