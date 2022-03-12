const smallcups = document.querySelectorAll(".small-cups");
const remliter = document.getElementById("remlitres");
const precentage = document.getElementById("precentage");

Array.from(smallcups).forEach((cup, index) => {
    cup.addEventListener("click", () => highlight(index));
});

function highlight(index) {
    if (smallcups[index].classList.contains("full")) {
        index--;
    };
    smallcups.forEach((nul, index2) => {
        if (index2 <= index) {
            smallcups[index2].classList.add("full");
        } else {
            smallcups[index2].classList.remove("full");
        }
    });
    updatebigcup();
};

function updatebigcup() {
    var fullcups = document.querySelectorAll(".full");
    var fullno = fullcups.length;
    precentage.style.height = (fullno / 8 * 100) + "%";
    precentage.innerText = fullno / 8 * 100 + "%";
};