module.exports = function(sequelize, DataTypes) {
    let interfriends = sequelize.define('interfriends', {
        s_code: {
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

        }

    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    interfriends.associate = function(model) {

        interfriends.belongsTo(model.profile)
    }
    return interfriends
}