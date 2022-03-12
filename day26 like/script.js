const heart = document.querySelector(".heart");
const img = document.querySelector(".container img");
const container = document.querySelector(".container");
const span = document.getElementById("times");
let i = 0;
img.addEventListener("dblclick", (e) => {
    i++;
    let top = e.y;
    let left = e.x;
    let div = document.createElement("div");
    div.classList.add("heart");
    div.style.top = top + "px";
    div.style.left = left + "px";
    container.appendChild(div);
    setTimeout(() => container.removeChild(div), 600);
    span.innerText = i;
});