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

  // Mode demo: bisa masuk tanpa backend dengan mengisi kedua kolom.
  document.getElementById("demoBtn").addEventListener("click", () => {
    usernameInput.value = "mansyur";
    passwordInput.value = "08082007";
    message.textContent = "Mode demo terisi. Klik tombol Masuk untuk melanjutkan.";
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

    // Login demo front-end: bukan autentikasi aman untuk data penting.
    // Kamu bisa mengubah username/password demo sesuai kebutuhan.
    const isDemoLogin = username === "demo" && password === "demo123";
    const isSimpleLocalLogin = username.toLowerCase() === "ahmad" && password === "mansyur123";

    if (isDemoLogin || isSimpleLocalLogin) {
      localStorage.setItem("isLoggedIn", "true");
      if (document.getElementById("remember").checked) {
        localStorage.setItem("rememberPortfolioLogin", "true");
      } else {
        localStorage.removeItem("rememberPortfolioLogin");
      }
      message.textContent = "Login berhasil. Mengalihkan ke portfolio...";
      message.className = "message success";
      window.setTimeout(() => { window.location.href = "index.html"; }, 550);
    } else {
      message.textContent = "Login demo tidak cocok. Gunakan mode demo atau periksa kembali data.";
      message.className = "message";
    }
  });
});
