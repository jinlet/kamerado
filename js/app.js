function handleFAQs() {
    document.querySelectorAll(".faq-content").forEach(faq => {
        faq.addEventListener("click", () => faq.classList.toggle("active"));
    });
}

function handleAwards() {
    document.querySelectorAll(".snake-entry").forEach(entry => {
        entry.querySelector(".snake-card").addEventListener("click", () => {
            entry.classList.toggle("open");
        });
    });
}

function handleBurgerMenu() {
    const hamMenu = document.querySelector(".burger-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    function closeMenu() {
        hamMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");
    }

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    });

    document.querySelectorAll(".burger-nav li").forEach(item => {
        item.addEventListener("click", closeMenu);
    });

    const logoLink = document.querySelector(".nav-logo-link");
    if (logoLink) logoLink.addEventListener("click", closeMenu);

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1200) closeMenu();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    handleFAQs();
    handleAwards();
    handleBurgerMenu();
});