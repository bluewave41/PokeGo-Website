module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Pokemon', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
            primaryKey: true,
            autoIncrement: true,
		},
		userID: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		pokemonID: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		nickname: {
			type: DataTypes.CHAR(20),
            allowNull: false,
            defaultValue: '',
		},
		level: {
			type: DataTypes.TINYINT,
			allowNull: false,
        },
        gender: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
		hp: {
			type: DataTypes.SMALLINT,
			allowNull: false,
        },
        maxHP: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
		atk: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		def: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		spatk: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		spdef: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		spd: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		hpIV: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
		atkIV: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
		defIV: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
		spatkIV: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
		spdefIV: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
		spdIV: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
		active: {
			type: DataTypes.TINYINT,
			allowNull: false,
        },
        shiny: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
        },
        shadow: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
        },
        totalIV: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        canTransfer: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        favorite: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        move1: {
            type: DataTypes.SMALLINT,
        },
		move1pp: {
			type: DataTypes.TINYINT,
		},
        move2: {
            type: DataTypes.SMALLINT,
        },
		move2pp: {
			type: DataTypes.TINYINT,
		},
        move3: {
            type: DataTypes.SMALLINT,
        },
		move3pp: {
			type: DataTypes.TINYINT,
		},
        move4: {
            type: DataTypes.SMALLINT,
        },
		move4pp: {
			type: DataTypes.TINYINT,
		},
        partyPosition: {
            type: DataTypes.TINYINT,
        },
	}, {
        tableName: 'pokemon',
    });
}