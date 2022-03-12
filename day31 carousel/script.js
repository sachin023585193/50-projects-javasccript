const container = document.querySelector(".image-contaienr");
const img = document.querySelectorAll(".carousal-container img");
const imgWidth = img[0].getBoundingClientRect().width;
let currentidx = 0;
setInterval(() => slide("next"), 4500);

function slide(value) {
    if (value == "prev") {
        currentidx--;
        if (currentidx < 0) currentidx = img.length - 1;
    } else {
        currentidx++;
        if (currentidx > img.length - 1) currentidx = 0;
    };
    container.style.transform = `translateX(${-imgWidth * currentidx + "px"})`;
};