//Active for FAQ content //
const faqs = document.querySelectorAll(".faq-content");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

//Active for Burger-menu //
const hamMenu = document.querySelector(".burger-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
})

// Function to close the menu if screen width exceeds 1200px
function closeMenuOnLargeScreen() {
    const menu = document.querySelector('.off-screen-menu');
    if (window.innerWidth >= 1200 && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
}