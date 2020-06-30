const db = require('../../lib/db');
const PokemonData = require('../..//lib/PokemonData');
//const PokemonUtilities = require('./PokemonUtilities');

module.exports = {
    async getPokemonList(userID, limit, offset) {
        let pokemonList = await db.pokemon.findAll({
            offset: offset,
            limit: limit,
            where: {userID: userID}});
        pokemonList.forEach(el => el.name = PokemonData[el.pokemonID].name);
        return pokemonList;
    },
    async getFilteredPokemonListCount(userID, searchObject) {
        let whereObject = {userID: userID};
        if(searchObject.symbol == '>') {
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
        }
        let pokemonCount = await db.pokemon.count({
            where: whereObject
        });
        return pokemonCount;
    },
    async getFilteredPokemonList(userID, limit, offset, searchObject) {
        let whereObject = {userID: userID};
        if(searchObject.symbol == '>') {
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
        }
        let pokemonList = await db.pokemon.findAll({
            offset: offset,
            limit: limit,
            where: whereObject
        });
        pokemonList.forEach(function(pokemon) {
            pokemon.name = PokemonData[pokemon.pokemonID].name;
            pokemon.emoji = PokemonData[pokemon.pokemonID].emoji;
        });
        return pokemonList;
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
    async getStrictPokemon(userID, uniquePokemonID) {
        let pokemon = await db.pokemon.findOne({
            where: {userID: userID, id: uniquePokemonID}
        });
        pokemon.setDataValue('name', PokemonData[pokemon.pokemonID].name);
        return pokemon;
    },
    async getPokemon(userID, uniquePokemonID=0) {
        let where = uniquePokemonID == 0 ? {active: 1, userID: userID} : {id: uniquePokemonID, userID: userID};
        let pokemon = await db.pokemon.findOne({
            where: where
        });
        if(pokemon) {
            pokemon.setDataValue('stage', PokemonData[pokemon.pokemonID].stage);
        }
        return pokemon;
    },
    async insertPokemon(userID, pokemon, active) {
        let candy;
        switch(PokemonData[pokemon.pokemonID].stage) {
            case 1:
                candy = 3;
                break;
            case 2: 
                candy = 5;
                break;
            case 3:
                candy = 10;
                break;
        }
        let uniquePokemonID = await this.createPokemon(userID, pokemon, active);
        //await CandyCommands.addCandies(userID, pokemon.pokemonID, candy);
        //await PokedexCommands.createOrUpdateEntry(userID, pokemon.pokemonID);
        return uniquePokemonID;
    },
    /*async createPokemon(userID, pokemon, active) {
        let uniquePokemonID = await db.pokemon.create({
            userID: userID,
            pokemonID: pokemon.pokemonID,
            nickname: pokemon.nickname,
            level: pokemon.level,
            hp: pokemon.hp,
            atk: pokemon.atk,
            def: pokemon.def,
            spatk: pokemon.spatk,
            spdef: pokemon.spdef,
            speed: pokemon.speed,
            hpIV: pokemon.hpIV,
            atkIV: pokemon.atkIV,
            defIV: pokemon.defIV,
            spatkIV: pokemon.spatkIV,
            spdefIV: pokemon.spdefIV,
            speedIV: pokemon.speedIV,
            active: active,
            shiny: pokemon.shiny,
            totalIV: PokemonUtilities.calculateTotalIV(pokemon)
        });
        return uniquePokemonID.id;
    },*/
    async transferPokemon(userID, pokemon) {
        await db.pokemon.destroy({
            where: {userID: userID, id: pokemon.id}
        });
        //add candy
    },
    async setNickname(userID, id, nickname) {
        let where = (id == -1) ? {active: 1, userID: userID} : {id: id, userID : userID};
        await db.pokemon.update({
            nickname: nickname
        }, {
            where: where
        });
    },
	async changeActivePokemon(userID, pokemonID) {
        await db.sequelize.query("UPDATE pokemon JOIN Users on pokemon.userID = Users.userID SET active = 0 WHERE Users.userID = ?",
        {replacements: [userID]});
        await db.sequelize.query("UPDATE pokemon JOIN Users on pokemon.userID = Users.userID SET active = 1 WHERE Users.userID = ? AND pokemon.id = ?",
        {replacements: [userID, pokemonID]});
	},
	async getActivePokemon(userID) {
        return await db.pokemon.findOne({
            include: [{
                model: db.user,
                where: {userID: userID},
            }],
            where: {active: 1},
        });
    },
    async levelUpPokemon(userID, uniquePokemonID, amount) {
        let pokemon = await this.getPokemon(userID, uniquePokemonID);
        let candyID = PokemonData[pokemon.pokemonID].candyID;
        pokemon.level += amount;
        this.updatePokemonStats(userID, pokemon);
        let candy = await db.candy.findOne({
            include: [{
                model: db.user,
                where: {userID: userID},
            }],
            where: {
                candyID: candyID,
            }
        });
        candy.decrement({'amount': amount});
    },
    /*async updatePokemonStats(userID, pokemon, evolveID) {
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
            atk: pokemon.atk,
            def: pokemon.def,
            spatk: pokemon.spatk,
            spdef: pokemon.spdef,
            speed: pokemon.speed,
        }, {where: {id: pokemon.id}});
    },*/
    async getPokemonCount(userID) {
        let count = await db.pokemon.count({
            where: {userID: userID}
        });
        return count;
    },
    async changePokemonIDForTrade(userID, uniquePokemonID) {
        await db.pokemon.update({
            userID: userID,
        }, {
            where: {id: uniquePokemonID}
        });
    },
    async changeTransferStatus(uniquePokemonID, status) {
        await db.pokemon.update({
            canTransfer: status,
        }, {
            where: {id: uniquePokemonID}
        });
    },
    async evolvePokemon(userID, uniquePokemonID, evolveID) {
        let pokemon = await this.getPokemon(userID, uniquePokemonID);
        await this.updatePokemonStats(userID, pokemon, evolveID);
    },
    async makePokemonFavorite(userID, uniquePokemonID) {
        await db.pokemon.update({
            favorite: true,
            canTransfer: false,
        }, {where: {userID: userID, id: uniquePokemonID}});
    }
}