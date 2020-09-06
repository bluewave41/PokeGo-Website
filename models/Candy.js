module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Candy', {
		userID: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		candyID: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		amount: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	}, {
        freezeTableName: true,
		tableName: 'candy'
    });
}