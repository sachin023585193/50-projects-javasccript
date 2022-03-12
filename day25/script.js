const API_URL = "https://api.github.com/users/";
const button = document.querySelector(".container button");
button.addEventListener("click", (e) => data(e))
const contents = document.querySelector(".contents");

function data(e) {
    e.preventDefault();
    let input = document.querySelector("input");
    fetch(API_URL + input.value)
        .then(data => data.json())
        .then((data) => {
            let { bio, avatar_url, name, followers, following } = data;
            let innerHTML = `
    <div class="avatar">
    <img src="${avatar_url}" alt="AVATAR" width="150px">
    </div>
    <div class="texts">
    <h2>${name}</h2>
    <p class="description">
    ${bio}
    </p>
    <ul>
    <li>${followers} <strong>Followers</strong></li>
    <li>${following} <strong>Following</strong></li>
    </ul>
    </div>
    </div>
    `;
            if (name != null) {
                contents.innerHTML = innerHTML;
            } else {
                contents.innerHTML = "No results found";
            };
        });
};