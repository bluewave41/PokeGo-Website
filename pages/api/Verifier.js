const db = require('./db');
const ItemEnums = require('./ItemEnums');

class Verifier {
	constructor(userID) {
		this.userID = userID;
		this.errors = [];
	}
	async setUniquePokemonID(value) {
		if(!Number.isInteger(parseInt(value))) {
			this.errors.push(value + ' is not a number.');
			return;
		}
		let pokemon = await require('./PokemonCommands').getPokemon(this.userID, value);
		if(!pokemon) {
			this.errors.push(`You don't have a Pokemon with the ID ${value}.`);
			return;
		}
		this.pokemon = pokemon;
		this.uniquePokemonID = parseInt(value);
	}
	setNickname(value) {
		if(value.length > 20) {
			this.errors.push('That nickname is greater than 20 characters.');
			return;
		}
		this.nickname = value;
	}
	setPage(value) {
		if(!Number.isInteger(parseInt(value))) {
			this.page = 0;
		}
		else {
			this.page = parseInt(value)-1;
		}
	}
	setStarter(value) {
		if(!value) {
			this.errors.push('missing starter parameter');
			return;
		}
		const validNames = [
			{name: 'bulbasaur', id: 1},
			{name: 'charmander', id: 4},
			{name: 'squirtle', id: 7}
		];
		const userChoice = value.toLowerCase();
	
		let selection = validNames.find(el => el.name == userChoice);
		if(!selection) {
			this.errors.push(userChoice + ' is not a valid starter Pokemon');
			return;
		}
		this.starter = selection;
	}
	setPrefix(value) {
		if(!value) {
			this.errors.push('missing prefix parameter.');
			return;
		}
		if(value.length > 3) {
			this.errors.push("Your prefix must be 3 characters or less.");
			return;
		}
		this.prefix = value;
	}
	setServerID(value) {
		if(!value) {
			this.errors.push('missing serverID parameter.');
			return;
		}
		this.serverID = value;
	}
	setEvolveName(value) {
		this.evolveName = value;
	}
	async setCandyAmount(value) {
		value = parseInt(value);
		if(!value) {
			value = 1;
		}
		if(!this.pokemon) {
			this.errors.push("No Pokemon exists.");
			return;
		}
		if(!Number.isInteger(value)) {
			this.errors.push(value + ' is not a number.');
		}
		if(value < 1) {
			this.errors.push("Numeric parameters can't be less than 1.");
			return;
		}
		let candy = await require('./CandyCommands').getCandyForPokemon(this.userID, this.pokemon.pokemonID);
		if(candy.amount < value) {
			this.errors.push(`You only have ${candy.amount} candy for this Pokemon.`);
			return;
		}
		if(this.pokemon.level == 100) {
			this.errors.push("This Pokemon has reached its maximum level.");
			return;
		}
		if(this.pokemon.level + value > 100) {
			this.errors.push(`You can only power this Pokemon up ${100-this.pokemon.level} times.`);
			return;
		}
		this.amount = value;
	}
	async setCandyAmount() {
		let candy = await require('./CandyCommands').getCandyForPokemon(this.userID, this.pokemon.pokemonID);
		this.candyAmount = candy.amount;
	}
	setEvolveName(value) {
		if(!value) {
			return null;
		}
		this.evolveName = value;
	}
	async checkStorage() {
		let amount = await require('./UserCommands').getPokemonStorageAmount(this.userID);
		let pokemonCount = await require('./PokemonCommands').getPokemonCount(this.userID);
		if(pokemonCount >= amount) {
			this.errors.push("Your Pokemon storage is full! Either by an upgrade or transfer some Pokemon before exploring.");
			return;
		}
	}
	async checkPokeBalls() {
		let pokeballs = await require('./ItemCommands').getNumberOfItem(this.userID, ItemEnums.POKE_BALL);
		if(pokeballs <= 0) {
			this.errors.push("You have no Pokeballs! By some before you go exploring.");
			return;
		}
	}
	async checkTickets() {
		let tickets = await require('./ItemCommnds').getNumerOfItem(this.userID, ItemEnums.TRAVEL_TICKET);
		if(tickets <= 0) {
			this.errors.push("You have no travel tickets. You can't explore without one.");
			return;
		}
	}
	getErrors() {
		return this.errors;
	}
}

module.exports = Verifier;