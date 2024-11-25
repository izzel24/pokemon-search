
async function getData(){

    try{
        const searchInput = document.getElementById("search-input");
        const name = document.getElementById("pokemon-name");
        const id = document.getElementById("pokemon-id");
        const weight = document.getElementById("weight");
        const height = document.getElementById("height");
        const types = document.getElementById("types");
        const hp = document.getElementById("hp");
        const attack = document.getElementById("attack");
        const defense = document.getElementById("defense");
        const specialAttack = document.getElementById("special-attack");
        const specialDefense = document.getElementById("special-defense");
        const speed = document.getElementById("speed");
        const sprite = document.getElementById("sprite");

        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase()}`)
        if(!response.ok){
            throw new Error("Pokémon not found")
        }

        const data = await response.json();

        console.log(data);
        let pokemonName = data.name;
        name.innerHTML =  pokemonName.toUpperCase();
        id.innerHTML = "#"+data.id;
        weight.innerHTML = "Weight: "+ data.weight;
        height.innerHTML = "Height: "+ data.height;
        types.innerHTML = data.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name.toUpperCase()}</span>`).join("");
        hp.innerHTML = "HP: "+ data.stats.find(stat => stat.stat.name === "hp").base_stat;
        attack.innerHTML = "Attack: "+ data.stats.find(stat => stat.stat.name === "attack").base_stat;
        defense.innerHTML = "Defense: "+ data.stats.find(stat => stat.stat.name === "defense").base_stat;
        specialAttack.innerHTML = "SP. Attack: "+ data.stats.find(stat => stat.stat.name === "special-attack").base_stat;
        specialDefense.innerHTML = "SP. Defense: "+ data.stats.find(stat => stat.stat.name === "special-defense").base_stat;
        speed.innerHTML = "Speed: "+ data.stats.find(stat => stat.stat.name === "speed").base_stat;
        sprite.src = data.sprites.front_default;

    }
    catch(e){
        console.error(e);
        alert("Pokémon not found");
    }

}