// Simple fade-in animation (optional)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hero-content").style.opacity = 0;
  setTimeout(() => {
    document.querySelector(".hero-content").style.opacity = 1;
    document.querySelector(".hero-content").style.transition =
      "opacity 1.5s ease";
  }, 200);
});
