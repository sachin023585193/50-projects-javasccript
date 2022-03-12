const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentactive = 1;
next.addEventListener("click", () => {
    currentactive++;
    if (currentactive === circles.length) {
        next.disabled = true;
    }
    update();
});
prev.addEventListener("click", () => {
    currentactive--;
    if (currentactive === 1) {
        prev.disabled = true;
    }
    update();
});

function update() {
    circles.forEach((circle, index) => {
        if (index + 1 <= currentactive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    let actives = document.querySelectorAll(".active");
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

    if (currentactive == 1) {
        prev.disabled = true;
    } else if (currentactive == circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
};