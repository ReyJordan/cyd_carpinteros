const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  slider.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000);

showSlide(currentIndex);