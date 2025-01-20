window.addEventListener("load", (event) => {
    const loader = document.getElementById("loader");
    loader.style.transition = "opacity 0.7s ease";
    setTimeout(() => loader.style.opacity = "0", 1000);
    setTimeout(() => loader.remove(), 3000);
});