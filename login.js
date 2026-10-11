
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Mansyur Portfolio</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            color: white;
            background:
                radial-gradient(circle at top left, #243b67, transparent 45%),
                linear-gradient(135deg, #080b14, #111827);
        }

        .login-card {
            width: 100%;
            max-width: 390px;
            padding: 35px 28px;
            border: 1px solid #30394b;
            border-radius: 20px;
            background: rgba(17, 24, 39, 0.96);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .logo {
            width: 65px;
            height: 65px;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 18px;
            background: #2563eb;
            font-size: 25px;
            font-weight: bold;
        }

        h1 {
            text-align: center;
            font-size: 27px;
            margin-bottom: 10px;
        }

        .subtitle {
            color: #9ca3af;
            text-align: center;
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 28px;
        }

        label {
            display: block;
            font-size: 14px;
            margin-bottom: 8px;
        }

        input {
            width: 100%;
            padding: 13px 14px;
            margin-bottom: 19px;
            color: white;
            background: #0b1220;
            border: 1px solid #374151;
            border-radius: 10px;
            outline: none;
            font-size: 15px;
        }

        input:focus {
            border-color: #60a5fa;
        }

        button {
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 10px;
            background: #2563eb;
            color: white;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.2s;
        }

        button:hover {
            background: #1d4ed8;
        }

        #message {
            min-height: 22px;
            margin-top: 15px;
            text-align: center;
            font-size: 13px;
            color: #f87171;
        }

        .footer {
            margin-top: 22px;
            color: #6b7280;
            font-size: 12px;
            text-align: center;
        }
    </style>
</head>

<body>
    <main class="login-card">
        <div class="logo">M</div>

        <h1>Selamat Datang</h1>

        <p class="subtitle">
            Silakan login untuk mengakses website portofolio.
        </p>

        <form id="loginForm">
            <label for="username">Username</label>
            <input
                type="text"
                id="username"
                placeholder="Masukkan username"
                autocomplete="username"
                required
            >

            <label for="password">Password</label>
            <input
                type="password"
                id="password"
                placeholder="Masukkan password"
                autocomplete="current-password"
                required
            >

            <button type="submit">Login Sekarang</button>

            <p id="message" role="status"></p>
        </form>

        <p class="footer">
            © 2026 Mansyur Portfolio
        </p>
    </main>

    <script>
        const form = document.getElementById("loginForm");
        const message = document.getElementById("message");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const username =
                document.getElementById("username").value.trim();

            const password =
                document.getElementById("password").value;

            let valid = false;

            // Akun demo untuk pengunjung
            if (username === "user" && password === "user") {
                valid = true;
            }

            // Akun demo pemilik website
            if (username === "mansyur" && password === "08082007") {
                valid = true;
            }

            if (valid) {
                sessionStorage.setItem("portfolioLoggedIn", "true");

                message.style.color = "#4ade80";
                message.textContent = "Login berhasil! Membuka portofolio...";

                window.location.href = "portfolio.html";
            } else {
                message.style.color = "#f87171";
                message.textContent =
                    "Username atau password salah. Coba lagi.";
            }
        });
    </script>
</body>
</html>
