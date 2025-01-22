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

    const writeOnTitle = document.querySelectorAll(".writeOnTitle");

    writeOnTitle.forEach(element => {
        writeOnFunc(element)
    });

    const writeOn = document.querySelectorAll(".writeOn");

    setTimeout(function () {
        document.querySelector("#blink-cursor-title").style.visibility = "hidden"

        const blinkCursor = document.querySelectorAll(".blink-cursor");

        blinkCursor.forEach(element => {
            element.style.visibility = "unset";
        });

        setTimeout(function () {
            writeOn.forEach(element => {
                writeOnFunc(element, true)
            });
        }, 1000);
    }, 1300)


    function writeOnFunc(element) {
        const text = element.textContent;
        element.textContent = "";
        element.style.display = "unset";

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                let iteration = 0;
                const char = text.charAt(index);

                function scramble() {
                    if (iteration < 5) {
                        element.textContent = text.slice(0, index) + randomChar();
                        iteration++;
                        setTimeout(scramble, 10);
                    } else {
                        element.textContent = text.slice(0, index + 1);
                        index++;
                        setTimeout(typeWriter, 15);
                    }
                }

                scramble();
            }
        }

        typeWriter();
    }

});

