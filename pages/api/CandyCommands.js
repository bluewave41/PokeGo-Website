const PokemonData = require('./PokemonData');
const db = require('./db');

module.exports = {
    async addCandies(userID, pokemonID, amount) {
        let candyID = PokemonData[pokemonID].candyID;
        let [record] = await db.candy.findOrCreate({
            where: {userID: userID, candyID: candyID},
            defaults: {amount: 0},
        });
        await record.increment({'amount': amount});
    },
    async getCandyForPokemon(userID, pokemonID) {
        let candyID = PokemonData[pokemonID].candyID;
        let amount = await db.candy.findOne({
            attributes: ['amount'],
            where: {candyID: candyID, userID: userID}
        });
        return {candyID: candyID, amount: amount.amount};
    },
    async removeCandies(userID, pokemonID, amount) {
        let candyID = PokemonData[pokemonID].candyID;
        await db.candy.decrement('amount', {by: amount, where: {candyID: candyID, userID: userID}})
    }
}