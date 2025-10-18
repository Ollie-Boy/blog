const birdSound = new Audio('/audio/bird-sing.mp3');

function playBirdSound() {
  const randomDuration = Math.floor(Math.random() * 3) + 1;
  birdSound.play();
  setTimeout(() => {
    birdSound.pause();
    birdSound.currentTime = 0;
  }, randomDuration * 1000);
}

function triggerBirdSound() {
  const randomInterval = Math.floor(Math.random() * 10) + 5;
  setTimeout(() => {
    playBirdSound();
    triggerBirdSound();
  }, randomInterval * 1000);
}

let isUserActive = false;

function userActivityDetected() {
  if (!isUserActive) {
    isUserActive = true;
    triggerBirdSound();
  }
}

window.addEventListener('scroll', userActivityDetected);
window.addEventListener('mousemove', userActivityDetected);