const PokemonData = require('./PokemonData');
const Pokemon = require('./Pokemon');
const MoveList = require('./MoveList');

module.exports = {
    generatePokemon(pokemonID, level) {
        let pokemon = {
            pokemonID: pokemonID,
            level: level,
            shiny: this.calculateShiny(),
            gender: this.isFemale(pokemonID)
        };
        this.generateIVs(pokemon);
        this.calculateStats(pokemon);
        this.getMoves(pokemon);
        return new Pokemon(pokemon);
    },
	generateIVs(pokemon) {
		pokemon.hpIV = Math.floor((Math.random() * 32));
		pokemon.atkIV = Math.floor((Math.random() * 32));
		pokemon.defIV = Math.floor((Math.random() * 32));
		pokemon.spatkIV = Math.floor((Math.random() * 32));
		pokemon.spdefIV = Math.floor((Math.random() * 32));
        pokemon.spdIV = Math.floor((Math.random() * 32));
        return pokemon;
    },
    getMoves(pokemon) {
        let moves = PokemonData[pokemon.pokemonID].moves;
        let keys = Object.keys(moves).filter(el => el <= pokemon.level); //remove any moves higher than generated level
        keys = keys.map(el => parseInt(moves[el])).flat();
        if(keys.length > 4) {
            keys = Utilities.shuffle(keys);
            do {
                keys.pop();
            } while(keys.length > 4);
            for(var i=0;i<keys.length;i++) {
                pokemon[`move${i+1}`] = keys[i];
                pokemon[`move${i+1}pp`] = MoveList.getMove(keys[i]).pp;
            }
        }
        else {
            for(var i=0;i<keys.length;i++) {
                pokemon[`move${i+1}`] = keys[i];
                pokemon[`move${i+1}pp`] = MoveList.getMove(keys[i]).pp;
            }
        }
        return pokemon;
    },
    calculateShiny() {
        return Math.floor((Math.random() * 1001)) == 1000;
    },
    isFemale(pokemonID) {
        let rate = PokemonData[pokemonID].gender_rate;
        if(rate == -1) {
            return null;
        }
        let femaleRate = rate/8;
        return Math.random() < femaleRate;
    },
	calculateStats(pokemon) {
        let baseStats = PokemonData[pokemon.pokemonID];
        pokemon.hp = Math.floor((((baseStats.hp + pokemon.hpIV) * 2) * pokemon.level / 100) + pokemon.level + 10);
        pokemon.maxHP = Math.floor((((baseStats.hp + pokemon.hpIV) * 2) * pokemon.level / 100) + pokemon.level + 10);
        pokemon.atk = Math.floor((((baseStats.atk + pokemon.atkIV) * 2) * pokemon.level / 100) + 5);
        pokemon.def = Math.floor((((baseStats.def + pokemon.defIV) * 2) * pokemon.level / 100) + 5);
        pokemon.spatk = Math.floor((((baseStats.spatk + pokemon.spatkIV) * 2) * pokemon.level / 100) + 5);
        pokemon.spdef = Math.floor((((baseStats.spdef + pokemon.spdefIV) * 2) * pokemon.level / 100) + 5);
        pokemon.spd = Math.floor((((baseStats.spd + pokemon.spdIV) * 2) * pokemon.level / 100) + 5);
    },
    calculateTotalIV(pokemon) {
        let totalIV = pokemon.hpIV + pokemon.atkIV + pokemon.defIV + pokemon.spatkIV + pokemon.spdefIV + pokemon.spdIV;
		return (totalIV / 186 * 100).toFixed(2);
    }
}