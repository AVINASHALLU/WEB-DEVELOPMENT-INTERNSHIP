const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;
const imageCount = images.length;

// Create dots
images.forEach((_, idx) => {
  const dot = document.createElement('span');
  dot.classList.add('carousel-dot');
  if (idx === 0) dot.classList.add('active');
  dot.setAttribute('tabindex', 0);
  dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
  dot.addEventListener('click', () => moveTo(idx));
  dot.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') moveTo(idx);
  });
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.carousel-dot');

function updateTrack() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  images.forEach(img => img.classList.remove('active'));
  images[currentIndex].classList.add('active');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function moveTo(idx) {
  currentIndex = idx;
  updateTrack();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imageCount) % imageCount;
  updateTrack();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imageCount;
  updateTrack();
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'ArrowRight') nextImage();
});

// Initialize
updateTrack();