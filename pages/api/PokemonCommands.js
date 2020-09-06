const db = require('./db');
const Pokemon = require('./Pokemon');
const PokemonData = require('./PokemonData');
const PokemonUtilities = require('./PokemonUtilities');

module.exports = {
	async createPokemon(userID, pokemon) {
        let pokemonCount = await this.getPokemonCount(userID);
        let uniquePokemonID = await db.pokemon.create({
            userID: userID,
            pokemonID: pokemon.pokemonID,
            nickname: pokemon.nickname,
            level: pokemon.level,
            gender: pokemon.gender,
            hp: pokemon.hp,
            maxHP: pokemon.maxHP,
            atk: pokemon.atk,
            def: pokemon.def,
            spatk: pokemon.spatk,
            spdef: pokemon.spdef,
            spd: pokemon.spd,
            hpIV: pokemon.hpIV,
            atkIV: pokemon.atkIV,
            defIV: pokemon.defIV,
            spatkIV: pokemon.spatkIV,
            spdefIV: pokemon.spdefIV,
            spdIV: pokemon.spdIV,
            shiny: pokemon.shiny,
            shadow: pokemon.shadow,
			active: 0,
            partyPosition: (pokemonCount < 6) ? pokemonCount+1 : null,
            totalIV: PokemonUtilities.calculateTotalIV(pokemon),
            move1: pokemon.move1,
            move1pp: pokemon.move1pp,
            move2: pokemon.move2,
            move2pp: pokemon.move2pp,
            move3: pokemon.move3,
            move3pp: pokemon.move3pp,
            move4: pokemon.move4,
            move4pp: pokemon.move4pp,
        });
        return uniquePokemonID.id;
    },
	async getPokemonCount(userID) {
        let count = await db.pokemon.count({
            where: {userID: userID}
        });
        return count;
    },
	async getDisplayPokemon(userID, uniquePokemonID) {
        let pokemon = await this.getPokemon(userID, uniquePokemonID);
        if(!pokemon) {
            return null;
        }
        let candyID = PokemonData[pokemon.pokemonID].candyID;
        let candy = await db.candy.findOne({
            where: {candyID: candyID, userID: userID}
        });
        pokemon.amount = candy.amount;
        return pokemon;
    },
	async getFilteredPokemonList(userID, limit, offset, searchObject) {
        let whereObject = {userID: userID};
        /*if(searchObject.symbol == '>') {
            whereObject['totalIV'] = {
                [db.Op.gt]: searchObject.iv
            }
        }
        else if(searchObject.symbol == '<') {
            whereObject['totalIV'] = {
                [db.Op.lt]: searchObject.iv
            }
        }
        if(searchObject.favorite) {
            whereObject['favorite'] = searchObject.favorite;
        }
        if(searchObject.name) {
            let keys = Object.keys(PokemonData);
            for(var x=0;x<keys.length;x++) {
                if(PokemonData[keys[x]].name.toLowerCase() == searchObject.name.toLowerCase()) {
                    whereObject['pokemonID'] = PokemonData[keys[x]].pokedexNum;
                    break;
                }
            }
        }*/
        let pokemonCount = await db.pokemon.findAndCountAll({
            offset: offset,
            limit: limit,
            where: whereObject,
            raw: true,
        });
		return {count: pokemonCount.count, rows: pokemonCount.rows};
    },
	async getPokemon(userID, uniquePokemonID) {
        let pokemon = await db.pokemon.findOne({
            where: {id: uniquePokemonID, userID: userID},
            raw: true,
        });
        if(!pokemon) {
            return null;
        }
        return new Pokemon(pokemon);
    },
    async setNickname(userID, id, nickname) {
        let where = (id == -1) ? {active: 1, userID: userID} : {id: id, userID : userID};
        await db.pokemon.update({
            nickname: nickname
        }, { where: where });
    },
	async updatePokemonStats(userID, pokemon, evolveID) {
        if(evolveID) {
            pokemon.pokemonID = evolveID;
        }
        PokemonUtilities.calculateStats(pokemon);
        await db.pokemon.update({
            include: [{
                model: db.user,
                where: {userID: userID}
            }],
            pokemonID: pokemon.pokemonID,
            level: pokemon.level,
            hp: pokemon.hp,
            maxHP: pokemon.maxHP,
            atk: pokemon.atk,
            def: pokemon.def,
            spatk: pokemon.spatk,
            spdef: pokemon.spdef,
            spd: pokemon.spd,
        }, {where: {id: pokemon.id}});
    },
}