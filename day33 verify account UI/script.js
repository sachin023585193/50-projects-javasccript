const inputs = document.querySelectorAll(".container input");

Array.from(inputs).forEach((input, i) => {
    input.addEventListener("keydown", (e) => {
        if (e.key == "Backspace" && i > 0) {
            if (i == 0) return;
            setTimeout(() => inputs[i - 1].focus(), 0)
        }
        if (i < inputs.length - 1 && e.key != "Backspace") {
            setTimeout(() => inputs[i + 1].focus(), 0)
        } else {
            e.preventDefault;
        }
    });
});