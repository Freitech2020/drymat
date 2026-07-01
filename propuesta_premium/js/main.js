// Efecto Scroll Header
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// FAQ Logic (First one closed by default as requested)
function toggleFaq(button) {
  const item = button.parentElement;
  const answer = item.querySelector('.faq-answer');
  const icon = button.querySelector('.faq-icon');
  
  const isActive = item.classList.contains('active');
  
  // Close all other FAQs
  document.querySelectorAll('.faq-item').forEach(faq => {
    faq.classList.remove('active');
    faq.querySelector('.faq-answer').style.maxHeight = null;
    faq.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
  });
  
  // If it wasn't active, open it
  if (!isActive) {
    item.classList.add('active');
    answer.style.maxHeight = answer.querySelector('.faq-answer-inner').scrollHeight + "px";
    icon.style.transform = 'rotate(45deg)';
  }
}

// Modal Logic
const modalOverlay = document.getElementById('modalOverlay');

function openModal() {
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on outside click
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
    closeModal();
  }
});
