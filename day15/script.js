const counters = document.querySelectorAll(".counter");
Array.from(counters).forEach((counter) => {
    counter.innerText = 0;
    let number = Number(counter.getAttribute("data"));
    let loop = 200;
    var i = 0;

    function looping() {
        if (i <= loop) {
            counter.innerText = Math.ceil((number / 200) * i);
            i++;
            setTimeout(looping, 1);
        }
    };
    looping();
});