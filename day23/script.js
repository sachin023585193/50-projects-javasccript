const leftslides = document.querySelector(".left-slides");
const rightslides = document.querySelector(".right-slides");
const buttonup = document.querySelector(".up");
const buttondown = document.querySelector(".down");
const slidelength = document.querySelectorAll(".left-slide").length;
let index = 0;


buttonup.addEventListener("click", () => change("up"));
buttondown.addEventListener("click", () => change("down"));

function change(direction) {
    if (direction === "up") {
        index++;
        if (index > slidelength - 1) {
            index = 0;
        }
    } else {
        index--;
        if (index < 0) {
            index = slidelength - 1;
        }
    }

    rightslides.style.transform = `translateY(-${index*100}vh)`;
    leftslides.style.transform = `translateY(${index*100}vh)`;
};