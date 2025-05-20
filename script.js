document.querySelectorAll("[data-nav-link]").forEach((button) => {
    button.addEventListener("click", function () {
        const targetPage = this.getAttribute("data-nav-link");

        // Hide/show sections
        document.querySelectorAll("[data-page]").forEach((page) => {
            page.style.display = page.getAttribute("data-page") === targetPage ? "block" : "none";
        });

        // Remove active class from all buttons
        document.querySelectorAll("[data-nav-link]").forEach((btn) => btn.classList.remove("active"));

        // Add active class to the clicked button
        this.classList.add("active");
    });
});
