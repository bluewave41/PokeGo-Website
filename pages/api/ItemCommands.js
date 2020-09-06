const db = require('./db');

module.exports = {
	async getNumberOfItem(userID, itemID) {
		let item = await db.item.findOne({
            attributes: ['amount'],
            where: {userID: userID, itemID: itemID}
        });
        if(!item) {
            return 0;
        }
        return item.amount;
    },
	/**
     * Removes an item and returns the number of items still remaining for that user.
     * @param {*} userID: parsedMessage.userID 
     * @param {string} itemName name of the item in string from (Poke Ball)
     * @param {integer} amount number of items to remove (defaults to 1)
     */
    async removeAndGetCountItem(userID, itemID, amount=1) {
        let record = await db.item.findOne({
            where: {userID: userID, itemID: itemID},
        });
        await record.decrement({'amount': amount});
        if(record.amount-amount <= 0) {
            record.destroy();
        }
        return record.amount-amount; //mysql doesn't support returning
    },
}