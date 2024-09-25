const namePokemon = document.getElementById("Name");
const number = document.getElementById("Number");
const types = document.getElementById("Types");
const abilities = document.getElementById("Abilities");
const stats = document.getElementById("Stats");

const button = document.querySelector(".getRandomPokemon");
button.addEventListener("click",(event) =>{
    event.preventDefault()
    namePokemon.innerHTML = "<em>Loading...</em>";
    types.innerHTML = "<em>Loading...</em>";
    abilities.innerHTML = "<em>Loading...</em>";
    stats.innerHTML = "<em>Loading...</em>";
    const randomNum = Math.ceil(Math.random() * 1025);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`)
        .then(response => response.json())
        .then(pokemon => {            
            namePokemon.innerHTML=pokemon["name"];
            number.innerHTML=pokemon["id"];
            types.innerHTML = pokemon.types.map(typeInfo => `${typeInfo.type.name} `); //iterate over the amount of types (max=2)                    
            abilities.innerHTML = pokemon.abilities.map(abilityInfo => `${abilityInfo.ability.name} `);
            stats.innerHTML = pokemon.stats.map(statsInfo => `<strong>${statsInfo.stat.name}:</strong> ${statsInfo.base_stat} `);
            const image_url = pokemon.sprites.front_default;
            document.getElementById("Image").src = image_url;
        })
})