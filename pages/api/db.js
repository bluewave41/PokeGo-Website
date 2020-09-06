var { Sequelize, DataTypes, Op } = require('sequelize');
var sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
	host: process.env.host,
	dialect: 'mysql',
	
	pool: {
		max: 5,
		min: 0,
		idle: 10000
    },
});

const db = {};

db.sequelize = sequelize;
db.DataTypes = DataTypes;
db.Op = Op;

db.user = require('../../models/User')(sequelize, DataTypes);
db.pokemon = require('../../models/Pokemon')(sequelize, DataTypes);
db.candy = require('../../models/Candy')(sequelize, DataTypes);
db.pokedex = require('../../models/Pokedex')(sequelize, DataTypes);
db.server = require('../../models/Server')(sequelize, DataTypes);
db.item = require('../../models/Item')(sequelize, DataTypes);
db.trade = require('../../models/Trade')(sequelize, DataTypes);
db.bugreport = require('../../models/BugReport')(sequelize, DataTypes);
db.redeemcode = require('../../models/RedeemCode')(sequelize, DataTypes);
db.usedcode = require('../../models/UsedCode')(sequelize, DataTypes);
//db.party = require('./models/Party')(sequelize, DataTypes);

db.user.hasMany(db.pokemon, {foreignKey: 'userID', sourceKey: 'userID'});
db.pokemon.belongsTo(db.user, {foreignKey: 'userID', sourceKey: 'userID'});

db.user.hasMany(db.pokedex, {foreignKey: 'userID', sourceKey: 'userID'});
db.pokedex.belongsTo(db.user, {foreignKey: 'userID', sourceKey: 'userID'});

db.user.hasMany(db.candy, {foreignKey: 'userID', sourceKey: 'userID'});
db.candy.belongsTo(db.user, {foreignKey: 'userID', sourceKey: 'userID'});

db.user.hasMany(db.bugreport, {foreignKey: 'userID', sourceKey: 'userID'});
db.bugreport.belongsTo(db.user, {foreignKey: 'userID', sourceKey: 'userID'});

db.pokemon.hasOne(db.candy, {foreignKey: 'userID', sourceKey: 'userID'});
db.candy.belongsTo(db.pokemon, {foreignKey: 'userID', sourceKey: 'userID'});

db.user.hasMany(db.item, {foreignKey: 'userID', sourceKey: 'userID'});
db.item.belongsTo(db.user, {foreignKey: 'userID', sourceKey: 'userID'});

db.user.hasMany(db.trade, {foreignKey: 'userID', sourceKey: 'userID'});
db.trade.belongsTo(db.user, {foreignKey: 'userID', sourceKey: 'userID'});

db.user.hasMany(db.usedcode, {foreignKey: 'userID', sourceKey: 'userID'});
db.usedcode.belongsTo(db.user, {foreignKey: 'userID', sourceKey: 'userID'});

//db.party.hasMany(db.pokemon, {foreignKey: 'id', sourceKey: 'uniquePokemonID'});
//db.pokemon.belongsTo(db.party, {foreignKey: 'id', sourceKey: 'uniquePokemonID'});

module.exports = db;