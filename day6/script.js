const boxes = document.querySelectorAll(".box");
let triggerpoint = window.innerHeight / 5 * 4;

show();
window.addEventListener("scroll", show);

function show() {
    Array.from(boxes).forEach((box) => {
        var top = box.getBoundingClientRect().top;
        if (top < triggerpoint) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}