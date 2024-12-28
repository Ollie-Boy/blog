+++
title = "Happy Holidays! (Mp3 Included)"
date = "2024-12-25"
draft = false
description = "Merry Xmas"
tags = ["Holiday", "Xmas"]
+++

🎄 **Merry Christmas!** 🎄

[🎁 Get a gift](/images/Xmas-gift.jpg)

And don’t forget to check out: [Santa Tracker 🎅](https://www.noradsanta.org/en/map)

**May your holidays be filled with joy and love!**

<audio id="christmas-audio" preload="auto" loop>
  <source src="/audio/we-wish-you-a-merry-christmas-happy-remix-background-intro-theme-277943.mp3" type="audio/mp3">
  Sorry, there should have a happy song but your browser does not support the audio element. :[
</audio>

<script>
  window.onload = function() {
    const audio = document.getElementById('christmas-audio');
    const giftLink = document.querySelector('a[href="/images/Xmas-gift.jpg"]');
    
    // Play the audio automatically when the page loads
    audio.play().catch(function(error) {
      console.log('Autoplay failed:', error);
    });

    giftLink.onclick = function(event) {
      event.preventDefault();
      
      giftLink.outerHTML = '<span class="lol-text">LOL</span>';
      const lolText = document.querySelector('.lol-text');
      lolText.style.cursor = 'auto';
    };
  };
</script>





