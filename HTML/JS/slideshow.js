// JavaScript for the slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  const slideContents = document.querySelectorAll(".slide-content");

  // Hide all slides and slide contents
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slideContents[i].style.display = "none";
  }

  slideIndex++;

  // Reset the index if it exceeds the number of slides
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide and slide content
  slides[slideIndex - 1].style.display = "block";
  slideContents[slideIndex - 1].style.display = "block";

  // Change slide every 5 seconds (adjust the interval as needed)
  setTimeout(showSlides, 5000);
}


function showSlide(slideIndex) {
    if (slideIndex >= slides.length) {
      currentSlide = 0;
    } else if (slideIndex < 0) {
      currentSlide = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'block';
  }

  function moveSlider(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
  }

  prevButton.addEventListener('click', () => moveSlider(-1));
  nextButton.addEventListener('click', () => moveSlider(1));

  // Show the initial slide
  showSlide(currentSlide);
