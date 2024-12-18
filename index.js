document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".accordion-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function () {
            const moreInfo = this.nextElementSibling;

            if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
                moreInfo.style.display = "block";
                this.textContent = "Less Info";
            } else {
                moreInfo.style.display = "none";
                this.textContent = "More Info";
            }
        });
    });

    document.addEventListener("scroll", (event) => {
        const sidebar = document.getElementsByTagName("sidebar")[0];
        const pos = 170 - window.scrollY;
        if (pos > 20) {
            sidebar.style.top = `${pos}px`;
        }
        else {
            sidebar.style.top = `20px`;
        }
    });

    var f = document.getElementById('blink-cursor');
    setInterval(function() {
        f.style.opacity = (f.style.opacity == '1' ? '0' : '1');
    }, 600);
});

