const PokemonData = require('../PokemonData');

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
		},
		level: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
		hp: {
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
		speed: {
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
		speedIV: {
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
        thumbnail: {
            type: DataTypes.VIRTUAL,
            get() {
                if(!this.pokemonID) {
                    return;
                }
                let name = this.name.toLowerCase();
                return this.shiny ? 
                `/sprites/shiny/${name}.png` :
                `/sprites/normal/${name}.png`
            }
        },
        name: {
            type: DataTypes.VIRTUAL,
            get () {
                if(!this.pokemonID) {
                    return;
                }
                return PokemonData[this.pokemonID].name;
            }
        }
	}, {
        tableName: 'pokemon',
    });
}