const db = require('../../lib/db');
//const ItemCommands = require('./ItemCommands');
//const ItemList = require('./ItemList');

module.exports = {
    /*async createUser(discordID, username, discriminator) {
        await db.user.findOrCreate({
            where: {discordID: discordID},
            defaults: {lastCommand: 'starter', username: username, discriminator: discriminator},
        });
        let userID = await this.getUserID(discordID);
        await ItemCommands.insertItem(userID, ItemList.POKE_BALL.itemID, 10);
        await ItemCommands.insertItem(userID, ItemList.TRAVEL_TICKET.itemID, 1);
    },*/
    async startSearch(userID, map) {
        await db.user.update({
            lastCommand: 'search',
            json: map,
        }, {
            where: {userID: userID}
        });
    },
    async getUserID(discordID) {
        let user = await db.user.findOne({
            attributes: ['userID'],
            where: {discordID: discordID}
        });
        if(user) {
            return user.userID;
        }
        return -1;
    },
    async getLastCommand(userID) {
        let command = await db.user.findOne({
            attributes: ['lastCommand'],
            where: {userID: userID}
        });
        if(command) {
            return command.lastCommand;
        }
        return -1;
    },
    async doesUserExist(userID) {
        let user = await db.user.findOne({where: {userID: userID}});
        return user ? true : false;
    },
    async reset(userID) {
        await db.user.update({
            lastCommand: null,
            json: null,
            map: null,
        }, {
            where: {userID: userID},
        });
    },
    async getMap(userID) {
        let map = await db.user.findOne({
            attributes: ['map'],
            where: {userID: userID}
        });
        return JSON.parse(map.map);
    },
    async updateMap(userID, map) {
        await db.user.update({
            map: map
        }, {where: {userID: userID}});
    },
	async updateLastCommand(userID, message) {
        await db.user.update({
            lastCommand: message,
        }, {
            where: {userID: userID}
        });
	},
	async updateJSON(userID, object) {
        await db.user.update({
            json: object,
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
    async getDailyInformation(userID) {
        let time = await db.user.findOne({
            attributes: ['dailyResetTime', 'streak'],
            where: {userID: userID}
        });
        return {dailyResetTime: time.dailyResetTime, streak: time.streak};
    },
    async addCurrency(userID, amount) {
        await db.user.increment('currency', {by: amount, where: {userID: userID}});
    },
    async removeCurrency(userID, amount) {
        await db.user.decrement('currency', {by: amount, where: {userID: userID}});
    },
    async getCurrency(userID) {
        let currency = await db.user.findOne({
            attributes: ['currency'],
            where: {userID: userID},
        });
        return currency.currency;
    },
    /**This shit should be 1 query not like 23 */
    async updateDaily(userID, amount, streak, timeStamp) {
        await db.user.update({
            currency: db.sequelize.col('currency').currency+amount,
            streak: streak,
            dailyResetTime: timeStamp,
        }, {where: {userID: userID}});
    },
    /*async buyItem(userID, item, amount) {
        await this.removeCurrency(userID, item.price*amount);
        await ItemCommands.insertItem(userID, item.itemID, amount);
    },*/
    async getPokemonStorageAmount(userID) {
        let storage = await db.user.findOne({
            attributes: ['pokemonStorage'],
            where: {userID, userID}
        });
        return storage.pokemonStorage;
    },
    async increasePokemonStorage(userID, amount) {
        await db.user.increment('pokemonStorage', {by: amount, where: {userID: userID}});
    }
}