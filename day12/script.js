const btn = document.querySelectorAll(".btn");
btn.forEach((button) => {
    button.addEventListener("click", () => {
        button.parentNode.parentNode.classList.toggle("active");
    });
});