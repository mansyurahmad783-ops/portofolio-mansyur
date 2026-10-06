const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const correctUsername = "Mansyur";
    const correctPassword = "Mansyur2007";

    if (
        username === correctUsername &&
        password === correctPassword
    ) {

        message.style.color = "#00ff88";
        message.textContent = "Login berhasil!";

        // Menyimpan status login
        localStorage.setItem("isLoggedIn", "true");

        // Pindah ke portfolio
        setTimeout(function() {
            window.location.href = "index.html";
        }, 800);

    } else {

        message.style.color = "#ff4444";
        message.textContent = "Username atau password salah!";

    }

});