/*module.exports = function(sequelize, DataTypes) {
    return sequelize.define('party', {
        uniquePokemonID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
		userID: {
			type: DataTypes.INTEGER,
            allowNull: false,
        },
        position: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
	}, {
        freezeTableName: true,
		tableName: 'Party'
    });
}*/