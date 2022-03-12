const button = document.querySelectorAll("button");
button.forEach(button => {
    button.addEventListener("click", function(event) {
        let cx = event.clientX;
        let cy = event.clientY;
        let ex = event.target.getBoundingClientRect().left;
        let ey = event.target.getBoundingClientRect().top;
        var newEl = document.createElement("span");
        newEl.classList.add("ripple");
        newEl.style.left = (cx - ex) - 35 + "px";
        newEl.style.top = (cy - ey) - 35 + "px";
        this.appendChild(newEl);
        setTimeout(() => { this.removeChild(newEl) }, 500);
    });
});