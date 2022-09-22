console.log("hello from index");

const pokemonContainer = document.getElementById("pokemons");

let num = 150;
const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;

const pokemon144 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png`;

// will append the first 150 pokemons to DOM
// create function to loop 150 times
// in loop, create img tag
// set src to url
// increment num to set pokemon
// append to pokemon container

function pokemonLoop(x) {
  for (let i = 1; i <= x; i++) {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    console.log(url);
    renderPokemon(url);
  }
}

function createImg(url) {
  img = document.createElement("img");
}

function renderPokemon(url) {
  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.setAttribute("alt", "pokemon sprite");

  pokemonContainer.appendChild(img);
}

// renderPokemon();
pokemonLoop(150);
