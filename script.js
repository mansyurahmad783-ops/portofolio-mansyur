// =====================================
// MENU MOBILE
// =====================================

const menuToggle =
    document.querySelector(".menu-toggle");

const navMenu =
    document.querySelector(".nav-menu");


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        function() {

            navMenu.classList.toggle(
                "active"
            );

        }
    );

}


// =====================================
// TUTUP MENU MOBILE
// =====================================

const navLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


navLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        function() {

            navMenu.classList.remove(
                "active"
            );

        }
    );

});


// =====================================
// LOGOUT
// =====================================

function logout() {

    // Hapus status login
    localStorage.removeItem(
        "isLoggedIn"
    );


    // Kembali ke halaman login
    window.location.href =
        "login.html";

}


// =====================================
// FORM CONTACT
// =====================================

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Pesan berhasil dikirim!"
            );

            contactForm.reset();

        }
    );

}