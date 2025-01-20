window.addEventListener("load", (event) => {
    const loader = document.getElementById("loader");
    loader.style.transition = "opacity 0.7s ease";
    setTimeout(() => loader.style.opacity = "0", 100);
    setTimeout(() => loader.remove(), 2000);
});