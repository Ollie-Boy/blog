+++
title = "Happy Holidays! (Mp3 Included)"
date = "2024-12-25"
draft = false
description = "Merry Xmas"
tags = ["Holiday", "Xmas"]
+++

🎄 **Merry Christmas!** 🎄

<a id="gift-btn" href="/images/Happy%20Holidays!%20(Mp3%20Included)/Xmas-gift.jpg">🎁 Get a gift</a>

And don’t forget to check out: [Santa Tracker 🎅](https://www.noradsanta.org/en/map)

**May your holidays be filled with joy and love!**

<audio id="christmas-audio" preload="auto" loop>
  <source src="/audio/we-wish-you-a-merry-christmas-happy-remix-background-intro-theme-277943.mp3" type="audio/mp3">
  Sorry, your browser does not support the audio element. :[
</audio>

<script>
window.onload = function() {
  const audio = document.getElementById('christmas-audio');
  const giftBtn = document.getElementById('gift-btn');

  // Play audio automatically
  audio.play().catch(e => console.log('Autoplay failed:', e));

  // Swap button with dancing LOL
  giftBtn.onclick = function(event) {
    event.preventDefault();
    giftBtn.outerHTML = '<span class="lol-text">LOL</span>';
  };
};
</script>

<style>
/* Dancing LOL animation */
.lol-text {
  display: inline-block;
  font-weight: bold;
  color: #e91e63;
  font-size: 2rem;
  animation: dance 1s ease-in-out infinite;
  transform-origin: center;
}

@keyframes dance {
  0%   { transform: translateY(0) rotate(0deg) scale(1); }
  10%  { transform: translateY(-5px) rotate(-10deg) scale(1.1); }
  20%  { transform: translateY(3px) rotate(8deg) scale(0.95); }
  30%  { transform: translateY(-4px) rotate(-5deg) scale(1.05); }
  40%  { transform: translateY(2px) rotate(5deg) scale(0.98); }
  50%  { transform: translateY(-3px) rotate(-3deg) scale(1.02); }
  60%  { transform: translateY(1px) rotate(2deg) scale(1); }
  70%  { transform: translateY(-2px) rotate(-1deg) scale(1.03); }
  80%  { transform: translateY(0px) rotate(1deg) scale(0.97); }
  90%  { transform: translateY(-1px) rotate(-1deg) scale(1.02); }
  100% { transform: translateY(0) rotate(0deg) scale(1); }
}
</style>





