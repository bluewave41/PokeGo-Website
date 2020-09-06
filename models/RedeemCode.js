module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RedeemCode', {
		code: {
			type: DataTypes.CHAR(20),
            allowNull: false,
            primaryKey: true,
		},
		items: {
			type: DataTypes.JSON,
			allowNull: false
		},
	});
}