document.addEventListener("DOMContentLoaded", function () {
  const landing = document.getElementById('landing');
  const homepage = document.getElementById('homepage-wrapper');
  const enterBtn = document.getElementById('enter-btn');

  const landingShown = sessionStorage.getItem('landingShown');

  if (landingShown) {
    // If landing has already been shown, skip it entirely
    if (landing) landing.remove(); // remove to avoid layout flash
    homepage.classList.remove('hidden');
    document.body.style.overflow = '';
    return;
  }

  // Show landing only on first visit
  landing.classList.add('visible');
  homepage.classList.add('hidden');
  document.body.style.overflow = 'hidden';

  // Handle Enter button click
  enterBtn.addEventListener('click', () => {
    landing.classList.remove('visible');
    landing.classList.add('hidden');

    homepage.classList.remove('hidden');
    document.body.style.overflow = '';
    sessionStorage.setItem('landingShown', 'true');

    // Gentle fade-in animation
    homepage.classList.add('breeze-in');
    setTimeout(() => homepage.classList.remove('breeze-in'), 1500);

    // Clean up DOM after fade
    setTimeout(() => landing.remove(), 700);
  });
});
