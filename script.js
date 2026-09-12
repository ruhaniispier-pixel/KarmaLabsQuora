const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "✕" : "☰";
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    });
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
