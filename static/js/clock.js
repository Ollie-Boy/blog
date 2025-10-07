document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("clock-time");
  if (!el) return;

  function updateClock() {
    const now = new Date();
    el.textContent = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  updateClock();
  setInterval(updateClock, 1000);
});
