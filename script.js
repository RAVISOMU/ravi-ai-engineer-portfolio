const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Placeholder links are intentionally flagged so they are easy to replace before launch.
const placeholderLinks = document.querySelectorAll("[data-placeholder-link]");
const contactNote = document.querySelector("#contact-note");
if (placeholderLinks.length && contactNote) {
  placeholderLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href") || "";
      if (href.includes("YOUR_") || href.includes("YOUR-")) {
        event.preventDefault();
        contactNote.textContent = "This is a placeholder. Replace this link with your real contact or profile URL in index.html before publishing.";
        contactNote.setAttribute("role", "status");
      }
    });
  });
}
