const button = document.querySelectorAll(".button");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

Array.from(button).forEach(element => {
    element.addEventListener("click", (event) => {
        target = event.target;
        target.classList.toggle("active");
        let actives = document.querySelectorAll(".active");
        if (actives.length === 3) {
            if (target === good) {
                fast.classList.remove("active");
            } else if (target === cheap) {
                good.classList.remove("active");
            } else {
                cheap.classList.remove("active");
            };
        };
    });
});