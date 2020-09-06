const db = require('./db');

module.exports = {
    async updateLastCommandJSON(userID, lastCommand, JSON) {
        await db.user.update({
            lastCommand: lastCommand,
            json: JSON,
        }, {
            where: {userID: userID}
        });
    },
	async getJSON(userID) {
		let json = await db.user.findOne({
			attributes: ['json'],
			where: {userID: userID}
		});
		return JSON.parse(json.json);
	},
	async reset(userID) {
        await db.user.update({
            lastCommand: null,
            json: null,
            map: null,
            battle: null,
        }, {
			where: {userID: userID}
		});
	},
	async addCurrency(userID, amount) {
        await db.user.increment('currency', {by: amount, where: {userID: userID}});
    },
	async getPokemonStorageAmount(userID) {
        let storage = await db.user.findOne({
            attributes: ['pokemonStorage'],
            where: {userID, userID}
        });
        return storage.pokemonStorage;
    },
}