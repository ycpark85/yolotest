module.exports = function(sequelize, DataTypes) {
    let addfriends = sequelize.define('addfriends', {
        fcode: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userid: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        targetid: {
            type: DataTypes.STRING(255),
            allowNull: false,

        },

    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    addfriends.associate = function(model) {

        addfriends.belongsTo(model.profile)
    }
    return addfriends
}