console.log("hello from index");

const pokemonContainer = document.getElementById("pokemons");

let num = 150;
const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;

// will append the first 150 pokemons to DOM
// create function to loop 150 times
// in loop, create img tag
// set src to url
// increment num to set pokemon
// append to pokemon container
