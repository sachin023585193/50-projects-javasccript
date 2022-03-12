const content = document.querySelector(".content");
const nav = document.querySelector("nav");
const vh = window.innerHeight;
window.addEventListener("scroll", () => {
    let contentH = content.getBoundingClientRect().top;
    if (contentH < 300) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
});