module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Item', {
		userID: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		itemID: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		amount: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	});
}