const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slides');
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    index = slides.chilElementCount - 1;
  } else if (index >= slides.childElementCount) {
    index = 0;
  }

  slider.style.transform = `translateX(-${index * 20}%)`;
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