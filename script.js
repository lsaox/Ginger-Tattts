
  bgVideo.playbackRate = 2;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

  mobileNavToggle.onclick = () => mobileNavOverlay.classList.remove("hidden");
  mobileNavClose.onclick = () => mobileNavOverlay.classList.add("hidden");

  // ⬇️ Add this bit
  if (window.instgrm && window.instgrm.Embeds) {
    window.instgrm.Embeds.process();
  }
