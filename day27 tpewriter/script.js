const texts = ["sachin", "bhattarai", "is my name"];
const typewriter = document.getElementById("typewriter");

let i = 0;
let j = 0;
write()

function write() {
    text = texts[j];
    typewriter.innerHTML += text.charAt(i);
    if (i <= text.length) {
        setTimeout(write, 200);
        i++;
    } else {
        setTimeout(erase, 700);
    }
}

function erase() {
    if (text.length >= 1) {
        text = text.slice(0, text.length - 1);
        typewriter.innerHTML = text;
        setTimeout(erase, 200);
    } else {
        j++;
        if (j == texts.length) j = 0;
        i = 0;
        write();
    }
};