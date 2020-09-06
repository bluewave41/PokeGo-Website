const db = require('./db');

module.exports = {
    async createOrUpdateEntry(userID, pokemonID) {
        let [record] = await db.pokedex.findOrCreate({
            where: {userID: userID, pokemonID: pokemonID},
            defaults: {count: 0},
        });
        await record.increment({'count': 1});
    }
}