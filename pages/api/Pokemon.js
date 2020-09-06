const PokemonData = require('./PokemonData');

class Pokemon {
    constructor(pokemon) {
        Object.assign(this, pokemon);
        this.type1 = PokemonData[this.pokemonID].type1;
        this.type2 = PokemonData[this.pokemonID].type2;
        this.weight = PokemonData[this.pokemonID].weight;
    }
    get name() {
        if(this.nickname) {
            return this.nickname;
        }
        let name = PokemonData[this.pokemonID].name;
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    get originalName() {
        let name = PokemonData[this.pokemonID].name;
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    get displayName() {
        let name = this.name;
        if(this.shadow) {
            name += '<:shadow:738006884430119002>';
        }
        if(this.shiny) {
            name += ':sparkles:';
        }
        return name;
    }
    get emoji() {
        return PokemonData[this.pokemonID].emoji;
    }
    get thumbnail() {
        if(this.shadow) { 
            if(this.shiny) {
                //not done yet
                return;
            }
            else {
                return `https://www.bluewave41.xyz/sprites/shadow/${this.pokemonID}.png`;
            }
        }
        else {
            if(this.shiny) {
                return `https://www.bluewave41.xyz/sprites/shiny/${this.pokemonID}.png`;
            }
            else {
                return `https://www.bluewave41.xyz/sprites/normal/${this.pokemonID}.png`;
            }
        }
    }
}

module.exports = Pokemon;