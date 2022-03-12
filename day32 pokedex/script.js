const contaienr = document.querySelector(".poke-container");
const URL = "https://pokeapi.co/api/v2/pokemon/1";
const numberofpokemons = 100;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

getdata()

function getdata() {
    for (let i = 1; i <= numberofpokemons; i++) {
        fetchdata(i);
    };
};

async function fetchdata(id) {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    data = await data.json();
    let { name, types } = data;
    let type = types[0].type.name;
    contaienr.innerHTML += `
    <div class="pokemon" style="background-color:${colors[type]};">
            <div class="image-container">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="ERROr" width="200px">
            </div>
            <div class="info">
                <small>#${id}</small>
                <p class="name">${name}</p>
                <p class="type">Type:${type}</p>
            </div>
        </div>
    `;
};