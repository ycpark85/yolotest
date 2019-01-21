module.exports = function(sequelize, DataTypes) {
    let friends = sequelize.define('friends', {
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

        }

    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    friends.associate = function(model) {

        friends.belongsTo(model.profile)
    }
    return friends
}