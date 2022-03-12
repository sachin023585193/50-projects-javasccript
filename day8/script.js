const label = document.querySelectorAll(".form-control label");
const input = document.querySelectorAll(".formcontrol input");
label.forEach(element => {
    // var text = element.innerText;
    // var split = text.split("")
    // var mapped = split.map(letter => `<span>${letter}</span>`);
    // var join = mapped.join("");
    // element.innerHTML = join;
    element.innerHTML = element.innerText.split("").map((letter, index) => `<span style="transition-delay:${index*50}ms;">${letter}</span>`).join("");
});