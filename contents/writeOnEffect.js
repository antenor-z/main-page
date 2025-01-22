window.addEventListener("load", (event) => {
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