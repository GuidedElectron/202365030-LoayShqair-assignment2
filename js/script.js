document.addEventListener("DOMContentLoaded", () => {
  setupSmoothScrolling();
  insertGreetingMessage();
  setupThemeToggle();
  setupProjectSearch();
  setupContactForm();
});

function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const header = document.querySelector(".site-header");
      const headerHeight = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight + 2;

      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

function insertGreetingMessage() {
  const greeting = document.getElementById("greeting");
  if (!greeting) return;

  const hour = new Date().getHours();
  let message = "Welcome to my portfolio.";

  if (hour >= 5 && hour < 12) {
    message = "Good morning. Thanks for visiting my portfolio.";
  } else if (hour >= 12 && hour < 17) {
    message = "Good afternoon. Explore the projects and course highlights below.";
  } else if (hour >= 17 && hour < 22) {
    message = "Good evening. Feel free to browse the projects and contact section.";
  }

  greeting.textContent = message;
}

function setupThemeToggle() {
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  const savedTheme = localStorage.getItem("portfolio-theme");
  const theme = savedTheme === "light" ? "light" : "dark";
  applyTheme(theme);

  button.addEventListener("click", () => {
    const isLight = document.documentElement.classList.contains("theme-light");
    const nextTheme = isLight ? "dark" : "light";
    applyTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  });
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("theme-light", theme === "light");
  const button = document.getElementById("theme-toggle");

  if (button) {
    button.textContent = theme === "light" ? "Light mode" : "Dark mode";
  }
}

function setupProjectSearch() {
  const searchInput = document.getElementById("project-search");
  const cards = Array.from(document.querySelectorAll(".project-card"));
  const emptyState = document.getElementById("empty-state");
  const resultsCount = document.getElementById("results-count");

  if (!searchInput || cards.length === 0 || !emptyState || !resultsCount) return;

  const updateResults = () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const title = (card.dataset.title || "").toLowerCase();
      const tags = (card.dataset.tags || "").toLowerCase();
      const text = card.textContent.toLowerCase();
      const matches = !query || title.includes(query) || tags.includes(query) || text.includes(query);

      card.classList.toggle("is-hidden", !matches);
      if (matches) visibleCount += 1;
    });

    resultsCount.textContent = `${visibleCount} project${visibleCount === 1 ? "" : "s"} shown`;
    emptyState.hidden = visibleCount !== 0;
  };

  searchInput.addEventListener("input", updateResults);
  updateResults();
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";

    if (!name || !email || !message) {
      showFormStatus("Please fill in your name, email, and message before submitting.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showFormStatus("Please enter a valid email address in the correct format.", "error");
      return;
    }

    showFormStatus(`Thanks, ${name}. Your message has been validated successfully.`, "success");
    form.reset();
  });

  function showFormStatus(message, type) {
    status.textContent = message;
    status.className = `form-status show ${type}`;
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
