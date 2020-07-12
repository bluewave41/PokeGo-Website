module.exports = function(sequelize, DataTypes) {
    return sequelize.define('BugReport', {
		userID: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		message: {
			type: DataTypes.CHAR(200),
			allowNull: false
		},
		response: {
			type: DataTypes.CHAR(200),
			allowNull: true,
		}
	});
}