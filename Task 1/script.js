// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact modal functionality
const contactLink = document.getElementById('contactLink');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');
const contactForm = document.getElementById('contactForm');

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  contactModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  contactModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = 'none';
  }
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Simple form submission logic, just alert the values for demo
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (name && email && message) {
    alert(`Thank you for contacting us, ${name}! We will get back to you soon.`);
    contactForm.reset();
    contactModal.style.display = 'none';
  } else {
    alert('Please fill out all fields.');
  }
});
