document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const message = document.getElementById("message");
  const togglePassword = document.getElementById("togglePassword");

  document.getElementById("year").textContent = new Date().getFullYear();

  togglePassword.addEventListener("click", () => {
    const show = passwordInput.type === "password";
    passwordInput.type = show ? "text" : "password";
    togglePassword.setAttribute("aria-label", show ? "Sembunyikan password" : "Tampilkan password");
    togglePassword.textContent = show ? "◎" : "◉";
  });

  // Tombol ini mengisi akun akses umum agar pengunjung mudah masuk.
  document.getElementById("demoBtn").addEventListener("click", () => {
    usernameInput.value = "user";
    passwordInput.value = "user";
    message.textContent = "Akun akses umum sudah terisi. Klik Masuk untuk melanjutkan.";
    message.className = "message success";
    passwordInput.focus();
  });

  document.getElementById("forgotBtn").addEventListener("click", () => {
    message.textContent = "Ini halaman demo tanpa sistem reset password. Hubungi pemilik website untuk bantuan.";
    message.className = "message";
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    if (!username || !password) {
      message.textContent = "Username dan password wajib diisi.";
      message.className = "message";
      return;
    }

    // CATATAN: kredensial front-end dapat dilihat di kode sumber website.
    // Ini hanya cocok untuk demo/tugas, bukan perlindungan data penting.
    const isPublicLogin = username === "user" && password === "user";
    const isOwnerLogin = username === "mansyur" && password === "08082007";

    if (isPublicLogin || isOwnerLogin) {
      localStorage.setItem("isLoggedIn", "true");
      if (document.getElementById("remember").checked) {
        localStorage.setItem("rememberPortfolioLogin", "true");
      } else {
        localStorage.removeItem("rememberPortfolioLogin");
      }
      message.textContent = "Login berhasil. Mengalihkan ke portofolio...";
      message.className = "message success";
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "portfolio.html";
      message.textContent = "Username atau password salah. Periksa kembali data login kamu.";
      message.className = "message";
    }
  });
});
