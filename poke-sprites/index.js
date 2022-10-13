console.log("hello from index");

const pokemonContainer = document.getElementById("pokemons-container");
const pokeForm = document.getElementById("pokeform");
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const pokemons = document.querySelectorAll(".pokemon");

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

// refactor code to target form options
// should be able to render 1 pokemon base on num
// should render total pokemon base on num

function pokemonLoop(x, i) {
  for (let i = 1; i <= x; i++) {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    console.log(url);
    renderPokemon(url, i);
  }
}

function render1(i) {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  console.log(url);
  renderPokemon(url, i);
}

function handleSubmit(e, value, value2) {
  e.preventDefault();
  value = input1.value;
  value2 = input2.value;
  pokemonContainer.innerHTML = "";

  if (value != "") {
    pokemonLoop(value);
  }

  if (value2 != "") {
    console.log("input 2 clicked");
    render1(value2);
  }

  input1.value = "";
  input2.value = "";
}

function renderPokemon(url, i) {
  const div = document.createElement("div");
  div.setAttribute("class", "pokemon");

  const p = document.createElement("p");
  p.textContent = `# ${i}`;
  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.setAttribute("alt", "pokemon sprite");

  div.append(img, p);

  pokemonContainer.appendChild(div);
}

// renderPokemon();
// pokemonLoop(3);

pokeForm.addEventListener("submit", handleSubmit);
