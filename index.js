document.addEventListener('DOMContentLoaded', function () {
  const accordionBtns = document.querySelectorAll('.accordion-btn');

  accordionBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      const content = btn.nextElementSibling;
      const activeContent = document.querySelector('.active');
      if (activeContent && activeContent !== content) {
        activeContent.classList.remove('active');
      }
      content.classList.toggle('active');
    });
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll('.img-carousel img');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
