function displaymessage(message, color) {
    const toast = document.querySelector(".toast-container");
    let div = document.createElement("div")
    div.classList.add("toast-message");
    div.innerHTML = message;
    div.classList.add(color);
    toast.appendChild(div);
    setTimeout(() => toast.removeChild(div), 3000)
}