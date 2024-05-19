const faqs = document.querySelectorAll(".faq-content");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});