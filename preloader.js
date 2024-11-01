// Preloader JS Styling

document.addEventListener("DOMContentLoaded", function() {
    let preloader = document.querySelector("#preloader");

    // Ensure the preloader exists before trying to manipulate it
    if (preloader) {
        window.addEventListener("load", function() {
            preloader.style.display = "none"; // Hide the preloader
        });
    }
});
