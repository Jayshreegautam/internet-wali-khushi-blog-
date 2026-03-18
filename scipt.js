// Navbar toggle (for mobile future use)
function toggleMenu() {
    const menu = document.querySelector(".navbar ul");
    menu.classList.toggle("active");
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Smooth Scroll (for future links)
document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});