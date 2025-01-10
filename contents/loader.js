document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    loader.style.transition = "opacity 0.7s ease";
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 1500);
});