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

// Theme toggle: follows the system setting until the visitor picks one.
const themeRoot = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
  return themeRoot.dataset.theme || (systemDark.matches ? "dark" : "light");
}

function syncThemeToggle() {
  const next = currentTheme() === "dark" ? "light" : "dark";
  themeToggle.textContent = next === "dark" ? "Dark mode" : "Light mode";
  themeToggle.setAttribute("aria-label", `Switch to ${next} theme`);
}

themeToggle.addEventListener("click", () => {
  themeRoot.dataset.theme = currentTheme() === "dark" ? "light" : "dark";
  syncThemeToggle();
});

systemDark.addEventListener("change", () => {
  if (!themeRoot.dataset.theme) syncThemeToggle();
});

syncThemeToggle();
