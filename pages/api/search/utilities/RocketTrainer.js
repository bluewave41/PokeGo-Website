const PokemonUtilities = require('./PokemonUtilities');
const BattlePokemon = require('./BattlePokemon');
const Utilities = require('./Utilities');

class RocketTrainer {
    constructor(rocket) {
        Object.assign(this, rocket);
        if(rocket && rocket.pokemon) { //called when it comes from Database
            this.pokemon = this.pokemon.map(el => new BattlePokemon(el, false));
        }
    }
    init(userParty) {
        this.pokemon = [];
        this.selectPokemon(userParty);
        this.activeIndex = 1;
    }
    selectPokemon(userParty) {
        let catchablePokemon = [10, 13, 16, 19, 23, 27, 29, 32, 37, 41, 43, 46, 58, 60, 63, 66, 69, 74, 81, 86, 88, 96, 116];
        let highestLevel = 0;
        for(var i=0;i<userParty.length;i++) {
            if(userParty[i].level > highestLevel) {
                highestLevel = userParty[i].level;
            }
        }
        this.pokemon.push(PokemonUtilities.generateShadowPokemon(catchablePokemon[Math.floor(Math.random() * catchablePokemon.length)], 
            Utilities.generatePokemonLevel(highestLevel-5, highestLevel+5)));
        this.pokemon.push(PokemonUtilities.generateShadowPokemon(Math.floor(Math.random() * 143) + 1, 
            Utilities.generatePokemonLevel(highestLevel-5, highestLevel+5)));
        this.pokemon.push(PokemonUtilities.generateShadowPokemon(Math.floor(Math.random() * 143) + 1, 
            Utilities.generatePokemonLevel(highestLevel-5, highestLevel+5)));
        this.pokemon[0].moves[0] = {id: 1, pp: 10};
    }
    getPokemon(index) {
        return this.pokemon[index-1];
    }
    getActivePokemon() {
        let active = this.pokemon[this.activeIndex-1];
        if(active.options.transformTarget) {
            return active.options.transformTarget;
        }
        return this.pokemon[this.activeIndex-1];
    }
    getNextPokemon() {
        let alive = this.getAlivePokemon();
        if(alive.length <= 1) {
            this.activeIndex = this.pokemon.findIndex(el => el == alive[0])+1;
            return alive[0];
        }
        let active = this.getActivePokemon();
        let current = alive.findIndex(el => el == active);
        if(current+1 >= alive.length) {
            this.activeIndex = this.pokemon.findIndex(el => el == alive[0])+1;
        }
        else {
            this.activeIndex = this.pokemon.findIndex(el => el == alive[current+1])+1;
        }
        return this.pokemon[this.activeIndex-1];
    }
    getFirstPokemon() {
        return this.pokemon[0];
    }
    canSwitchPokemon() {
        return this.getAlivePokemon().length > 1;
    }
    getAlivePokemon() {
        return this.pokemon.filter(el => el.hp != 0);
    }
    canStillBattle() {
        return this.pokemon.filter(el => el.hp != 0).length != 0;
    }
    setPosition(zone, route, x, y) {
        this.zone = zone;
        this.route = route;
        this.x = x;
        this.y = y;
    }
}

module.exports = RocketTrainer;