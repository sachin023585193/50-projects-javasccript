var pannels = document.querySelectorAll('.pannel');
pannels.forEach(item => {
    item.addEventListener("click", () => {
        removeactiveclass();
        item.classList.add("active");
    });

    function removeactiveclass() {
        pannels.forEach(item => {
            item.classList.remove("active");
        });
    }
});