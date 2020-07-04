const db = require('../../lib/db');

module.exports = {
    async submitBugReport(userID, message) {
        await db.bugreport.create({
            userID: userID,
            message: message
        });
    },
    async getBugReportsForUser(userID) {
        return await db.bugreport.findAll({
            where: {userID: userID}
        })
    },
    async getAllBugReports() {
        return await db.bugreport.findAll({
            include: [{
                model: db.user,
                where: {userID: db.sequelize.col('User.userID')},
            }],
        });
    },
    async answerBugReport(id, response) {
        await db.bugreport.update({
            response: response,
        }, {where: {id: id}});
    }
}