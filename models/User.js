const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
		userID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
        },
        username: {
            type: DataTypes.CHAR(32),
            allowNull: false,
        },
        discriminator: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
		discordID: {
			type: DataTypes.BIGINT,
			allowNull: false,
		},
		currency: {
			type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
		},
		streak: {
			type: DataTypes.SMALLINT,
            allowNull: false,
            defaultValue: 0,
		},
		lastCommand: {
            type: DataTypes.CHAR(30),
            defaultValue: null,
		},
		json: {
            type: DataTypes.JSON,
            defaultValue: null,
        },
        battle: {
            type: DataTypes.JSON,
            defaultValue: null,
        },
        map: {
            type: DataTypes.JSON,
            defaultValue: null,
        },
        dailyResetTime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        pokemonStorage: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            defaultValue: 100,
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    });
}