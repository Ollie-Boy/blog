document.addEventListener("DOMContentLoaded", function () {
  const landing = document.getElementById('landing');
  const homepage = document.getElementById('homepage-wrapper');
  const enterBtn = document.getElementById('enter-btn');

  // Hide homepage initially
  homepage.classList.add('hidden');

  // Prevent scroll while landing is visible
  document.body.style.overflow = 'hidden';

  // Clicking the button reveals homepage
  enterBtn.addEventListener('click', () => {
    landing.classList.add('hidden');
    homepage.classList.remove('hidden');

    // Enable scroll
    document.body.style.overflow = '';

    // Add gentle entrance animation to homepage
    homepage.classList.add('breeze-in');
    setTimeout(() => {
      homepage.classList.remove('breeze-in');
    }, 1500);
  });

  // Optional: show landing only once per session
  if (sessionStorage.getItem('landingShown')) {
    landing.classList.add('hidden');
    homepage.classList.remove('hidden');
    document.body.style.overflow = '';
  } else {
    sessionStorage.setItem('landingShown', 'true');
  }
});
