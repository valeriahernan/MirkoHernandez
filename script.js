// Slideshow automático
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Scroll suave al “ir arriba”
const btnTop = document.getElementById('btn-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    btnTop.style.opacity = '1';
  } else {
    btnTop.style.opacity = '0';
  }

  // Mostrar animaciones de fade-in
  document.querySelectorAll('.fade-in').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
