const textarea = document.querySelector("textarea");
const tags = document.querySelector(".tags");
textarea.focus();
textarea.addEventListener("keyup", (event) => {
    let val = event.target.value.split(",").filter(tag => tag.trim()).map((tag => tag.trim()));
    tags.innerHTML = "";
    Array.from(val).forEach(tag => {
        var tagEl = document.createElement("span");
        tagEl.innerText = tag;
        tagEl.classList.add("tag");
        tags.appendChild(tagEl)
    });

    if (event.keyCode == 13) {
        textarea.value = "";
        var clear = setInterval(highlight, 100);
        setTimeout(stopshuffelling, 3000);
    }

    function stopshuffelling() {
        clearInterval(clear)
    };
});


function highlight() {
    var options = document.querySelectorAll(".tag");
    options.forEach(opt => opt.classList.remove("highlight"));
    var random = Math.floor(Math.random() * options.length);
    options[random].classList.add("highlight");
}