const WildPokemon = require('./WildPokemon');
const RocketTrainer = require('./RocketTrainer');
const PokeStop = require('./PokeStop');

class SpriteList {
    constructor(spriteList) {
        if(spriteList) {
            this.pokemon = spriteList.pokemon.map(el => new WildPokemon(el));
            this.pokestops = spriteList.pokestops.map(el => new PokeStop(el));
            this.rockets = spriteList.rockets.map(el => new RocketTrainer(el));
        }
        else {
            this.pokemon = []; //list of WildPokemon
            this.pokestops = []; //list of PokeStops
            this.rockets = []; //list of RocketTrainer
        }
    }
    addPokemon(pokemon) {
        this.pokemon.push(pokemon);
    }
    addPokeStop() {
        this.pokestops.push(new PokeStop());
    }
    addRocket(rocket) {
        this.rockets.push(rocket);
    }
    getTotalSprites() {
        console.log(this);
        return this.pokemon.length + this.pokestops.length + this.rockets.length;
    }
    getOption(option) {
        if(option > this.pokemon.length) {
            option -= this.pokemon.length;
            if(option > this.pokestops.length) {
                option -= this.pokestops.length;
                return this.rockets[option-1];
            }  
            else {
                return this.pokestops[option-1];
            }
        }
        else {
            return this.pokemon[option-1];
        }
    }
    removeOption(option) {
        if(option > this.pokemon.length) {
            option -= this.pokemon.length;
            if(option > this.pokestops.length) {
                option -= this.pokestops.length;
                this.rockets.splice(option-1, 1);
            }
            else {
                this.pokestops.splice(option-1, 1);
            }
        }
        else {
            this.pokemon.splice(option-1, 1);
        }
    }
}

module.exports = SpriteList;