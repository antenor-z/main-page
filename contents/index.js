document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".accordion-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function () {
            const moreInfo = this.nextElementSibling;
            const lang = document.getElementsByTagName("body")[0].lang;
            if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
                moreInfo.style.display = "block";
                this.textContent = "▲"
            } else {
                moreInfo.style.display = "none";
                this.textContent = "▼"
            }
        });
    });

    document.addEventListener("scroll", (event) => {
        sidebarPosition();
    });

    sidebarPosition();
    function sidebarPosition() {
        const sidebar = document.getElementsByTagName("sidebar")[0];
        const pos = 200 - window.scrollY;
        if (pos > 20) {
            sidebar.style.top = `${pos}px`;
        }
        else {
            sidebar.style.top = `20px`;
        }

        const floater = document.getElementsByTagName("floater")[0];
        if (window.scrollY > 100) {
            floater.style.opacity = "1";
        }
        else {
            floater.style.opacity = "0";
        }
    }

    const cursors = document.querySelectorAll(".blink-cursor");
    cursors.forEach(
        cursor => {
            setInterval(function() {
                cursor.style.opacity = (cursor.style.opacity == '1' ? '0' : '1');
            }, 600);
        }
    )
});

