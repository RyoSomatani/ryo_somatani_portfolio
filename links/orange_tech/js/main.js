window.addEventListener("scroll", () => {
  const fade = document.querySelectorAll(".fade");
  fade.forEach(p => {
    const pPosition = p.getBoundingClientRect().top;
    if (pPosition < window.innerHeight * 0.8) {
      p.style.opacity = "1";
    }
  });
});
