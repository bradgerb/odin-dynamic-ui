// let slideIndex = 1;
// showSlides(slideIndex);

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
  // Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

const previousArrow = document.querySelector(".prev");
previousArrow.addEventListener("click", ()=>{plusSlides(-1)});

const nextArrow = document.querySelector(".next");
nextArrow.addEventListener("click", ()=>{plusSlides(1)});

const dots = document.querySelectorAll(".dot");
for (let i = 0; i < dots.length; i++){
    dots[i].addEventListener("click", ()=>{
        currentSlide(i+1);
    });
}