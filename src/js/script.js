const pokemonImage = document.querySelector(".pokemon__image");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonName = document.querySelector(".pokemon__name");
const form = document.querySelector(".form");
const input = document.querySelector(".input__search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");

let searchPokemon = 1;

//CONECTAR E CAPTURAR AS INFORMAÇÕES DA POKEAPI

const fetchpokemon = async (pokemon) => {



  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {

    console.log(APIResponse)

    const data = await APIResponse.json();

    return data;
  }

};

const renderPokemon = async (pokemon) => {

  pokemonName.textContent = "Loading...";
  pokemonNumber.textContent - "";
  pokemonImage.src = "https://cdn-icons-png.flaticon.com/512/8999/8999447.png";

  const data = await fetchpokemon(pokemon);

  console.log(data);

  if (data) {
    // se tudo de certo
    pokemonImage.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
    pokemonImage.style.width = "20%";
    pokemonNumber.textContent = data.id;

    pokemonName.textContent = data.name;
    input.value = "";
    searchPokemon = data.id;

  } else {
  
    // caso de errado
    pokemonImage.src = "https://i.ytimg.com/vi/Ox-24P2xnTQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCcUzQFbaQzKiOIbc9oc1kf4z_r8g";
    pokemonImage.style.width = "35%";
    pokemonNumber.textContent = "🤐";
    pokemonName.textContent = "Not found : (";

  }
}

form.addEventListener(`submit`, (event) => {

  event.preventDefault();

  renderPokemon(input.value.toLowerCase());

})

buttonPrev.addEventListener("click", () => {

  if (searchPokemon > 1) {
    searchPokemon -= 1;

  renderPokemon(searchPokemon);


  }
   
})

buttonNext.addEventListener("click",() => {

  searchPokemon += 1; 

  renderPokemon(searchPokemon);
  
})


renderPokemon(searchPokemon)
