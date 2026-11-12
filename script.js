document.getElementById("year").textContent = String(new Date().getFullYear());

const revealTargets = document.querySelectorAll(
  ".section, .impact-grid article, .work-list li, .writing-grid a, .timeline li",
);

revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
);

revealTargets.forEach((el) => observer.observe(el));
