const joke = document.getElementById("joke");
const btn = document.getElementById("btn");
const obj = { headers: { Accept: "application/json" } };


function generatejoke() {
    fetch("https://icanhazdadjoke.com", obj).then((result) => result.json()).then((result) => {
        joke.innerHTML = result.joke;
    });
};

generatejoke();
btn.addEventListener("click", generatejoke);