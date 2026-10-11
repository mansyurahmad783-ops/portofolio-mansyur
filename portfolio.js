document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const themeToggle = document.getElementById("themeToggle");
  const progressBar = document.getElementById("progressBar");
  const toast = document.getElementById("toast");

  // Menu hamburger untuk layar kecil.
  menuToggle?.addEventListener("click", () => {
    const opened = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(opened));
    menuToggle.setAttribute("aria-label", opened ? "Tutup menu" : "Buka menu");
  });

  // Klik menu akan menutup menu mobile.
  navLinks.forEach(link => link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }));

  // Tema tersimpan di browser.
  const savedTheme = localStorage.getItem("portfolioTheme");
  if (savedTheme === "light") document.body.classList.add("light-theme");
  updateThemeButton();
  themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem("portfolioTheme", document.body.classList.contains("light-theme") ? "light" : "dark");
    updateThemeButton();
  });
  function updateThemeButton() {
    if (!themeToggle) return;
    const light = document.body.classList.contains("light-theme");
    themeToggle.textContent = light ? "☾" : "☼";
    themeToggle.title = light ? "Aktifkan tema gelap" : "Aktifkan tema terang";
    themeToggle.setAttribute("aria-label", themeToggle.title);
  }

  // Progress bar mengikuti posisi scroll.
  function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progressBar) progressBar.style.width = `${percent}%`;
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // Efek muncul saat bagian halaman terlihat.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  // Menandai menu sesuai bagian yang sedang terlihat.
  const sections = document.querySelectorAll("main section[id]");
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => sectionObserver.observe(section));
  }

  // Form membuat draf email. Tidak membutuhkan backend.
  const contactForm = document.getElementById("contactForm");
  contactForm?.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    if (!name || !email || !message) {
      showToast("Lengkapi semua kolom sebelum mengirim pesan.");
      return;
    }
    const subject = encodeURIComponent(`Pesan portfolio dari ${name}`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
    showToast("Membuka aplikasi email untuk menyusun pesan...");
    window.location.href = `mailto:mansyurahmad783@gmail.com?subject=${subject}&body=${body}`;
  });

  // Logout: hapus status login lalu arahkan ke halaman login.
  document.getElementById("logoutBtn")?.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  let toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
  }
});
