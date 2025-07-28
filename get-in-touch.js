// Animate headings on scroll
const animatedHeadings = document.querySelector('.animated-headings');
function onScrollHeadings() {
  const rect = animatedHeadings.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.7) {
    animatedHeadings.classList.add('visible');
    window.removeEventListener('scroll', onScrollHeadings);
  }
}
window.addEventListener('scroll', onScrollHeadings);
onScrollHeadings();

// Modal logic
const openBtn = document.getElementById('open-contact-modal');
const closeBtn = document.getElementById('close-contact-modal');
const modal = document.getElementById('contact-modal');
const backdrop = document.getElementById('modal-backdrop');

openBtn.addEventListener('click', () => {
  modal.classList.add('active');
  backdrop.classList.add('active');
});
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  backdrop.classList.remove('active');
});
backdrop.addEventListener('click', () => {
  modal.classList.remove('active');
  backdrop.classList.remove('active');
}); 