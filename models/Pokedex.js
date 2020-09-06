module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Pokedex', {
		userID: {
			type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
		},
		pokemonID: {
			type: DataTypes.SMALLINT,
            allowNull: false,
            primaryKey: true,
		},
		count: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	}, {
        freezeTableName: true,
		tableName: 'Pokedex'
    });
}