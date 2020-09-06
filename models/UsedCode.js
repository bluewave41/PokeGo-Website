module.exports = function(sequelize, DataTypes) {
    return sequelize.define('UsedCode', {
		userID: {
			type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
		},
		code: {
			type: DataTypes.CHAR(20),
            allowNull: false,
            primaryKey: true,
		},
	});
}