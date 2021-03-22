function openModal() {
    document.querySelector("#gallery-modal").style.display = "block";
}

function closeModal() {
    document.querySelector("#gallery-modal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    const slidesGallery = document.getElementsByClassName("gallery__second--item");
    const dots = document.getElementsByClassName("third--img");
    const imgText = document.getElementById("gallery--text__name");

    if (n > slidesGallery.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slidesGallery.length
    }
    for (i = 0; i < slidesGallery.length; i++) {
        slidesGallery[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slidesGallery[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    imgText.innerHTML = dots[slideIndex - 1].alt;


}