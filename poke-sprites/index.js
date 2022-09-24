console.log("hello from index");

const pokemonContainer = document.getElementById("pokemons");
const pokeForm = document.getElementById("pokeform");

let num = 150;
const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;

const pokemon144 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png`;

// will append the first num pokemons to DOM
// create function to loop 150 times
// in loop, render pokemon
// create render function
//// render a div
//// append img of pokemon and p of pokemon number
//// set src to url
//// increment num to set pokemon
//// append to pokemon container

function pokemonLoop(x, i) {
  for (let i = 1; i <= x; i++) {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    console.log(url);
    renderPokemon(url, i);
  }
}

function createImg(url) {
  img = document.createElement("img");
}

function renderPokemon(url, i) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = `# ${i}`;
  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.setAttribute("alt", "pokemon sprite");

  div.append(img, p);

  pokemonContainer.appendChild(div);
}

// renderPokemon();
pokemonLoop(3);
