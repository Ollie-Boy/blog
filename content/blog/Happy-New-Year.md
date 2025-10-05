+++
title = "Happy New Year"
date = "2025-01-01"
draft = false
description = "This is the first blog in 2025"
tags = ["Holiday", "New Year", "Life"]
+++


# Happy New Year!!!

:fireworks: Enjoy the fireworks display! :fireworks:

<div class="fireworks-wrapper">
  <div class="fireworks"></div>
</div>

<!-- Fireworks.js -->
<script src="https://cdn.jsdelivr.net/npm/fireworks-js@2.x/dist/index.umd.js"></script>
<script>
  const container = document.querySelector('.fireworks');

  const fireworks = new Fireworks.default(container, {
    width: window.innerWidth,
    height: window.innerHeight,
    resize: true,
    autoStart: true,
    mouse: { click: false, move: false },
    sound: {
      enabled: true,
      files: [
        'https://fireworks.js.org/sounds/explosion0.mp3',
        'https://fireworks.js.org/sounds/explosion1.mp3',
        'https://fireworks.js.org/sounds/explosion2.mp3'
      ],
      volume: { min: 1, max: 2 },
    },
    particles: 100,
    gravity: 0,
    explosion: 5,
    brightness: { min: 50, max: 80 },
    boundaries: { visible: false }
  });

  fireworks.start();

  // Prevent accidental navigation on clicks
  document.body.addEventListener('click', function (e) {
    e.stopPropagation();
  });
</script>

<style>
/* Fireworks wrapper stays on top without breaking page layout */
.fireworks-wrapper {
  position: fixed; /* stay on screen */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* clicks pass through */
  z-index: 9999; /* above everything else */
}

.fireworks {
  width: 100%;
  height: 100%;
}

footer {
  position: relative;
  z-index: 1; /* below fireworks overlay */
  text-align: center;
  padding: 10px;
  margin-top: 100px;
  color: inherit; /* use page color */
}
</style>
