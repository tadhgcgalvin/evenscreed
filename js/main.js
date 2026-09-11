// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.style.maxHeight = null;
    });
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Hero image carousel
const heroSlides = document.querySelectorAll('.hero-slide');
if (heroSlides.length > 1) {
  let currentHeroSlide = 0;
  setInterval(() => {
    heroSlides[currentHeroSlide].classList.remove('active');
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    heroSlides[currentHeroSlide].classList.add('active');
  }, 4500);
}

// Gallery carousel (manual arrows/dots + auto-advance)
const galleryCarousel = document.getElementById('gallery-carousel');
const gallerySlideCount = galleryCarousel ? galleryCarousel.querySelectorAll('.gallery-carousel-slide').length : 0;
if (galleryCarousel && gallerySlideCount > 0) {
  const gallerySlides = galleryCarousel.querySelectorAll('.gallery-carousel-slide');
  const dotsContainer = document.getElementById('gallery-dots');
  const counterCurrent = document.getElementById('gallery-counter-current');
  let galleryIndex = 0;
  let galleryTimer;

  gallerySlides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to photo ${i + 1}`);
    dot.addEventListener('click', () => goToGallerySlide(i));
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll('.dot');

  function goToGallerySlide(i) {
    gallerySlides[galleryIndex].classList.remove('active');
    dots[galleryIndex].classList.remove('active');
    galleryIndex = (i + gallerySlides.length) % gallerySlides.length;
    gallerySlides[galleryIndex].classList.add('active');
    dots[galleryIndex].classList.add('active');
    counterCurrent.textContent = galleryIndex + 1;
    resetGalleryTimer();
  }

  function resetGalleryTimer() {
    clearInterval(galleryTimer);
    galleryTimer = setInterval(() => goToGallerySlide(galleryIndex + 1), 5000);
  }

  document.getElementById('gallery-prev').addEventListener('click', () => goToGallerySlide(galleryIndex - 1));
  document.getElementById('gallery-next').addEventListener('click', () => goToGallerySlide(galleryIndex + 1));

  resetGalleryTimer();
}
