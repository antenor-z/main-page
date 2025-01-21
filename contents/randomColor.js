document.addEventListener("DOMContentLoaded", function () {
    const r = document.querySelector(':root');
    const colors = ["#329442", "#943232", "#948532", "#3940af", "#943292"];
    
    function updateColors() {
        const rand = Math.floor(Math.random() * colors.length);
        r.style.setProperty("--primary-color", colors[rand]);
        r.style.setProperty("--primary-color-transparent", colors[rand] + "30");
    }

    updateColors();

    setInterval(updateColors, 60000);
});

