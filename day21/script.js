const fill = document.querySelector(".fill");
const boxes = document.querySelectorAll(".boxes");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);


boxes.forEach((box) => {
    box.addEventListener("dragover", dragOver);
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("drop", dragDrop);
})


function dragStart() {
    setTimeout(() => this.className = "invisible", 0)
}

function dragEnd() {
    this.className = "fill";
}

function dragEnter(e) {
    this.style.borderColor = "grey";
    e.preventDefault();
}

function dragLeave() {
    this.style.borderColor = "black";
}

function dragOver(e) {
    e.preventDefault();

}

function dragDrop() {
    this.append(fill);
    this.style.borderColor = "black";
}