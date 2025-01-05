document.addEventListener("DOMContentLoaded", function () {
    const r = document.querySelector(':root')
    const colors = ["#329442", "#943232", "#948532", "#3940af", "#943292"]
    const rand = Math.floor((Math.random() * 100)) % colors.length
    r.style.setProperty("--primary-color", colors[rand])
    r.style.setProperty("--primary-color-transparent", colors[rand] + "30") 
})
