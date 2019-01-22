module.exports = function(sequelize, DataTypes) {
    let joincoments = sequelize.define('joincoments', {
        code: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        joincoment: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    joincoments.associate = function(model) {
        joincoments.belongsTo(model.moims)
        joincoments.belongsTo(model.profile)
    };
    return joincoments
}