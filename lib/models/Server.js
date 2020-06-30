module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Server', {
		serverID: {
			type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
		},
		prefix: {
			type: DataTypes.CHAR(3),
            allowNull: false,
		},
	});
}