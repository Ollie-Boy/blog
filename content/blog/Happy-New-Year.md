+++
title = "Happy New Year"
date = "2025-01-01"
draft = false
description = "This is the first blog in 2025"
tags = ["Holiday", "New Year", "Life"]
+++


# Happy New Year!!!

:fireworks:Enjoy the fireworks display! :fireworks:

<div class="fireworks"></div>

<script src="https://cdn.jsdelivr.net/npm/fireworks-js@2.x/dist/index.umd.js"></script>

<script>
  // Select the container element where fireworks will be displayed
  const container = document.querySelector('.fireworks');
  
  // Initialize Fireworks.js with options to limit the scroll
  const fireworks = new Fireworks.default(container, {
    // Set the size and position of the fireworks container
    width: window.innerWidth,
    height: window.innerHeight,
    // Optionally disable scrolling effects if they are causing issues
    resize: true,
    // Start fireworks at a more controlled rate
    autoStart: true,
    // Change the behavior of the fireworks
    sound: {
      enabled: true, // Enable sound if needed
      files: [
        'https://fireworks.js.org/sounds/explosion0.mp3',
        'https://fireworks.js.org/sounds/explosion1.mp3',
        'https://fireworks.js.org/sounds/explosion2.mp3'
      ],
      volume: { min: 1, max: 2 }, // Randomize sound volume
    },
    // Configure other settings to stop them after a certain amount of time or limit movement
    particles: 100, // Control the number of particles
    gravity: 0, // Reduce gravity to stop vertical movement
    explosion: 5, // Set the explosion size
    brightness: { min: 50, max: 80 }, // Set brightness range
    boundaries: { visible: false }, // Hide boundaries for a seamless effect
  });

  fireworks.start(); // Start the fireworks display
</script>

<style>
  body {
    overflow: hidden;
    height: 100vh;
  }
  .fireworks {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
    footer {
    position: relative;
    z-index: 1;
    background-color: #fff;
    text-align: center;
    padding: 10px;
    margin-top: 100px;
  }
</style>