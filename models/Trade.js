module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Trade', {
		userID: {
			type: DataTypes.INTEGER,
			allowNull: false,
        },
        uniquePokemonID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pokedexID: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        tradePartnerUserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tradePartnerUniquePokemonID: {
            type: DataTypes.INTEGER,
        },
        tradePartnerPokedexID: {
            type: DataTypes.SMALLINT
        },
        invalidTimestamp: {
            type: DataTypes.INTEGER(4).UNSIGNED,
            allowNull: false,
        },
        confirm: {
            type: DataTypes.BOOLEAN,
        },
        tradePartnerConfirm: {
            type: DataTypes.BOOLEAN,
        }
	});
}