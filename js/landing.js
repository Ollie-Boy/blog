document.addEventListener("DOMContentLoaded", function () {
  const landing = document.getElementById('landing');
  const homepage = document.getElementById('homepage-wrapper');
  const enterBtn = document.getElementById('enter-btn');

  const landingShown = sessionStorage.getItem('landingShown');

  if (landingShown) {
    // Skip landing on subsequent visits
    if (landing) landing.remove();
    homepage.classList.remove('hidden');
    document.body.style.overflow = '';
    return;
  }

  // Show landing first time
  landing.classList.add('visible');
  homepage.classList.add('hidden');
  document.body.style.overflow = 'hidden';

  enterBtn.addEventListener('click', () => {
    // Fade out landing
    landing.classList.add('hidden');
    landing.classList.remove('visible');

    // Fade in homepage
    homepage.classList.remove('hidden');
    homepage.classList.add('breeze-in');

    document.body.style.overflow = ''; // restore scroll

    sessionStorage.setItem('landingShown', 'true');

    // Clean up landing after fade-out
    setTimeout(() => {
      landing.remove();
      homepage.classList.remove('breeze-in');
    }, 500); // match CSS transition duration
  });
});
